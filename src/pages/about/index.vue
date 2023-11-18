<script lang="ts" setup>
import { getUserInfo } from '@/api/user'
import { showLoading } from '@/utils/uniPromise'
import { ref } from 'vue'
import TabBar from "@/components/tabBar/tabBar.vue"

const data1 = ref('')
const onClick = () => {
  showLoading({title: '请求中...'})
  getUserInfo<{ name: string }>().then((res) => {
    data1.value = res.data.name
    uni.hideLoading()
  })
}

const data2 = ref('')
const onAbort = () => {
  const obj = { abort: () => {} }
  getUserInfo<{ name: string }>(obj).then((res) => {
    console.log(res)
  }).catch((err) => {
    data2.value = err.errMsg
  })

  obj.abort()
}
</script>

<template>
  <view class="container">
    <view style="padding: 20px">
      <u-button type="primary" text="发送请求" @click="onClick"></u-button>
      <text style="padding: 20px">请求信息：{{ data1 }}</text>
    </view>
    <view style="padding: 20px">
      <u-button type="warning" text="中断请求" @click="onAbort"></u-button>
      <text style="padding: 20px">请求信息：{{ data2 }}</text>
    </view>

    <tab-bar :value="2"></tab-bar>
  </view>
</template>

<style lang="scss" scoped></style>
