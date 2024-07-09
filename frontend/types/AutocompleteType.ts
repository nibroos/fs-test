import type { VAutocomplete } from 'vuetify/components'

type SelectItemKey = VAutocomplete['$props']['itemValue']
type Variant = VAutocomplete['$props']['variant']
type Density = VAutocomplete['$props']['density']

export type AutocompleteType = {
  modelValue?: any
  disabled?: boolean
  variant?: Variant
  items?: any[]
  label?: string
  itemTitle?: string
  itemValue?: SelectItemKey
  hideDetails?: boolean
  density?: Density
  itemsProp?: string
  pageEndProp?: string
  api?: string
  singleApi?: string
  mappingDetail?: string
  displaySelectedTitleKey?: string
  isGetSingle?: boolean
  query?: object
  innerSearchKey?: string
  clearable?: boolean
  aClass?: string
  uid?: string
  initialValue?: string | number | null
  disableInitialLoad?: boolean
  methodApi?: string
  placeholder?: string
  chips?: boolean
  maxLengthDisplay?: number | string
  startAlignDisplay?: string
  multiple?: boolean
  hideDisplayTitle?: boolean
  initialLoadSingle?: boolean
  isSingleClient?: boolean
  isDisplayMultipleKey?: boolean
  displayMultipleKeys?: string[]
  displayMultipleSeparator?: string
}

export type AutocompleteClientType = {
  modelValue?: string | number
  disabled?: boolean
  variant?: Variant
  items?: any[]
  label?: string
  itemTitle?: string
  itemValue?: string
  density?: Density
  displaySelectedTitleKey?: string
  isGetSingle?: boolean
  clearable?: boolean
  aClass?: string
  initialValue?: string | number | null
  placeholder?: string
  chips?: boolean
  maxLengthDisplay?: number | string
  startAlignDisplay?: string
  isDisplayMultipleKey?: boolean
  displayMultipleKeys?: string[]
  displayMultipleSeparator?: string
  checkDuplicate?: boolean
}
