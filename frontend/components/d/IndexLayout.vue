<script setup lang="ts">
import type { PermissionType } from '~/types/PermissionType'
interface IButtonConfig {
  show?: boolean
  cta?: string
  path?: string
}

interface IProps {
  config?: {
    title?: string
    button?: {
      create?: IButtonConfig
    }
    tabs?: string[]
    currentTab?: string | number
    divHeightOverflowLimit?: number
    permission?: PermissionType
    contentClass?: string
  }
}

const defaultProps: IProps = {
  config: {
    title: '', //Purchase Order Information
    button: {
      create: {
        show: false,
        cta: 'Create New',
        path: '' // /purchase/purchase-order/create
      }
    },
    tabs: [],
    currentTab: '',
    divHeightOverflowLimit: 300,
    permission: {
      name: [],
      action: 'warn', // redirect, hide, warn
      isActive: false
    },
    contentClass: ''
  }
}

const { config } = defineProps<IProps>()

const emits = defineEmits(['click:create', 'update:currentTab'])

const router = useRouter()

const divHeightInRem = ref(0)
const contentlayout: any = ref(null)
const randomContentElementId = ref<string>(`index-${randomId()}`)

const updateHeight = () => {
  const div: any = document.getElementById(`${randomContentElementId.value}`)

  if (!div) return

  setTimeout(() => {
    divHeightInRem.value = div.scrollHeight
  }, 100)
}

const isScrollable = computed(() => {
  return (
    divHeightInRem.value > Number(mergedConfig.value?.divHeightOverflowLimit)
  )
})

const handleClickCreate = () => {
  const path = config?.button?.create?.path || '/'
  router.push(path)
  emits('click:create')
}

const handleChangeTab = (tab: string) => {
  mergedConfig.value.currentTab = tab
  emits('update:currentTab', tab)
}

// merge props with default props
function deepMerge(target: any, source: any) {
  if (typeof target !== 'object' || typeof source !== 'object') return source

  Object.keys(source).forEach((key) => {
    const targetValue = target[key]
    const sourceValue = source[key]

    if (Array.isArray(targetValue) && Array.isArray(sourceValue)) {
      target[key] = [...targetValue, ...sourceValue]
    } else if (
      typeof targetValue === 'object' &&
      typeof sourceValue === 'object'
    ) {
      target[key] = deepMerge(Object.assign({}, targetValue), sourceValue)
    } else {
      target[key] = sourceValue
    }
  })

  return target
}

const mergedConfig = computed(() => deepMerge(defaultProps.config, config))

let isAllowed = ref(false)
const route = useRoute()

const slots = useSlots()

const handlePermission = async () => {
  if (!mergedConfig.value.permission.isActive) {
    isAllowed.value = true
    return
  }

  isAllowed.value = useAuth.permit(mergedConfig.value.permission.name)

  await useAuth.handlePermission(
    mergedConfig.value.permission.name,
    mergedConfig.value.permission.action
  )
}

watch(
  () => contentlayout.value,
  (newValue, oldValue) => {
    updateHeight()
  },
  { deep: true, immediate: true }
)

watch(
  () => mergedConfig.value.permission,
  (newValue, oldValue) => {
    if (newValue != oldValue) {
      handlePermission()
    }
  },
  { deep: true, immediate: true }
)

onMounted(() => {
  document.body.style.overflowY = 'hidden'

  updateHeight()

  handlePermission()

  window.addEventListener('resize', updateHeight)
})

watchEffect(() => {})
</script>

<template>
  <div
    class="flex h-[90vh] flex-col gap-4 overflow-hidden"
    @click="updateHeight"
    v-if="isAllowed"
  >
    <slot name="top" v-if="slots.top" />

    <div class="flex h-[90vh] w-full flex-col rounded-lg">
      <d-tabs
        v-if="config?.tabs?.length ?? 0 > 0"
        :tabs="config?.tabs"
        :current="config?.currentTab"
        @update:current="handleChangeTab"
        :class="'rounded-t-lg border-x border-t border-zinc-300'"
      />

      <div v-if="slots.filter" class="border-x border-t border-zinc-300">
        <slot name="filter" />
      </div>

      <div
        :id="randomContentElementId"
        ref="contentlayout"
        @resize="updateHeight"
        :class="[
          'max-h-[80vh] !overflow-y-auto  rounded-b-lg !border !border-zinc-300',
          mergedConfig.contentClass
        ]"
      >
        <slot name="content" />
        <slot />
      </div>
    </div>

    <slot name="bottom" v-if="slots.bottom" />
  </div>

  <div v-else>
    <v-skeleton-loader type="table"></v-skeleton-loader>
  </div>
</template>
