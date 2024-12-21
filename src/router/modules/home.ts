import type { RouteRecordRaw } from 'vue-router';

export default {
  path: '/home',
  name: 'Home',
  meta: {
    title: '首页',
    keepAlive: true, //是否缓存路由
  },
  component: () => import('@/pages/Home/Home.vue'),
} as RouteRecordRaw;
