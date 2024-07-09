<script setup lang="ts">
import { useNumber } from '~/composables/useNumber'
const { formatNumberSeparator } = useNumber

interface IProps {
  value?: number | string
  isCustomValue?: boolean
  symbol?: string
  suffix?: string
  noValue?: boolean
  class?: string
  isNegativeCheck?: boolean
  minPrecision?: number
  maxPrecision?: number
  alwaysNegative?: boolean
}

const props = withDefaults(defineProps<IProps>(), {
  value: 0,
  isCustomValue: false, // if true, value will not be formatted
  symbol: '', // custom symbol before value
  suffix: '', // custom text after value
  noValue: false, // if true, value will not be displayed
  class: '',
  isNegativeCheck: false,
  minPrecision: 3,
  maxPrecision: 3,
  alwaysNegative: false
})

const slots = useSlots()

const dynamicClass = computed(() => ({
  [props.class]: true
}))

const negativeCheckClass = computed(() => {
  if (props.isNegativeCheck) {
    return Number(props.value) < 0 ? 'bg-rose-100 text-rose-600' : ''
  }
  return ''
})
</script>

<template>
  <div :class="[dynamicClass, 'flex justify-between whitespace-nowrap']">
    <!-- <div>{{ symbol }}</div> -->
    <div>
      <slot name="symbol" v-bind="props">{{ props.symbol }}</slot>
    </div>

    <div
      :class="[
        negativeCheckClass,
        {
          'bg-rose-100 text-rose-600': props.alwaysNegative
        }
      ]"
    >
      <slot name="default" v-bind="props" v-if="slots.default"></slot>
      <div v-else>
        {{
          props.noValue
            ? ''
            : props.isCustomValue
              ? props.value
              : formatNumberSeparator(
                  props.value,
                  props.minPrecision,
                  props.maxPrecision
                )
        }}
        {{ props.suffix }}
      </div>
    </div>
  </div>
</template>
