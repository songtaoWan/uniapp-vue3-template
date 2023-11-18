import { useSetStore } from "@/store/setting";
import type { IBaseRequest } from "@/types";

/**
 * isAuth: 是否需要token, 默认为true
 * requestTask: 用于取消请求, 例如：const controller = { abort: () => {} }; 
 * getUserInfo(controller); controller.abort();
 * @param options 
 * @param uniOptions 
 * @returns 
 */
const request = <T extends string | AnyObject | ArrayBuffer>(
  options: IBaseRequest,
  uniOptions?: UniApp.RequestOptions,
): Promise<T> => {
  const header: Record<string, string> = {
    'Content-Type': 'application/json',
  }
  if (options.isAuth !== false) {
    const token = useSetStore().getToken()

    if (token) {
      header.Authorization = `Bearer ${token}`
    }
  }

  return new Promise((resolve, reject) => {
    // 是否取消请求，用于兼容使用requesTask.abort()不能取消请求的问题（如：飞书小程序）
    let isCancel = false
    const setting = {
      url: import.meta.env.VITE_BASE_API + options.url,
      header,
      timeout: 60000,
      data: options.data,
      success: (res: UniApp.RequestSuccessCallbackResult) => {
        if (isCancel) {
          setting.fail({ errMsg: 'request:fail abort' })
          return
        }

        if (res.statusCode === 200) {
          resolve(res.data as T)
          return
        }

        reject(res)
      },
      fail: (err: UniApp.GeneralCallbackResult) => {
        isCancel = false
        reject(err)
      },
      ...uniOptions,
    }
    
    const instance = uni.request(setting)
    if (options.requestTask) {
      options.requestTask.abort = () => {
        isCancel = true
        instance.abort()
      }
    }
  })
}

export default request
