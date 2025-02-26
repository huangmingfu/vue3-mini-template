import antfu from '@antfu/eslint-config';

export default antfu({
  // 禁用 jsonc 和 yaml 支持
  toml: false,
  yaml: false,
  // TypeScript 和 Vue 是自动检测的，你也可以显式启用它们
  typescript: true,
  vue: true,
  // unocss 支持
  unocss: true,
  // 风格配置
  stylistic: {
    indent: 2,
    semi: true, // 分号
    quotes: 'single',
  },
  // eslint-plugin-format 格式化
  formatters: true,
  rules: {
    // vue组件标签的顺序，默认是 script, template, style
    'vue/block-order': ['error', {
      order: ['template', 'script', 'style'],
    }],
    // 'no-console': 'off',
  },
  // 忽略某些文件或目录
  // ignores: [
  //   '**/fixtures',
  // ],
});
