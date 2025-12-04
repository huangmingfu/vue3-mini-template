import type { RouteLocationNormalizedGeneric, RouteRecordNameGeneric } from 'vue-router';

/** 免登录白名单（匹配路由 path） */
const whiteListByPath = new Set(['/home', '/login', '/404', '/403']);

/** 免登录白名单（匹配路由 name） */
const whiteListByName = new Set<RouteRecordNameGeneric>([]);

/** 判断是否在白名单 */
export function isWhiteList(to: RouteLocationNormalizedGeneric) {
  // path 和 name 任意一个匹配上即可
  return whiteListByPath.has(to.path) || whiteListByName.has(to.name);
}
