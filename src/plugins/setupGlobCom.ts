import type { App } from 'vue'

import { Loading } from '@/components'

/* 挂载全局组件 */
export function setupGlobCom(app: App<Element>): void {
  app.component('Loading', Loading)
}
