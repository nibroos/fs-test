<script lang="ts" setup>
import { useDate } from 'vuetify'
import type { VMenu, VDatePicker, VTextField } from 'vuetify/components'
import type DateFnsUtils from '@date-io/date-fns/build'

type VMenuProps = VMenu['$props']
type VTextFieldProps = VTextField['$props']
type VDatePickerProps = VDatePicker['$props']
interface IProps {
  modelValue?: string
  dateProps?: VDatePickerProps
  menuProps?: VMenuProps
  format?: string
  displayFormat?: string
}

defineOptions({
  inheritAttrs: false
})

const props = withDefaults(defineProps<IProps>(), {
  modelValue: undefined,
  dateProps: undefined,
  menuProps: undefined,
  format: 'yyyy-MM-dd',
  displayFormat: 'dd/MM/yyyy'
})

const emit = defineEmits(['update:modelValue'])

const { date, parse, isValid, formatByString } = useDate() as DateFnsUtils

const {
  modelValue: _modelValue,
  ['onUpdate:modelValue']: _onUpdateValue,
  readonly: _readonly,
  ...vTextFieldProps
}: VTextFieldProps = useAttrs()
const { activatorProps: _activatorProps, ...vMenuProps } = props.menuProps || {}

const menu = ref<VMenu>()

const isShowMenu = ref<boolean>(false)

const initDate = date(props.modelValue) as Date
let fixedValue = undefined
let fixedDate = undefined
if (props.modelValue && isValid(initDate)) {
  fixedValue = formatByString(initDate, props.format)
  fixedDate = initDate
}
const innerValue = ref<string | undefined>(fixedValue)
const innerDate = ref<Date | undefined>(fixedDate)

watch(
  () => props.modelValue,
  (value) => {
    let fixValue: Date | undefined
    if (value) {
      let dateValue = undefined
      const dateIns = parse(value, props.format) as Date
      const checkDate = isValid(dateIns)
      if (checkDate) {
        dateValue = dateIns
      }
      fixValue = dateValue
    }
    innerDate.value = fixValue
  }
)

const onDateSelected = (dateValue: any) => {
  const checkDate = isValid(dateValue)
  let formattedValue
  if (checkDate) {
    formattedValue = formatByString(dateValue, props.format)
  }
  innerValue.value = formatByString(dateValue, props.displayFormat)
  innerDate.value = dateValue
  isShowMenu.value = false
  emit('update:modelValue', formattedValue)
}
</script>

<template>
  <v-menu
    ref="menu"
    v-model="isShowMenu"
    :close-on-content-click="false"
    transition="scale-transition"
    open-on-focus
    offset-y
    min-width="auto"
    v-bind="vMenuProps"
  >
    <template #activator="{ props }">
      <v-text-field
        :model-value="innerValue"
        readonly
        class="min-w-[168px]"
        v-bind="{ ...vTextFieldProps, ...props }"
      ></v-text-field>
    </template>
    <v-date-picker
      model-value="innerDate"
      hide-header
      v-bind="dateProps"
      @update:model-value="onDateSelected"
    />
  </v-menu>
</template>
