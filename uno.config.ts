import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss';

export default defineConfig({
  // 快捷类名定义
  shortcuts: [
    // 基础按钮样式
    ['btn', 'px-4 py-1 rounded inline-block bg-teal-700 text-white cursor-pointer !outline-none hover:bg-teal-800 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'],
    // 图标按钮样式
    ['icon-btn', 'inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600'],
  ],
  // 预设配置
  presets: [
    presetUno(), // 默认预设
    presetAttributify(), // 启用属性化模式
    presetIcons({
      scale: 1.2, // 图标缩放比例
    }),
    presetTypography(), // 排版预设
    presetWebFonts({
      // 网络字体配置
      fonts: {
        sans: 'DM Sans',
        serif: 'DM Serif Display',
        mono: 'DM Mono',
      },
    }),
  ],
  // 转换器配置
  transformers: [
    transformerDirectives(), // 启用指令转换器
    transformerVariantGroup(), // 启用组变体转换器
  ],
  // 安全列表 - 这些类名将始终生成
  safelist: 'prose prose-sm m-auto text-left'.split(' '),
});
