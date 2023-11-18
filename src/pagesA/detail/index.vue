<script lang="ts" setup>
import navBar from '@/components/navBar/navBar.vue'
import BaseModal from '@/components/baseModal/baseModal.vue'
import { ref } from 'vue'

const show = ref(false)
const onClick = () => {
  show.value = true
}

const onConfirm = () => {
  show.value = false
}
</script>

<template>
  <view class="container">
    <navBar>
      <template #center>
        <view class="title">详情页(子包)</view>
      </template>
    </navBar>

    <base-modal
      v-model:show="show"
      :show-cancel-button="true"
      title="提示"
      content="这是一个弹窗"
      @confirm="onConfirm"
    ></base-modal>
    <view style="width: 100rpx; margin: 150rpx auto">
      <u-button type="primary" text="悟空" @click="onClick"></u-button>
    </view>
  </view>
</template>

<style lang="scss" scoped></style>
