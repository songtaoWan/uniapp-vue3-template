<script lang="ts" setup>
const $emits = defineEmits<{
  (e: 'update:show', value: boolean): void
  (e: 'confirm'): void
}>()
withDefaults(
  defineProps<{
    show: boolean
    title?: string
    content?: string
    confirmText?: string
    cancelText?: string
    confirmColor?: string
    cancelColor?: string
    showConfirmButton?: boolean
    showCancelButton?: boolean
    buttonReverse?: boolean
    zoom?: boolean
    asyncClose?: boolean
    closeOnClickOverlay?: boolean
    negativeTop?: string | number
    width?: string | number
    confirmButtonShape?: 'circle' | 'square' | ''
  }>(),
  {
    show: false,
    title: '提示',
    content: '',
    confirmText: '确定',
    cancelText: '取消',
    confirmColor: '#2979ff',
    cancelColor: '#606266',
    showConfirmButton: true,
    showCancelButton: false,
    buttonReverse: false,
    zoom: true,
    asyncClose: true,
    closeOnClickOverlay: true,
    negativeTop: 0,
    width: '650rpx',
    confirmButtonShape: '',
  },
)

const onClose = () => {
  $emits('update:show', false)
}

const onConfirm = () => {
  $emits('confirm')
}
</script>

<template>
  <view>
    <u-modal
      :show="show"
      :title="title"
      :confirmText="confirmText"
      :cancelText="cancelText"
      :confirmColor="confirmColor"
      :cancelColor="cancelColor"
      :showConfirmButton="showConfirmButton"
      :showCancelButton="showCancelButton"
      :buttonReverse="buttonReverse"
      :zoom="zoom"
      :negativeTop="negativeTop"
      :width="width"
      :confirmButtonShape="confirmButtonShape"
      :asyncClose="asyncClose"
      @cancel="onClose"
      @close="onClose"
      @confirm="onConfirm"
    >
      <template #default>
        <slot>
          <view class="content">{{ content }}</view>
        </slot>
      </template>
      <!-- 如果开启了这个插槽，则不会显示默认的确认按钮，即使你不向这个插槽传入任何东西 -->
      <!-- <template #confirmButton>
        <slot name="confirmButton"></slot>
      </template> -->
    </u-modal>
  </view>
</template>

<style lang="scss" scoped>
.content {
  font-size: 24rpx;
  color: #606266;
  text-align: center;
  padding: 10rpx 0;
}
</style>
