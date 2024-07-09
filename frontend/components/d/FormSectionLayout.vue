<script setup lang="ts">
interface IButtonConfig {
  show?: boolean
  cta?: string
  type?: 'submit' | 'button'
  path?: string
}

interface IProps {
  config: {
    title?: string
    isLoading?: boolean
    button?: {
      create?: IButtonConfig
      save?: IButtonConfig
      cancel?: IButtonConfig
      pdf?: IButtonConfig
      csv?: IButtonConfig
      copy?: IButtonConfig
      references?: IButtonConfig
      geneerate?: IButtonConfig
      quotaCut?: IButtonConfig
    }
    parentClass?: any
  }
}

const defaultProps: IProps = {
  config: {
    title: '', //Purchase Order Information
    isLoading: false,
    button: {
      create: {
        show: false,
        cta: 'Create New',
        path: '' // /purchase/purchase-order/create
      },
      save: {
        show: false,
        cta: 'Create & Save',
        type: 'submit'
      },
      cancel: {
        show: false,
        cta: 'Cancel'
      },
      pdf: {
        show: false,
        cta: 'Download PDF'
      },
      csv: {
        show: false,
        cta: 'Download CSV'
      },
      copy: {
        show: false,
        cta: 'Salin Sebelumnya'
      },
      references: {
        show: false,
        cta: 'Referensi'
      },
      geneerate: {
        show: false,
        cta: 'Generate'
      },
      quotaCut: {
        show: false,
        cta: 'Potong Kuota'
      }
    },
    parentClass: ''
  }
}

const props = defineProps<IProps>()

const slots = useSlots()

const emits = defineEmits([
  'click:create',
  'click:save',
  'click:cancel',
  'click:pdf',
  'click:csv',
  'click:copy',
  'click:references',
  'click:generate',
  'click:quotaCut',
  'update:currentTab',
  'update:triggerLayout'
])

const router = useRouter()

const handleClickCreate = () => {
  const path = props.config.button?.create?.path || '/'
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

const handleClickCopy = () => {
  emits('click:copy')
}

const handleClickReferences = () => {
  emits('click:references')
}

const handleClickGenerate = () => {
  emits('click:generate')
}

const handleClickQuotaCut = () => {
  emits('click:quotaCut')
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

const mergedConfig = computed(() =>
  deepMerge(defaultProps.config, props.config)
)

onMounted(() => {
  document.body.style.overflowY = 'hidden'
})

watchEffect(() => {
  if (mergedConfig.value.mode == 'edit') {
    mergedConfig.value.button.create.show = true
    mergedConfig.value.button.save.cta = 'Save Change'
  }
})
</script>

<template>
  <div
    :class="[
      mergedConfig?.parentClass,
      'flex w-full flex-col rounded-lg !border !border-zinc-400'
    ]"
  >
    <div
      class="flex flex-row items-center justify-between rounded-lg bg-zinc-100 px-5 py-3"
    >
      <div class="flex w-max flex-col whitespace-nowrap">
        <h1 class="font-medium text-zinc-700">
          {{ mergedConfig?.title }}
        </h1>
      </div>

      <div class="flex flex-row gap-3 whitespace-nowrap">
        <d-button
          v-if="mergedConfig.button?.create?.show"
          :cta="mergedConfig?.button?.create?.cta ?? 'Buat Baru'"
          class="rounded-md bg-sky-600 hover:!bg-sky-700"
          text-class="!text-white mx-auto"
          :no-icon="true"
          @click="handleClickCreate"
        />

        <d-button
          v-if="mergedConfig.button?.copy?.show"
          :cta="mergedConfig?.button?.copy?.cta ?? 'Salin Sebelumnya'"
          class="rounded-md bg-sky-600 hover:!bg-sky-700"
          text-class="!text-white mx-auto"
          :no-icon="true"
          @click="handleClickCopy"
        />

        <d-button
          v-if="mergedConfig.button?.references?.show"
          :cta="mergedConfig?.button?.references?.cta ?? 'Referensi'"
          class="rounded-md bg-sky-600 text-white hover:!bg-sky-700"
          text-class="!text-white mx-auto"
          icon="mdi-file-search-outline"
          icon-size="20"
          @click="handleClickReferences"
        />
        <d-button
          v-if="mergedConfig.button?.geneerate?.show"
          :cta="mergedConfig?.button?.geneerate?.cta ?? 'Generate'"
          class="rounded-md bg-sky-600 hover:!bg-sky-700"
          text-class="!text-emerald-600 mx-auto"
          :no-icon="true"
          @click="handleClickGenerate"
        />
        <d-button
          v-if="mergedConfig.button?.quotaCut?.show"
          :cta="mergedConfig?.button?.quotaCut?.cta ?? 'Potong Kuota'"
          class="rounded-md bg-sky-600 hover:!bg-sky-700"
          text-class="!text-emerald-600 mx-auto"
          :no-icon="true"
          @click="handleClickQuotaCut"
        />

        <d-button
          v-if="mergedConfig.button?.save?.show"
          :cta="mergedConfig?.button?.save?.cta ?? 'Simpan'"
          class="rounded-md bg-sky-600 hover:!bg-sky-700"
          text-class="!text-white mx-auto"
          :no-icon="true"
          @click="handleClickSave"
        />
        <d-back
          v-if="mergedConfig.button?.cancel?.show || mergedConfig.parentPath"
          :cta="mergedConfig?.button?.cancel?.cta ?? 'Batal'"
          :parent-path="mergedConfig.parentPath"
          class="rounded-md bg-sky-600 hover:!bg-sky-700"
          text-class="!text-rose-800 mx-auto"
          :no-icon="true"
          @click="handleClickCancel"
        />
      </div>
    </div>

    <div class="flex flex-col gap-5 p-5">
      <slot name="content" v-if="!mergedConfig.isLoading" />
      <div v-else>
        <v-skeleton-loader
          class="mx-auto border"
          max-width="300"
          type="article"
        ></v-skeleton-loader>
      </div>
    </div>
  </div>
</template>
