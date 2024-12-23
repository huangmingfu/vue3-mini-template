import type {
  AxiosError,
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios'
import axios from 'axios'
import { REQUEST_TIMEOUT } from './constant'

const axiosInstance: AxiosInstance = axios.create({
  timeout: REQUEST_TIMEOUT,
  baseURL: import.meta.env.VITE_API_BASE_PATH,
})

// 请求拦截器
axiosInstance.interceptors.request.use(
  (res: InternalAxiosRequestConfig) => {
    // 在请求里加入token认证信息（如果这里加了，request里就无需再加，二选一）
    // const token = getToken() // localStorage.getItem('token')获取的
    // if (token) {
    //     config.headers.Authorization = `Bearer ${token}`
    // }
    return res
  },
  (err: AxiosError) => {
    return Promise.reject(err)
  },
)

// 响应拦截器即异常处理
axiosInstance.interceptors.response.use(
  (res: AxiosResponse) => {
    return res.data
  },
  (err: AxiosError) => {
    return Promise.resolve(err)
  },
)

export default axiosInstance
