<template>
  <Designer ref="designer">
    <template #top>
      <ToolBar :bars="toolBars" class="w-full h-14 align-middle">
        <div class="tool-bar-title">{{ canvasState.name }}</div>
      </ToolBar>
    </template>
  </Designer>
</template>

<script setup lang="ts">
import { StaticKey, useEventBus } from '@open-data-v/base'
import { StaticDataPlugin, SubDataPlugin, WebsocketDataPlugin } from '@open-data-v/data'
/* eslint-disable-next-line @typescript-eslint/consistent-type-imports */
import {
  Designer,
  ToolBar,
  useCanvasState,
  useDataState,
  useScriptState
} from '@open-data-v/designer'
import { CustomScriptPlugin, SystemScriptPlugin } from '@open-data-v/scripts'
import { onMounted, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

import { getPageApi } from '@/api/pages'
import QuickDataPlugin from '@/data/Quick'
import RestDataPlugin from '@/data/Rest'
import useToolBars from '@/pages/DesignerView/toolbars'
import { useProjectSettingStoreWithOut } from '@/store/modules/projectSetting'
import { message } from '@/utils/message'

const scriptState = useScriptState()
scriptState.loadPlugins([CustomScriptPlugin, SystemScriptPlugin])

useEventBus(StaticKey.STDOUT, (event) => {
  const stdout = event as { type: string; name: string; message: any }
  if (stdout.name === 'handle') {
    let callback = message.info
    if (stdout.type === 'error') {
      callback = message.error
    } else if (stdout.type === 'warn') {
      callback = message.warning
    }
    callback(stdout.message)
  } else {
    let callback = console.info
    if (stdout.type === 'error') {
      callback = console.error
    } else if (stdout.type === 'warn') {
      callback = console.warn
    }
    callback(stdout.message)
  }
})

const canvasState = useCanvasState()
const dataState = useDataState()
dataState.loadPlugins([
  QuickDataPlugin,
  RestDataPlugin,
  StaticDataPlugin,
  SubDataPlugin,
  WebsocketDataPlugin
])
const route = useRoute()
const router = useRouter()
const toolBars = useToolBars(router, route)

const designer = ref<InstanceType<typeof Designer> | null>(null)

const settingStore = useProjectSettingStoreWithOut()

onMounted(async () => {
  const index = route.params.index as string
  // 设置当前页面ID
  canvasState.setCurrentPageId(index || 'unsaved')

  if (index) {
    await restore(index)
  }
})

const restore = async (index: string) => {
  const resp = await getPageApi(index)
  if (!resp.data) {
    return
  }
  // 确保页面ID已设置
  canvasState.setCurrentPageId(index)
  designer.value!.setLayoutData(resp.data)
}

watch(
  () => settingStore.darkTheme,
  () => {
    canvasState.darkTheme = settingStore.darkTheme
  }
)
</script>
