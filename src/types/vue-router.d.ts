import 'vue-router';

declare module 'vue-router' {
  interface RouteMeta {
    title?: string; // 标题
    keepAlive?: boolean; // 是否缓存
    transition?: string; // 路由切换组件过渡动画名称
  }
}

// 为了确保这个文件被当作一个模块，添加至少一个 `export` 声明
// oxlint-disable-next-line require-module-specifiers
export {};
