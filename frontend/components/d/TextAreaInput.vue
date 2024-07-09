<script setup lang="ts">
import type { VAutocomplete } from 'vuetify/components'
import { property } from 'lodash-es'

type SelectItemKey = VAutocomplete['$props']['itemValue']
type Variant = VAutocomplete['$props']['variant']
type Density = VAutocomplete['$props']['density']

interface IProps {
  disabled?: boolean
  variant?: Variant
  modelValue?: string | number
  label?: string
  density?: Density
  clearable?: boolean
  placeholder?: string
  type?: string
  class?: string
  errors?: any[]
  replaceDetailsWithError?: boolean
  initialValue?: string
  rows?: number
  autoGrow?: boolean
}
const props = withDefaults(defineProps<IProps>(), {
  disabled: false,
  variant: 'outlined',
  modelValue: '',
  label: '',
  density: 'compact',
  clearable: true,
  placeholder: (props) => `Enter ${props.label}`,
  type: 'text',
  class: '',
  errors: () => [],
  replaceDetailsWithError: false,
  initialValue: '',
  rows: 1,
  autoGrow: true
})

const realValue = ref(props.modelValue)

const slots = useSlots()

const emits = defineEmits(['update:modelValue'])

const updateValue = (value: string) => {
  realValue.value = value
  emits('update:modelValue', value)
}

onMounted(() => {
  if (props.initialValue) {
    realValue.value = props.initialValue
  }
})

watch(
  () => props.modelValue,
  (newVal, oldVal) => {
    if (newVal !== oldVal) {
      realValue.value = newVal
    }
  }
)
</script>
<template>
  <div :class="{ 'gap-2': slots.details || errors.length > 0 }" class="flex flex-col">
    <v-textarea :label="label" :variant="variant" :model-value="realValue" :density="density" :placeholder="placeholder"
      :type="type" :class="classMerge('w-full', props.class)" :rows="rows" :auto-grow="autoGrow" :clearable="clearable"
      @update:model-value="updateValue" hide-details></v-textarea>
    <div v-if="slots.details && errors.length == 0" class="flex flex-col gap-1">
      <slot name="details" />
    </div>
    <div class="flex flex-col gap-1">
      <div v-for="error in errors" :key="error" class="text-sm text-red-500">
        {{ error }}
      </div>
    </div>
  </div>
</template>
