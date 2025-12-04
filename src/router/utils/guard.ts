import type { Router } from 'vue-router';
import { startProgress, stopProgress } from '@/plugins/nprogress';
import { isWhiteList } from './whitelist';

const LOGIN_PATH = '/login';

export function registerRouterGuard(router: Router) {
  // 全局前置守卫
  router.beforeEach((to, _from) => {
    startProgress();
    const token = localStorage.getItem('token');
    // 如果没有登录
    if (!token) {
      // 如果在免登录的白名单中，则直接进入
      if (isWhiteList(to)) return true;
      // 其他没有访问权限的页面将被重定向到登录页面
      return LOGIN_PATH;
    }
    // 如果已经登录，并准备进入 Login 页面，则重定向到主页
    if (to.path === LOGIN_PATH) return '/';
    // 判断有无该页面权限
    // if (to.meta.roles ? userStore.roles.some(role => to.meta.roles!.includes(role)) : true)  return true;
    // 无权限则进入 403 页面
    return '/403';
  });

  // 全局后置钩子
  router.afterEach((to) => {
    stopProgress();
    // 设置页面标题，优先使用路由元信息中的标题，否则使用环境变量中的默认标题
    document.title = (to.meta.title as string) || import.meta.env.VITE_APP_TITLE;
  });
}
