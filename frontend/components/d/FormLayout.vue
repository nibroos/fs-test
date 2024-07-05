<script setup lang="ts">
import type { FormLayoutType, LoadingsType } from '~/types/FormLayoutType'
import type { PermissionType } from '~/types/PermissionType'

type TProps = {
  config: FormLayoutType
}

const defaultProps: TProps = {
  config: {
    title: '', //Purchase Order Information
    parentPath: '', /// purchase/purchase-order
    mode: 'create',
    button: {
      create: {
        show: false,
        cta: 'Create New',
        activateLoading: false,
        isLoadingDefault: true,
        path: '' // /purchase/purchase-order/create
      },
      save: {
        show: true,
        cta: 'Create & Save',
        activateLoading: true,
        isLoadingDefault: true,
        type: 'submit'
      },
      cancel: {
        show: true,
        cta: 'Cancel',
        activateLoading: false,
        isLoadingDefault: true
      },
      pdf: {
        show: false,
        cta: 'Download PDF',
        activateLoading: true,
        isLoadingDefault: true
      },
      csv: {
        show: false,
        cta: 'Download CSV',
        activateLoading: true,
        isLoadingDefault: true
      },
      duplicate: {
        show: false,
        cta: 'Duplicate',
        activateLoading: true,
        isLoadingDefault: true
      },
      clear: {
        show: false,
        cta: 'Clear',
        activateLoading: true,
        isLoadingDefault: true
      }
    },
    tabs: [],
    currentTab: '',
    summary: {},
    triggerLayout: false,
    contentClass: '',
    divHeightOverflowLimit: 300,
    isOverflow: true,
    permission: {
      name: [],
      action: 'warn', // redirect, hide, warn
      isActive: false
    },
    isAction: true
  }
}

const props = defineProps<TProps>()

const slots = useSlots()

const emits = defineEmits([
  'click:create',
  'click:save',
  'click:cancel',
  'click:pdf',
  'click:csv',
  'update:currentTab',
  'update:triggerLayout',
  'click:duplicate',
  'click:clear',
  'click:save:loading',
  'click:pdf:loading',
  'click:csv:loading',
  'click:duplicate:loading',
  'click:clear:loading'
])

const router = useRouter()

const handleClickCreate = () => {
  const path = mergedConfig.value.button?.create?.path || '/'
  router.push(path)
  emits('click:create')
}

const handleClickSave = () => {
  emits('click:save')
}

const handleClickCancel = () => {
  emits('click:cancel')
}

const handleClickPdf = () => {
  emits('click:pdf')
}

const handleClickCsv = () => {
  emits('click:csv')
}

const handleClickDuplicate = () => {
  emits('click:duplicate')
}

const handleClickClear = () => {
  emits('click:clear')
}

const handleChangeTab = (tab: string) => {
  if (!!tab || tab == '0') {
    mergedConfig.value.currentTab = tab
    emits('update:currentTab', tab)
  }
}

const countConfigShowButton = computed(() => {
  return Object.values(mergedConfig.value.button).filter(
    (item: any) => item.show
  ).length
})

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

const mergedConfig: ComputedRef<FormLayoutType> = computed(() =>
  deepMerge(defaultProps.config, props.config)
)

const randomContentElementId = ref<string>(`content-${randomId()}`)
const contentlayout: any = ref(null)
const divHeightInRem = ref(0)
const divHeightInPx = ref(0)
const divHeightScroll = ref(0)

const updateHeight = () => {
  const div: any = document.getElementById(`${randomContentElementId.value}`)

  if (!div) return

  setTimeout(() => {
    divHeightInRem.value = div.scrollHeight
  }, 100)
}

let isAllowed = ref(false)
const handlePermission = async () => {
  if (!mergedConfig.value.permission?.isActive) {
    isAllowed.value = true
    return
  }

  isAllowed.value = await useAuth.handlePermission(
    mergedConfig.value.permission?.name || '',
    mergedConfig.value.permission?.action
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
    if (newValue !== oldValue) {
      handlePermission()
    }
  },
  { deep: true, immediate: true }
)

const localLoadingsState = ref<LoadingsType>({
  pdf: false,
  csv: false,
  save: false
})

onMounted(() => {
  document.body.style.overflowY = 'hidden'

  updateHeight()

  window.addEventListener('resize', updateHeight)
})

watchEffect(() => {
  if (mergedConfig.value.mode == 'edit') {
    mergedConfig.value.button = mergedConfig.value.button ?? {}
    mergedConfig.value.button.create = mergedConfig.value.button.create ?? {}
    mergedConfig.value.button.create.show = true

    mergedConfig.value.button = mergedConfig.value.button ?? {}
    mergedConfig.value.button.save = mergedConfig.value.button.save ?? {}
    mergedConfig.value.button.save.cta = 'Update'
  }

  if (mergedConfig.value.triggerLayout) {
    if (!!mergedConfig.value.triggerLayout) {
      updateHeight()
      emits('update:triggerLayout', false)
    }
  }
})

// watch(
//   () => mergedConfig.value.button.pdf?.loading,
//   (newValue, oldValue) => {
//     console.log(newValue, oldValue, 'pdf loading formLayout')
//   }
// )

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateHeight)
})
</script>

<template>
  <div
    class="flex h-[80vh] flex-col gap-5"
    @click="updateHeight"
    v-if="isAllowed"
  >
    <slot name="top" v-if="slots.top" />
    <slot name="action"></slot>
    <div
      v-if="!!mergedConfig.isAction"
      class="flex h-max w-full flex-col gap-4 rounded-lg !border !border-zinc-400 p-5"
    >
      <div class="flex flex-row items-center justify-between">
        <div class="flex w-max flex-col whitespace-nowrap">
          <h1 class="text-lg font-medium text-zinc-500">
            {{ mergedConfig?.title }}
          </h1>
        </div>

        <div
          class="grid auto-cols-fr grid-flow-col gap-3 whitespace-nowrap"
          :class="countConfigShowButton > 2 ? 'w-2/4' : 'w-1/4'"
        >
          <d-button
            v-if="mergedConfig.button?.create?.show"
            :cta="mergedConfig?.button?.create?.cta ?? 'Create New'"
            :class="
              classMerge(
                'rounded-none bg-[#4094D4] transition-all ease-in-out hover:!bg-[#3882ba]',
                mergedConfig.button?.create?.class ?? ''
              )
            "
            :text-class="
              classMerge(
                'text-white mx-auto !font-bold',
                mergedConfig.button?.create?.textClass ?? ''
              )
            "
            :no-icon="true"
            type="submit"
            @click="handleClickCreate"
          />

          <d-button
            v-if="mergedConfig.button?.save?.show"
            :cta="mergedConfig?.button?.save?.cta ?? 'Save Change'"
            :class="
              classMerge(
                'rounded-none !border border-solid border-[#4094D4] text-white transition-all ease-in-out hover:bg-sky-50',
                `${
                  mergedConfig.mode == 'create'
                    ? '!bg-[#4094D4] hover:!bg-[#3882ba]'
                    : ''
                }`,
                mergedConfig.button?.save?.class ?? ''
              )
            "
            :text-class="
              classMerge(
                'text-[#4094D4] mx-auto',
                mergedConfig.button?.save?.textClass ?? '',
                `${mergedConfig.mode == 'create' ? '!text-white' : ''}`
              )
            "
            :loading="props.config.button?.save?.loading"
            :activate-loading="mergedConfig.button?.save?.activateLoading"
            :is-loading-default="mergedConfig.button?.save?.isLoadingDefault"
            :no-icon="true"
            type="submit"
            @click="handleClickSave"
            @click:loading="emits('click:save:loading', $event)"
          />

          <d-button
            v-if="mergedConfig.button?.duplicate?.show"
            :cta="mergedConfig?.button?.duplicate?.cta ?? 'Duplicate'"
            :class="
              classMerge(
                'rounded-none bg-zinc-200 transition-all ease-in-out hover:!bg-zinc-300',
                mergedConfig.button?.duplicate?.class ?? ''
              )
            "
            :text-class="
              classMerge(
                'text-zinc-800 mx-auto',
                mergedConfig.button?.duplicate?.textClass ?? ''
              )
            "
            :loading="props.config.button?.duplicate?.loading"
            :activate-loading="mergedConfig.button?.duplicate?.activateLoading"
            :is-loading-default="
              mergedConfig.button?.duplicate?.isLoadingDefault
            "
            :no-icon="true"
            type="submit"
            @click="handleClickDuplicate"
          />
          <d-button
            v-if="mergedConfig.button?.pdf?.show"
            :cta="mergedConfig?.button?.pdf?.cta ?? 'Download PDF'"
            :class="
              classMerge(
                'rounded-none bg-zinc-200 transition-all ease-in-out hover:!bg-zinc-300',
                mergedConfig.button?.pdf?.class ?? ''
              )
            "
            :text-class="
              classMerge(
                'text-zinc-800 mx-auto',
                mergedConfig.button?.pdf?.textClass ?? ''
              )
            "
            :loading="props.config.button?.pdf?.loading"
            :activate-loading="mergedConfig.button?.pdf?.activateLoading"
            :is-loading-default="mergedConfig.button?.pdf?.isLoadingDefault"
            :no-icon="true"
            type="submit"
            @click="handleClickPdf"
            @click:loading="emits('click:pdf:loading', $event)"
          />
          <d-button
            v-if="mergedConfig.button?.csv?.show"
            :cta="mergedConfig?.button?.csv?.cta ?? 'Download CSV'"
            :class="
              classMerge(
                'rounded-none bg-emerald-200 transition-all ease-in-out hover:!bg-emerald-300',
                mergedConfig.button?.csv?.class ?? ''
              )
            "
            :text-class="
              classMerge(
                'text-zinc-800 mx-auto',
                mergedConfig.button?.csv?.textClass ?? ''
              )
            "
            :loading="props.config.button?.csv?.loading"
            :activate-loading="mergedConfig.button?.csv?.activateLoading"
            :is-loading-default="mergedConfig.button?.csv?.isLoadingDefault"
            :no-icon="true"
            type="submit"
            @click="handleClickCsv"
            @click:loading="emits('click:csv:loading', $event)"
          />
          <d-button
            v-if="mergedConfig.button?.clear?.show"
            :cta="mergedConfig?.button?.clear?.cta ?? 'Clear'"
            :class="
              classMerge(
                'rounded-none bg-zinc-200 transition-all ease-in-out hover:!bg-zinc-300',
                mergedConfig.button?.clear?.class ?? ''
              )
            "
            :text-class="
              classMerge(
                'text-zinc-800 mx-auto',
                mergedConfig.button?.clear?.textClass ?? ''
              )
            "
            :loading="props.config.button?.clear?.loading"
            :activate-loading="mergedConfig.button?.clear?.activateLoading"
            :is-loading-default="mergedConfig.button?.clear?.isLoadingDefault"
            :no-icon="true"
            type="submit"
            @click="handleClickClear"
            @click:loading="emits('click:clear:loading', $event)"
          />
          <d-back
            v-if="mergedConfig.parentPath || mergedConfig.button?.cancel?.show"
            :cta="mergedConfig?.button?.cancel?.cta ?? 'Cancel'"
            :parent-path="mergedConfig.parentPath"
            :class="[
              'rounded-none !border border-rose-700 bg-white transition-all ease-in-out hover:!bg-rose-50',
              mergedConfig.button?.cancel?.class ?? ''
            ]"
            :text-class="[
              'text-rose-800 mx-auto',
              mergedConfig.button?.cancel?.textClass ?? ''
            ]"
            :no-icon="true"
            type="submit"
            @click="handleClickCancel"
          />
        </div>
      </div>

      <slot name="header" />

      <slot name="summary" />
      <d-summary-layout
        v-if="
          Object.keys(mergedConfig.summary as object).length > 0 &&
          !slots.summary
        "
        :config="config.summary"
      />
    </div>
    <div
      class="flex w-full flex-col gap-2 rounded-lg !border !border-zinc-400 p-3"
    >
      <d-tabs
        v-if="config.tabs?.length ?? 0 > 0"
        :tabs="config.tabs"
        :current="config.currentTab"
        @update:current="handleChangeTab"
      />
      <div
        :id="randomContentElementId"
        ref="contentlayout"
        class="p-1"
        @resize="updateHeight"
        :class="['max-h-[50vh] overflow-y-auto', mergedConfig.contentClass]"
      >
        <slot name="content" />
        <slot></slot>
      </div>
    </div>
    <slot name="bottom" v-if="slots.bottom" />
  </div>

  <div v-else>
    <v-skeleton-loader type="table"></v-skeleton-loader>
  </div>
</template>
