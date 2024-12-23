import type { RawAxiosRequestHeaders } from 'axios'

/**
 * 请求成功状态码
 */
export const SUCCESS_CODE = 200

/**
 * 请求contentType
 */
export const CONTENT_TYPE: RawAxiosRequestHeaders['Content-Type'] = 'application/json'

/**
 * 请求超时时间，30s
 */
export const REQUEST_TIMEOUT = 30000
