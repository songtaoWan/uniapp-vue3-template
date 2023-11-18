<script lang="ts" setup>
import TabBar from "@/components/tabBar/tabBar.vue"

const onClick = () => {
  uni.navigateTo({
    url: '/pagesA/detail/index'
  })
}
</script>

<template>
  <view class="container">
    <tab-bar :value="1"></tab-bar>

    <view style="padding: 20px">
      <u-button type="primary" text="跳转到详情页" @click="onClick"></u-button>
    </view>
  </view>
</template>

<style lang="scss" scoped>

</style>