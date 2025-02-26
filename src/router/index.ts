import type { App } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import { registerRouterGuard, routes } from './utils';

// 创建路由实例
const router = createRouter({
  // 使用 HTML5 历史模式
  history: createWebHistory(),
  // 路由配置
  routes,
  // 配置路由切换时的滚动行为：切换到新路由时，页面滚动到顶部
  scrollBehavior: () => ({ left: 0, top: 0 }),
});

// 注册路由导航守卫
registerRouterGuard(router);

async function setupRouter(app: App<Element>) {
  app.use(router);
  await router.isReady();
}

export { router, setupRouter };
