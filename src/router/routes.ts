import { RouteRecordRaw } from 'vue-router';

import { routes as modulesRoutes } from './utils';

const routes: Array<RouteRecordRaw> = [
  {
    //重定向
    path: '/',
    redirect: '/home',
  },
  ...modulesRoutes,
  {
    name: 'NoFind',
    path: '/:pathMatch(.*)*',
    component: () => import('@/components/Error/404.vue'),
  },
];

export default routes;
