import { App } from 'vue';
import { RouteLocationNormalized, createRouter, createWebHistory } from 'vue-router';

import routes from './routes';

// 定义路由白名单，这些路径可以直接访问而无需登录验证
const whiteList = ['/login', '/404', '/403'];

// 创建路由实例
const router = createRouter({
  // 使用 HTML5 历史模式
  history: createWebHistory(),
  // 路由配置
  routes,
  // 配置路由切换时的滚动行为：切换到新路由时，页面滚动到顶部
  scrollBehavior: () => ({ left: 0, top: 0 }),
});

// 全局路由守卫
router.beforeEach(async (to: RouteLocationNormalized, _from: RouteLocationNormalized, next) => {
  try {
    // 设置页面标题，优先使用路由元信息中的标题，否则使用环境变量中的默认标题
    document.title = (to.meta.title as string) || import.meta.env.VITE_APP_TITLE;

    // 获取本地存储的登录令牌
    const token = localStorage.getItem('token');

    // 判断是否需要登录验证
    if (!token && !whiteList.includes(to.path)) {
      // 未登录且访问的不是白名单路径时，重定向到登录页面
      next({
        path: '/login',
        // 保存原本要访问的路径，用于登录后重定向
        query: { redirect: encodeURIComponent(to.fullPath) },
      });
      return;
    }

    // 已登录状态下访问登录页面时，重定向到首页
    if (token && to.path === '/login') {
      next('/');
      return;
    }

    // 其他情况正常放行
    next();
  } catch (error) {
    // 路由守卫执行出错时的错误处理
    console.error('路由守卫执行错误:', error);
    next('/404');
  }
});

export const setupRouter = (app: App<Element>) => {
  app.use(router);
};

export default router;
