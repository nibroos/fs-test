<script setup lang="ts">
import type { VSelect } from 'vuetify/components'
type SelectItemKey = VSelect['$props']['itemValue']
type Variant = VSelect['$props']['variant']
type Density = VSelect['$props']['density']

import { property } from 'lodash-es'
import { useMyFetch } from '~/composables/useMyFetch'

interface IProps {
  disabled?: boolean
  variant?: Variant
  items?: any[]
  label?: string
  itemTitle?: SelectItemKey
  itemValue?: SelectItemKey
  density?: Density
  itemsProp?: string
  pageEndProp?: string
  modelValue?: string | number | null
  modelValueObject?: string
  url?: string
  query?: string
}
const props = withDefaults(defineProps<IProps>(), {
  disabled: false,
  variant: 'filled',
  items: () => [],
  label: undefined,
  itemTitle: 'title',
  itemValue: 'value',
  density: 'default',
  itemsProp: 'data',
  pageEndProp: 'next_page_url',
  url: '/',
  query: undefined
})

const emit = defineEmits([
  'update:modelValue',
  'update:modelValueObject',
  'update:focused'
])

const fetch = useMyFetch()
const vSelectComp = ref<VSelect>()
const shadowTab = ref<HTMLElement>()
const page = ref<number>(1)
const loadingData = ref<boolean>(false)
const paginationDone = ref<boolean>(false)
const isFocused = ref<boolean>(false)
const isReadOnly = ref<boolean>(false)
const isMenuShow = ref<boolean>(false)

const options = ref<any[]>(props.items)

const selected = ref<any>(props.modelValue)

const onIntersect = (isIntersecting: boolean): void => {
  if (isIntersecting && !loadingData.value) {
    page.value++
    getList()
  }
}

const getList = async () => {
  loadingData.value = true
  const apiUrl = `${props.url}?page=${page.value}&items=25${props.query ? `&${props.query}` : ''}`
  const response = await fetch.get(apiUrl)
  const resData = response.data
  const newData = <any[]>property(props.itemsProp)(resData)
  options.value = [...options.value, ...newData]
  paginationDone.value = !property(props.pageEndProp)(resData)
  loadingData.value = false
}
getList()

const onSelectOpt = (val: any) => {
  emit('update:modelValue', property(props.itemValue as string)(val))
  emit('update:modelValueObject', val)
}

watch(
  () => props.modelValue,
  (val) => {
    selected.value = val
  }
)
watch(
  () => props.modelValueObject,
  (val) => {
    selected.value = property(props.itemValue as string)(val)
  }
)

const onMenuChange = (menuState: boolean) => {
  isMenuShow.value = menuState
}
const onFocus = (focusState: boolean) => {
  isFocused.value = focusState
}
</script>

<template>
  <v-select
    ref="vSelectComp"
    v-model="selected"
    :items="options"
    :item-title="props.itemTitle"
    :item-value="props.itemValue"
    :variant="props.variant"
    :label="props.label"
    :density="props.density"
    @update:modelValue="onSelectOpt"
    @update:menu="onMenuChange"
    :focused="isFocused"
    @update:focused="onFocus"
    :readonly="isReadOnly"
    return-object
  >
    <template v-slot:append-item>
      <div
        v-if="!paginationDone"
        v-intersect="onIntersect"
        class="pa-4 teal--text"
      >
        Loading more items ...
      </div>
    </template>
  </v-select>
</template>
