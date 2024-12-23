import type { AxiosRequestConfig, AxiosResponse } from 'axios'
import { CONTENT_TYPE } from './constant'
import axiosInstance from './service'

function request(option: AxiosRequestConfig) {
  const { url, method, params, data, headers, responseType } = option

  const token = localStorage.getItem('token')

  return axiosInstance.request({
    url,
    method,
    params,
    data,
    responseType,
    headers: {
      'Content-Type': CONTENT_TYPE,
      'Authorization': token ?? '',
      ...headers,
    },
  })
}

export default {
  get: <T = any>(option: AxiosRequestConfig) => {
    return request({ method: 'get', ...option }) as Promise<AxiosResponse<IResponse<T>>>
  },
  post: <T = any>(option: AxiosRequestConfig) => {
    return request({ method: 'post', ...option }) as Promise<AxiosResponse<IResponse<T>>>
  },
  delete: <T = any>(option: AxiosRequestConfig) => {
    return request({ method: 'delete', ...option }) as Promise<AxiosResponse<IResponse<T>>>
  },
  put: <T = any>(option: AxiosRequestConfig) => {
    return request({ method: 'put', ...option }) as Promise<AxiosResponse<IResponse<T>>>
  },
}
