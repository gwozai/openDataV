<template>
  <ToolBar :bars="toolBars" class="w-full h-14 align-middle" />
</template>

<script setup lang="ts">
import type { ToolBarItemType } from '@open-data-v/designer'
import { ToolBar } from '@open-data-v/designer'
import { h } from 'vue'
import { useRouter } from 'vue-router'

import LogoView from '@/components/LogoView'

import { toggleTheme } from './modules/actions'
import ThemeIcon from './modules/themeSwitch/ThemeIcon.vue'

const router = useRouter()

const toolBars: ToolBarItemType[] = [
  {
    label: '首页',
    action: async (_e: MouseEvent) => {
      await router.push({
        name: 'Pages'
      })
    },
    icon: () =>
      h(LogoView, {
        width: '60px'
      }),
    divider: true,
    location: 'left'
  },
  {
    label: 'GitHub',
    action: () => {
      window.open('https://github.com/AnsGoo/openDataV', '_blank')
    },
    icon: 'github',
    location: 'right'
  },
  {
    label: '主题',
    action: toggleTheme,
    icon: () => h(ThemeIcon),
    location: 'right'
  }
]
</script>

<style scoped lang="less">
.tool-bar-title {
  font-size: 20px;
  font-weight: 400;
}
</style>
