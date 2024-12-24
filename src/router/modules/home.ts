import type { RouteRecordRaw } from 'vue-router'

export default [
  {
    path: '/home',
    name: 'Home',
    meta: {
      title: '首页',
      keepAlive: true, // 是否缓存路由
    },
    component: () => import('@/views/Home/Home.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    meta: {
      title: '登录',
    },
    component: () => import('@/views/Login/Login.vue'),
  },
] as RouteRecordRaw[]
