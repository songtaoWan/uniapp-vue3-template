<template>
  <view>
    <u-toast ref="uToastRef"></u-toast>
  </view>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const uToastRef = ref<any>()

const showToast = (params?: {
  type?: 'success' | 'error' | 'loading' | 'default';
  title?: string | number;
  message?: string | number;
  iconUrl?: string;
}) => {
  if (!uToastRef.value){
    return
  }

  uToastRef.value?.show({
    type: 'loading',
    message: '正在加载',
    ...params
  })
}

defineExpose({
  showToast
})
</script>
