<script setup lang="ts">
import type { VAutocomplete } from 'vuetify/components'

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
  initialValue: ''
})

const realValue = ref(props.modelValue)

const slots = useSlots()

const emits = defineEmits(['update:modelValue'])

const updateValue = (value: string) => {
  realValue.value = value
  emits('update:modelValue', value)
}

onMounted(() => {
  realValue.value = ''

  if (props.modelValue) {
    realValue.value = props.modelValue
  }

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
    <v-text-field :label="props.label" :variant="props.variant" v-model="realValue" :density="props.density"
      :placeholder="props.placeholder" :type="props.type" :class="[props.class, 'h-max']" :clearable="props.clearable"
      :disabled="props.disabled" @update:model-value="updateValue" hide-details></v-text-field>
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
