<script lang="ts" setup>
withDefaults(
  defineProps<{
    safeAreaInsetTop?: boolean
    /**
     * 固定在顶部时，是否生成一个等高元素，以防止塌陷
     */
    placeholder?: boolean
    fixed?: boolean
    border?: boolean
    /**
     * 左边返回图标的名称，只能为uview-plus自带的图标
     */
    leftIcon?: string
    leftText?: string
    rightIcon?: string
    rightText?: string
    title?: string
    bgColor?: string
    titleWidth?: string | number
    height?: string | number
    leftIconSize?: string | number
    leftIconColor?: string
    autoBack?: boolean
    titleStyle?: string | Record<string, any>
  }>(),
  {
    safeAreaInsetTop: true,
    placeholder: false,
    fixed: true,
    border: false,
    leftIcon: 'arrow-left',
    leftText: '',
    rightIcon: '',
    rightText: '',
    title: '',
    bgColor: '#ffffff',
    titleWidth: '400rpx',
    height: '44px',
    leftIconSize: '20px',
    leftIconColor: '#303133',
    autoBack: true,
    titleStyle: '',
  },
)

const $emits = defineEmits<{
  (e: 'leftClick'): void;
  (e: 'rightClick'): void;
}>()

const onLeftClick = () => {
  $emits('leftClick')
}
const onRightClick = () => {
  $emits('rightClick')
}
</script>

<template>
  <view>
    <u-navbar
      :title="title"
      :safeAreaInsetTop="safeAreaInsetTop"
      :placeholder="placeholder"
      :fixed="fixed"
      :border="border"
      :leftText="leftText"
      :rightIcon="rightIcon"
      :rightText="rightText"
      :bgColor="bgColor"
      :titleWidth="titleWidth"
      :height="height"
      :leftIconSize="leftIconSize"
      :leftIconColor="leftIconColor"
      :titleStyle="titleStyle"
      :autoBack="autoBack"
      @leftClick="onLeftClick"
      @rightClick="onRightClick"
    >
      <template #left>
        <slot name="left">
          <!-- leftIcon：设置在u-navbar上时，在小程序不显示，因此使用插槽 -->
          <u-icon :name="leftIcon"></u-icon>
        </slot>
      </template>
      <template #center>
        <slot name="center"></slot>
      </template>
      <template #right>
        <slot name="right"></slot>
      </template>
    </u-navbar>
  </view>
</template>

<style lang="scss" scoped></style>
