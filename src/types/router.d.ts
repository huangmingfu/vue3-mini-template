import type { RouteRecordRaw } from 'vue-router';

interface RouteMetaCustom extends Record<string | number | symbol, unknown> {
  title?: string; // 标题
  keepAlive?: boolean; // 是否缓存
  transition?: string; // 路由切换组件过渡动画名称
}

declare module 'vue-router' {
  interface RouteMeta extends RouteMetaCustom {
    required?: boolean;
  }
}
