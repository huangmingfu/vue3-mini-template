import path from 'node:path'
import process from 'node:process'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { defineConfig, loadEnv } from 'vite'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd())

  return {
    resolve: {
      alias: {
        '@': path.resolve(import.meta.dirname, 'src'),
      },
    },
    plugins: [vue(), vueJsx()],
    css: {
      preprocessorOptions: {
        scss: {
          javascriptEnabled: true,
          additionalData: `@use "@/styles/scss/index.scss" as *;`,
        },
      },
    },
    // 反向代理解决跨域问题
    server: {
      // open: true,// 运行时自动打开浏览器
      host: '0.0.0.0', // 局域网别人也可访问
      port: Number(env.VITE_APP_PORT), // 端口号
      proxy: {
        [env.VITE_APP_BASE_API]: {
          target: env.VITE_SERVER_URL,
          changeOrigin: true,
          rewrite: (path: string) => path.replace(new RegExp(`^${env.VITE_APP_BASE_API}`), ''),
        },
      },
    },
    // 打包配置
    esbuild:
          env.VITE_NODE_ENV === 'development'
            ? undefined
            : {
                /** 打包时移除 console.log */
                pure: ['console.log'],
                /** 打包时移除 debugger */
                drop: ['debugger'],
                /** 打包时移除所有注释 */
                legalComments: 'none',
              },
    build: {
      target: 'esnext',
      outDir: env.VITE_OUT_DIR || 'dist',
      chunkSizeWarningLimit: 2000,
      rollupOptions: {
        output: {
          chunkFileNames: 'js/[name]-[hash].js',
          entryFileNames: 'js/[name]-[hash].js',
          assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
          manualChunks: {
            'vendor-vue': ['vue', 'vue-router'],
            'vendor-utils': [
              'dayjs',
              'pinia',
              '@vueuse/core',
            ],
            // 'vendor-ui':['ant-design-vue']
          },
        },
      },
    },
  }
})