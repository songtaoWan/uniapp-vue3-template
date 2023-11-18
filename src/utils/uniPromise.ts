/**
 * 检查更新，需要更新resolve
 * @returns
 */
export const onCheckForUpdate = () => {
  return new Promise<{ updateManger: UniApp.UpdateManager; res: UniApp.OnCheckForUpdateResult }>((resolve, reject) => {
    if (uni.canIUse('getUpdateManager')) {
      const updateManager = uni.getUpdateManager()
      updateManager.onCheckForUpdate((res) => {
        if (res.hasUpdate) {
          resolve({ updateManger: updateManager, res })
        }
      })
      return
    }

    reject()
  })
}

export const onUpdateReady = (updateManager: UniApp.UpdateManager) => {
  return new Promise<void>((resolve) => {
    updateManager.onUpdateReady(() => {
      resolve()
    })
  })
}

export const onUpdateFailed = (updateManager: UniApp.UpdateManager) => {
  return new Promise<void>((resolve) => {
    updateManager.onUpdateFailed(() => {
      resolve()
    })
  })
}

/**
 * uni.showModal 点击确定resolve，点击取消reject
 * @param options
 * @returns
 */
export const showModal = (options: UniApp.ShowModalOptions) => {
  return new Promise<UniApp.ShowModalRes>((resolve, reject) => {
    uni.showModal({
      ...options,
      success: (res) => {
        if (res.confirm) {
          resolve(res)
          return
        }

        if (res.cancel) {
          reject(res)
          return
        }
      },
    })
  })
}

export const showLoading = (options?: UniApp.ShowLoadingOptions) => {
  return new Promise<void>((resolve, reject) => {
    uni.showLoading({
      title: '加载中',
      mask: true,
      ...options,
      success: () => {
        resolve()
      },
      fail: () => {
        reject()
      },
    })
  })
}

/**
 * 默认显示2s，不带icon
 * @param options
 * @returns
 */
export const showToast = (options: UniApp.ShowToastOptions) => {
  return new Promise<void>((resolve, reject) => {
    uni.showToast({
      icon: 'none',
      duration: 2000,
      mask: true,
      ...options,
      success: () => {
        resolve()
      },
      fail: () => {
        reject()
      },
    })
  })
}

export const login = (options?: UniApp.LoginOptions) => {
  return new Promise<UniApp.LoginRes>((resolve, reject) => {
    uni.login({
      ...options,
      success: (res) => {
        resolve(res)
      },
      fail: (err) => {
        reject(err)
      },
    })
  })
}

/**
 * 上传文件，默认上传图片
 * @param options
 * @returns
 */
export const uploadFile = (
  options: UniApp.UploadFileOption,
  task?: {
    abort?: () => void
    onProgressUpdate?: (callback: (res: UniApp.OnProgressUpdateResult) => void) => void
  },
) => {
  return new Promise<UniApp.UploadFileSuccessCallbackResult>((resolve, reject) => {
    const uploadTask = uni.uploadFile({
      fileType: 'image',
      timeout: 300000,
      ...options,
      success: (res) => {
        resolve(res)
      },
      fail: (err) => {
        reject(err)
      },
    })

    if (!task) {
      return
    }

    task.abort = () => {
      uploadTask.abort()
    }

    task.onProgressUpdate = (callback) => {
      uploadTask.onProgressUpdate(callback)
    }
  })
}

/**
 * 下载文件
 * @param url
 * @param task
 * @param options
 * @returns
 */
export const downloadFile = (
  url: string,
  task?: {
    abort?: () => void
    onProgressUpdate?: (callback: (res: UniApp.OnProgressDownloadResult) => void) => void
  },
  options?: UniApp.DownloadFileOption,
) => {
  return new Promise<UniApp.DownloadSuccessData>((resolve, reject) => {
    const downloadTask = uni.downloadFile({
      url,
      timeout: 60000,
      ...options,
      success: (res) => {
        resolve(res)
      },
      fail: (err) => {
        reject(err)
      },
    })

    if (!task) {
      return
    }

    task.abort = () => {
      downloadTask.abort()
    }

    task.onProgressUpdate = (callback) => {
      downloadTask.onProgressUpdate(callback)
    }
  })
}
