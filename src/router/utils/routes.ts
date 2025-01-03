import type { RouteRecordRaw } from 'vue-router';
import { getRoutesFromModules } from './tools';

/** 路由列表 */
export const routes: Array<RouteRecordRaw> = [
  {
    // 重定向
    path: '/',
    redirect: '/home',
  },
  ...getRoutesFromModules(),
  {
    name: 'NoFind',
    path: '/:pathMatch(.*)*',
    redirect: '/404',
  },
];
