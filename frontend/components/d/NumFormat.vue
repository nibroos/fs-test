<script setup lang="ts">
import useLayouts from '~/stores/configs/layouts'

interface IProps {
  modelValue: number | string
  precision?: number | string
  decimal?: string
  separator?: string
  prefix?: string
  suffix?: string
  nullValue?: number | string
  masked?: boolean
  class?: string
  minimumFractionDigits?: number
  initialValue?: number | string | null
  max?: number | string | null
}

const props = withDefaults(defineProps<IProps>(), {
  modelValue: 0,
  precision: 3,
  decimal: '.',
  separator: ',',
  prefix: ' ',
  suffix: '',
  nullValue: '',
  masked: false,
  reverseFill: false,
  class: '',
  minimumFractionDigits: 3,
  initialValue: null,
  max: null
})

let realValue = ref<number | string>(0)

const format = ref({
  precision: 3 as number | string,
  decimal: '.',
  separator: ',',
  prefix: ' ',
  suffix: '',
  nullValue: '' as number | string | null,
  masked: false,
  reverseFill: false,
  minimumFractionDigits: 3,
  max: null as any
})

const defaultClass = 'w-32 rounded-md px-2 py-1 text-end outline-none'

const combineClass = ref(defaultClass)

const emits = defineEmits(['input:model-value', 'update:modelValue'])

const emitValue = (value: any): void => {
  emits('input:model-value', Number(value))
}

watch(
  () => props.modelValue,
  (newValue) => {
    let value = Number(newValue).toFixed(props.precision as number)
    realValue.value = newValue
    emitValue(value)
  }
)

onMounted(() => {
  realValue.value = props.modelValue
  let value = Number(props.modelValue).toFixed(props.precision as number)

  if (props.initialValue && props.initialValue !== null) {
    value = Number(props.initialValue).toFixed(props.precision as number)
  }
  emitValue(value)

  format.value.decimal = props.decimal
  format.value.separator = props.separator
  format.value.prefix = props.prefix
  format.value.suffix = props.suffix
  format.value.nullValue = props.nullValue
  format.value.masked = props.masked
  format.value.reverseFill = props.reverseFill
  format.value.precision = props.precision
  format.value.minimumFractionDigits = props.minimumFractionDigits
})

onMounted(() => {
  combineClass.value = `${defaultClass} ${props.class}`
})

watch(
  () => props.class,
  (newValue) => {
    combineClass.value = `${defaultClass} ${newValue}`
  }
)

watchEffect(() => {
  realValue.value = props.modelValue

  if (props.max !== null) {
    format.value.max = Number(props.max)
  }
})
</script>

<template>
  <vue-number
    v-model="props.modelValue"
    v-bind="format"
    @input:model-value="emitValue"
    :class="`${combineClass}`"
  />
</template>
