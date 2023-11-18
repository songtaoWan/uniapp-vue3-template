import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useSetStore = defineStore('setting', () => {
  const token = ref('')
  function getToken() {
    if (token.value) {
      return token.value
    }

    try {
      const value = uni.getStorageSync('token')
      setToken(value)
      return value
    } catch (e) {
      console.error(e)
      return ''
    }
  }
  function setToken(value: string) {
    token.value = value
    uni.setStorage({
      key: 'token',
      data: value,
    })
  }

  return {
    token,
    getToken,
    setToken,
  }
})
