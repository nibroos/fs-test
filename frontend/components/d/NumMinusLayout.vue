<script setup lang="ts">
import { useNumber } from '~/composables/useNumber'
const { formatNumberSeparator } = useNumber

interface IProps {
  value?: number | string
  isCustomValue?: boolean
  symbol?: string
  suffix?: string
  noValue?: boolean
}

const props = withDefaults(defineProps<IProps>(), {
  value: 0,
  isCustomValue: false, // if true, value will not be formatted
  symbol: '', // custom symbol before value
  suffix: '', // custom text after value
  noValue: false // if true, value will not be displayed
})
</script>

<template>
  <div class="flex justify-between whitespace-nowrap">
    <!-- <div>{{ symbol }}</div> -->
    <div>
      <slot name="symbol" v-bind="props">{{ props.symbol }}</slot>
    </div>

    <div>
      {{
        props.noValue
          ? ''
          : props.isCustomValue
            ? props.value
            : formatNumberSeparator(props.value)
      }}
      {{ props.suffix }}
    </div>
  </div>
</template>
