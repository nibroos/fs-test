<script lang="ts" setup>
import { useDate } from 'vuetify'
import type DateFnsUtils from '@date-io/date-fns/build'
import type { VTextField } from 'vuetify/components'
import { format } from 'date-fns'
import type { DatePickerLightType } from '~/types/DatePickerLightType'

const props = withDefaults(defineProps<DatePickerLightType>(), {
  modelValue: undefined,
  displayFormat: 'yyyy-MM-dd', // to change date format
  label: 'Date',
  placeholder: 'YYYY-MM-DD',
  clearable: true,
  monthChangeOnScroll: true,
  startDate: '',
  arrowNavigation: true,
  modelType: 'yyyy-MM-dd', // to change date format
  enableTimePicker: false,
  density: 'compact',
  variant: 'outlined',
  inputClass: 'h-max',
  dpClass: 'z-30',
  hideDetails: true,
  prependInnerIcon: '',
  appendInnerIcon: 'mdi-calendar',
  clearableInput: true,
  disabled: false,
  initialValue: null
})

const { formatByString } = useDate() as DateFnsUtils

const innerValue = ref<any>(props.modelValue)
const isOpenDP = ref<boolean>(false)
const isValidDate = ref<boolean>(true)
const backendFormat = ref<string>('yyyy-MM-dd')
const hintLabel = ref<string>('')
const randomUid = ref<string>(randomId())
const elementId = ref<string>(`dpInput-${randomUid.value}`)
const dpElementId = ref<string>(`dp-${randomUid.value}`)
const onMountedTrigger = ref<boolean>(false)

const emit = defineEmits(['update:modelValue'])

const parseDate = (date: any) => {
  if (!date) return null

  // check splitter
  // console.log(date)
  let splitter = date.includes('/') ? '/' : '-'

  const [year, month, day] = date.split(splitter) // to change date format
  // console.log('month', month, 'day', day, 'year', year)

  // if (!!year && !!month && !!day) {
  //   // return inputDate.value
  // }
  let parsed = `${year}-${month}-${day}`
  return parsed
  // inputDate.value = formatDisplayDate(parsed)
  // emit('update:modelValue', parsed)

  // isValidDate.value = false
  // return format(new Date(), 'yyyy-MM-dd')
}

const formatDisplayDate = (date: any) => {
  if (!date) return null

  // check splitter
  let splitter = date.includes('/') ? '/' : '-'

  const [year, month, day] = date.split(splitter)
  return `${year}-${month}-${day}`
  // if (!!year && !!month && !!day) {
  //   innerValue.value = format(new Date(year, month - 1, day), 'MM/dd/yyyy')
  //   return innerValue.value
  // }

  // isValidDate.value = false
  // return format(new Date(), 'MM/dd/yyyy')
}

const datepicker = ref<any>(null)

const closeDatePicker = (value: any) => {
  datepicker.value?.closeMenu()
  innerValue.value = formatByString(value, props.modelType)
  let parsed = formatByString(value, backendFormat.value)

  if (parsed !== props.modelValue) {
    emit('update:modelValue', parsed)

    isOpenDP.value = false
    datepicker.value?.closeMenu()
  }
}

const openDatePicker = () => {
  isOpenDP.value = true

  datepicker.value?.openMenu()
}

const onBlurInner = () => {
  if (!innerValue.value) {
    innerValue.value = ''
    emit('update:modelValue', '')
  } else {
    let parsed = parseDate(innerValue.value)
    if (parsed !== props.modelValue) {
      emit('update:modelValue', parsed)
    }
  }
}

const handleKeyPress = (event: any) => {
  if (event.key === 'Enter') {
    if (event.target.tagName.toLowerCase() === 'input') {
      // Allow default behavior (form submission) for input fields
      return
    }
    // let parsed = formatByString(innerValue.value, backendFormat.value)
    let parsed = parseDate(innerValue.value)

    if (parsed !== props.modelValue) {
      emit('update:modelValue', parsed)
    }

    closeDP()
  }

  if (event.ctrlKey) {
    console.log('Control + ArrowDown')

    openCloseDP()
  }
}

const handleClearable = () => {
  innerValue.value = ''
  emit('update:modelValue', '')
}

const selectToday = () => {
  const today = new Date()
  innerValue.value = format(today, 'yyyy-MM-dd')
  emit('update:modelValue', format(today, backendFormat.value))
  datepicker.value?.closeMenu()
}

const openDP = () => {
  isOpenDP.value = true
  datepicker.value?.openMenu()
}

const closeDP = () => {
  isOpenDP.value = false
  datepicker.value?.closeMenu()
}

const openCloseDP = () => {
  if (isOpenDP.value) {
    isOpenDP.value = false
    datepicker.value?.closeMenu()
  } else {
    isOpenDP.value = true
    datepicker.value?.openMenu()
  }
}

onMounted(() => {
  innerValue.value = !!props.startDate
    ? formatDisplayDate(props.startDate)
    : props.modelValue ?? ''

  const dpElement = document.getElementById(`${dpElementId.value}`)
  dpElement?.addEventListener('keydown', handleKeyPress)
})

onUnmounted(() => {
  const dpElement = document.getElementById(`${dpElementId.value}`)

  dpElement?.removeEventListener('keydown', handleKeyPress)
})

onBeforeUnmount(() => {
  const dpElement = document.getElementById(`${dpElementId.value}`)

  dpElement?.removeEventListener('keydown', handleKeyPress)
})

watch(
  () => props.modelValue,
  (newValue, oldValue) => {
    if (!!newValue) {
      innerValue.value = formatDisplayDate(newValue)
      onMountedTrigger.value = true
    }

    if (newValue !== oldValue && !newValue) {
      innerValue.value = ''
    }
  }
)
</script>

<template>
  <div :id="dpElementId" class="relative w-full">
    <VueDatePicker
      ref="datepicker"
      v-model="innerValue"
      text-input
      auto-apply
      :placeholder="props.placeholder"
      :clearable="props.clearable"
      :month-change-on-scroll="props.monthChangeOnScroll"
      :model-type="props.displayFormat"
      :start-date="props.startDate"
      arrow-navigation
      :enable-time-picker="props.enableTimePicker"
      :class="[props.dpClass]"
      @date-update="closeDatePicker"
      :disabled="props.disabled"
      :teleport="true"
    >
      <template #action-extra>
        <div
          @click="selectToday()"
          title="Select today"
          class="w-full cursor-pointer border border-gray-300 py-2 text-center transition-all ease-in-out hover:bg-gray-100"
        >
          Today
        </div>
      </template>
      <template #trigger>
        <v-text-field
          v-model="innerValue"
          :label="props.label"
          :variant="props.variant"
          :density="props.density"
          :hide-details="props.hideDetails"
          :class="props.inputClass"
          :prepend-inner-icon="props.prependInnerIcon"
          :append-inner-icon="props.appendInnerIcon"
          :clearable="props.clearableInput"
          :placeholder="props.placeholder"
          @update:focused="onBlurInner"
          @click:append-inner="openCloseDP"
          @click:control="openCloseDP"
          @click:clear="handleClearable"
          :disabled="props.disabled"
        ></v-text-field>
      </template>
    </VueDatePicker>
  </div>
  <v-overlay
    v-model="isOpenDP"
    location-strategy="connected"
    scroll-strategy="reposition"
    :scrim="false"
    contained
  ></v-overlay>
</template>
