import type { RouteRecordRaw } from 'vue-router'

export default [
  {
    path: '/404',
    name: '404',
    meta: {
      title: '404',
    },
    component: () => import('@/components/Error/404.vue'),
  },
  {
    path: '/403',
    name: '403',
    meta: {
      title: '403',
    },
    component: () => import('@/components/Error/403.vue'),
  },
] as RouteRecordRaw[]
