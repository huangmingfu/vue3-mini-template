import antfu from '@antfu/eslint-config'

export default antfu({
  // TypeScript 和 Vue 是自动检测的，你也可以显式启用它们
  typescript: true, // ts 支持
  vue: true, // vue 支持
  unocss: true, // unocss 支持
  stylistic: true, // 样式格式化
  formatters: true, // eslint-plugin-format 格式化
  // 忽略某些文件或目录
  // ignores: [
  //   '**/fixtures',
  //   // ...globs
  // ],
})
