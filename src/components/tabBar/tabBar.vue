<template>
  <u-tabbar
    :value="value"
    :fixed="fixed"
    :placeholder="placeholder"
    :activeColor="activeColor"
    :inactiveColor="inactiveColor"
    :border="border"
    :zIndex="zIndex"
    :safeAreaInsetBottom="safeAreaInsetBottom"
  >
    <u-tabbar-item
      v-for="(item, idx) in TABBAR_LIST"
      :text="item.text"
      :key="idx"
      :name="idx"
      :dot="list && list[idx]?.dot"
      :badge="list && list[idx]?.badge"
      :badge-style="list && list[idx]?.badgeStyle"
      :icon="list && list[idx]?.icon"
      @click="onChange(item.pagePath, idx !== value)"
    >
      <template #active-icon>
        <image v-if="item.selectedIconPath" class="u-page__item__slot-icon" :src="item.selectedIconPath"></image>
      </template>
      <template #inactive-icon>
        <image v-if="item.iconPath" class="u-page__item__slot-icon" :src="item.iconPath"></image>
      </template>
    </u-tabbar-item>
  </u-tabbar>
</template>

<script lang="ts" setup>
import { TABBAR_LIST } from '@/config/index'
import { onMounted } from 'vue'

onMounted(() => {
  uni.hideTabBar()
})

withDefaults(
  defineProps<{
    /**
     * 当前选中的标签名称
     */
    value?: number
    /**
     * 是否固定在底部
     */
    fixed?: boolean
    /**
     * 固定在底部时是否占位
     */
    placeholder?: boolean
    activeColor?: string
    inactiveColor?: string
    border?: boolean
    /**
     * 是否开启安全区适配
     */
    safeAreaInsetBottom?: boolean
    zIndex?: number
    list?: {
      icon?: string
      badge?: string | number
      dot?: boolean
      badgeStyle?: string | Record<string, any>
    }[]
  }>(),
  {
    value: 0,
    fixed: true,
    placeholder: true,
    activeColor: '#1989fa',
    inactiveColor: '#7d7e80',
    border: true,
    safeAreaInsetBottom: true,
    zIndex: 1,
  },
)

const onChange = (path: string, isJump = true) => {
  if (!isJump) return

  uni.switchTab({
    url: '/' + path,
  })
}
</script>

<style lang="scss" scoped></style>
