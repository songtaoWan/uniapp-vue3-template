<template>
  <view class="content">
    <base-toast ref="uToast"></base-toast>
    <image class="logo" src="/static/logo.png" />
    <view class="text-area">
      <text class="title">{{ userStore.user.name }}</text>
      <text class="title">{{ userStore.user.email }}</text>
    </view>
    <view style="padding: 20px">
      <u-button type="primary" text="显示加载" @click="onClick"></u-button>
    </view>

    <tab-bar :value="0"></tab-bar>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useUserStore } from '@/store/user'
import BaseToast from '@/components/baseToast/baseToast.vue'
import TabBar from "@/components/tabBar/tabBar.vue"

const uToast = ref<InstanceType<typeof BaseToast>>()
const userStore = useUserStore()
const onClick = () => {
  uToast.value?.showToast()
}
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
