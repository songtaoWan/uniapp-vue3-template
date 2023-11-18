<script lang="ts" setup>

</script>

<template>
  <view class="noauth">
    <image class="logo" src="/static/noauth.png" />
    <text style="color: #999;">无访问权限</text>
  </view>
</template>

<style lang="scss" scoped>
.noauth {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 300rpx;
  width: 300rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}
</style>