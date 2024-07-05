<script setup lang="ts">
import useLayouts from '~/stores/configs/layouts'
import { useCurrencyInput } from 'vue-currency-input'
import type { VAutocomplete } from 'vuetify/components'

type Variant = VAutocomplete['$props']['variant']
type Density = VAutocomplete['$props']['density']

enum CurrencyDisplay {
  symbol = 'symbol',
  narrowSymbol = 'narrowSymbol',
  code = 'code',
  name = 'name',
  hidden = 'hidden'
}

enum ValueScaling {
  precision = 'precision',
  thousands = 'thousands',
  millions = 'millions',
  billions = 'billions'
}

interface NumberRange {
  min?: number
  max?: number
}

interface CurrencyInputOptions {
  autoSign?: boolean
  accountingSign?: boolean
  autoDecimalDigits?: boolean
  currency: string
  currencyDisplay?: CurrencyDisplay
  hideCurrencySymbolOnFocus?: boolean
  hideGroupingSeparatorOnFocus?: boolean
  hideNegligibleDecimalDigitsOnFocus?: boolean
  locale?: string
  precision?: NumberRange | number
  useGrouping?: boolean
  valueRange?: NumberRange
  valueScaling?: ValueScaling
}

// type CurrencyDisplay = 'symbol' | 'narrowSymbol'

interface IProps {
  modelValue: number | string | null | undefined
  precision?: NumberRange
  decimal?: string
  separator?: string
  prefix?: string
  suffix?: string
  nullValue?: number | string
  masked?: boolean
  class?: string
  minimumFractionDigits?: number
  initialValue?: number | string
  label?: string
  clearable?: boolean
  variant?: Variant
  density?: Density
  disabled?: boolean
  reverse?: boolean
  currency?: string
  currencyDisplay?: any // CurrencyDisplay
  hideDetails?: boolean
  hideCurrencyDisplay?: boolean
  hideNegligibleDecimalDigitsOnFocus?: boolean
  placeholder?: string
}

const props = withDefaults(defineProps<IProps>(), {
  precision: () =>
    ({
      min: 3,
      max: 3
    }) as NumberRange,
  decimal: '.',
  separator: ',',
  prefix: '⠀',
  suffix: '',
  nullValue: '',
  masked: false,
  reverseFill: false,
  class: '',
  minimumFractionDigits: 3,
  initialValue: 0,
  label: '',
  clearable: false,
  variant: 'outlined',
  density: 'compact',
  disabled: false,
  reverse: true,
  currency: 'IDR',
  currencyDisplay: CurrencyDisplay.narrowSymbol,
  hideDetails: true,
  hideCurrencyDisplay: false,
  hideNegligibleDecimalDigitsOnFocus: false,
  autoSign: true,
  accountingSign: false,
  placeholder: (props) => `0`
})

const defaultClass = ''
const combineClass = ref(defaultClass)

const currencyInputOptions = ref({
  currency: props.currency,
  currencyDisplay: props.currencyDisplay,
  hideCurrencySymbolOnFocus: false,
  hideGroupingSeparatorOnFocus: false,
  hideNegligibleDecimalDigitsOnFocus: props.hideNegligibleDecimalDigitsOnFocus,
  precision: props.precision,
  valueRange: undefined,
  accountingSign: props.accountingSign,
  autoSign: props.autoSign
} as CurrencyInputOptions)

const emits = defineEmits(['input:model-value', 'update:modelValue', 'change'])

const emitValue = (value: any): void => {
  if (!value) {
    value = 0
  }
  emits('input:model-value', Number(value))
  emits('update:modelValue', Number(value))
  emits('change', Number(value))
  // console.log(value);
  
}

const { inputRef, formattedValue, numberValue, setValue, setOptions } =
  useCurrencyInput(currencyInputOptions.value)

watch(
  () => props.currency,
  (newVal, oldVal) => {
    if (newVal !== oldVal) {
      currencyInputOptions.value.currency = newVal
    }
  },
  { immediate: true, deep: true }
)

watch(
  () => currencyInputOptions.value,
  (newVal, oldVal) => {
    if (newVal !== oldVal) {
      setOptions(newVal)
    }
  },
  { immediate: true, deep: true }
)

watch(
  () => props.modelValue,
  (value: any) => {

    // console.log(value,'aaaa');
    setValue(value)
    //  console.log(value,'ssdf');
    
    emitValue(numberValue.value)
  }
)

watch(
  () => numberValue.value,
  (value: any) => {
    emitValue(value)
  }
)

onMounted(() => {
  // console.log(props.modelValue,'porp');
  
  let value = Number(props.modelValue)
  
  if (!!props.initialValue) {
    value = Number(props.initialValue)
  }
  
  // console.log(props.modelValue,'porp 2');
  emitValue(value)

  combineClass.value = `${defaultClass} ${props.class}`
})

watch(
  () => props.class,
  (newValue) => {
    combineClass.value = `${defaultClass} ${newValue}`
  }
)

watchEffect(() => {
  if (props.hideCurrencyDisplay) {
    currencyInputOptions.value.currencyDisplay = CurrencyDisplay.hidden
  }
})
</script>

<template>
  <v-text-field
    v-model="formattedValue"
    :density="props.density"
    :variant="props.variant"
    :suffix="props.suffix"
    ref="inputRef"
    :label="props.label"
    :hide-details="props.hideDetails"
    :class="[combineClass]"
    :clearable="props.clearable"
    :reverse="props.reverse"
    :disabled="props.disabled"
    :placeholder="props.placeholder"
  />
</template>
