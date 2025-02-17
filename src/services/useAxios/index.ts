import type { UseAxiosOptions } from '@vueuse/integrations';
import { useAxios } from '@vueuse/integrations';

import instance from './service';

export function GET(url: string, options?: UseAxiosOptions) {
  return useAxios(url, { method: 'GET' }, instance, options);
}

export function POST(url: string, options?: UseAxiosOptions) {
  return useAxios(url, { method: 'POST' }, instance, options);
}

export function PUT(url: string, options?: UseAxiosOptions) {
  return useAxios(url, { method: 'PUT' }, instance, options);
}

export function DELETE(url: string, options?: UseAxiosOptions) {
  return useAxios(url, { method: 'DELETE' }, instance, options);
}

/** 使用示例：api/ */
// export function apiGetUserInfo(options?: UseAxiosOptions) {
//   return POST('/user/info', options)
// }
// const { data, isFinished, isLoading, execute } = apiGetUserInfo({
//   immediate: false,
// })
// execute({
//   params: {
//     id: 1,
//   },
// })
