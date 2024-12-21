declare module 'vue-router' {
  interface RouteMeta {
    title?: string // 标题
    keepAlive?: boolean // 是否缓存
    transition?: string // 路由切换组件过渡动画名称
  }
}
export {}
