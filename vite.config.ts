import path from 'node:path';
import process from 'node:process';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import Unocss from 'unocss/vite';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  return {
    resolve: {
      alias: {
        '@': path.resolve(import.meta.dirname, 'src'),
      },
    },
    plugins: [vue(), vueJsx(), Unocss()],
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
    build: {
      target: 'esnext',
      outDir: env.VITE_OUT_DIR || 'dist',
      chunkSizeWarningLimit: 2000,
      rollupOptions: {
        output: {
          chunkFileNames: 'assets/js/[name]-[hash].js',
          entryFileNames: 'assets/js/[name]-[hash].js',
          assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
          manualChunks: {
            'vendor-vue': ['vue', 'vue-router'],
            'vendor-utils': [
              'dayjs',
              'pinia',
              'pinia-plugin-persistedstate',
              '@vueuse/core',
              'nprogress',
            ],
            // 'vendor-ui':['ant-design-vue']
          },
        },
      },
    },
  };
});
