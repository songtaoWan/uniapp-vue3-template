import { onCheckForUpdate, onUpdateReady, onUpdateFailed, showModal } from './uniPromise'

export default function autoUpdate() {
  onCheckForUpdate().then(({ updateManger }) => {
    onUpdateReady(updateManger).then(() => {
      showModal({ title: '更新提示', content: '新版本已经准备好，是否重启应用？' })
        .then(() => {
          updateManger.applyUpdate()
        })
        .catch(() => {
          showModal({ title: '温馨提示', content: '我们已经做了新的优化，请及时更新哦~', showCancel: false })
            .then(() => {
              updateManger.applyUpdate()
            })
            .catch(() => {
              autoUpdate()
            })
        })
    })

    onUpdateFailed(updateManger).then(() => {
      uni.showModal({
        title: '温馨提示',
        content: '新版本下载失败，请检查网络',
      })
    })
  }).catch(() => {
    showModal({
      title: '温馨提示',
      content: '当前软件版本过低，无法使用自动更新功能，请升级到最新版本后重试。',
    })
  })
}
