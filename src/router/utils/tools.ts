import type { RouteRecordRaw } from 'vue-router'

export * from '@/plugins/nprogress'

/**
 * 基于 router/modules 文件导出的内容动态生成路由
 */
export function getRoutesFromModules() {
  const routes: RouteRecordRaw[] = []

  const modules = import.meta.glob('../modules/**/*.ts', { eager: true }) as Record<
    string,
    Record<'default', RouteRecordRaw[]>
  >
  Object.keys(modules).forEach((key) => {
    const mod = modules[key].default || {}
    const modList = Array.isArray(mod) ? [...mod] : [mod]
    routes.push(...modList)
  })
  return routes
}
