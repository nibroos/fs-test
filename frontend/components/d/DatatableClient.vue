<script setup lang="ts">
import type { VAutocomplete } from 'vuetify/components'
import type {
  DatatableClientType,
  IButtonConfig,
  Fields,
  Field,
  MethodAttributeType,
  MethodsOptionsType,
  DisplayColumnType,
  ModelFormType,
  ModelFormInputType,
  GeneratedFields,
  GeneratedField,
  SubmitModalArgsType,
  UpdateOptionsType,
  SortByType,
  ApiType,
  OptionsApiType,
  ResponseApiType,
  ApiParamsType,
  ErrorResponseApiType
} from '~/types/DatatableClientType'
import type { AxiosResponse } from 'axios'

type Density = VAutocomplete['$props']['density']

const defaultProps: DatatableClientType = {
  config: {
    title: '', // Purchase Order Information
    items: [],
    fields: [],
    itemValue: 'id',
    returnObject: true,
    density: 'compact',
    headerProps: {
      class: '!bg-[#F4F6F8] whitespace-nowrap'
    },
    rowProps: {
      class: 'whitespace-nowrap'
    },
    isLoading: false,
    loadingText: 'Loading...',
    isShowCurrentPage: true,
    perPageOptions: useInitials.perPageOptions,
    hover: true,
    showSelect: false,
    selectStrategy: 'page',
    showExpand: false,
    autoTitleSeparator: 'snake',
    multiSort: false,
    isShowIndexNumber: true,
    defaultHeaderProps: {
      title: '',
      sortable: true,
      key: '',
      value: '',
      align: 'start',
      width: 150,
      minWidth: 150,
      maxWidth: 150,
      type: 'text',
      valueReferences: []
    },
    actions: {
      detail: {
        show: true,
        cta: 'Detail',
        type: 'modal',
        modal: {
          key: 'modal-detail',
          show: false,
          title: 'Detail',
          message: (props: any): string => {
            return `Detail ${props.label}` ?? (`Detail` as string)
          },
          confirmText: 'Detail',
          cancelText: 'Cancel'
        }
      },
      create: {
        show: false,
        cta: 'Create',
        type: 'modal',
        modal: {
          key: 'modal-create',
          show: false,
          title: 'Create',
          message: (props: any): string => {
            return `Create ${props.label}` ?? (`Create` as string)
          },
          confirmText: 'Create',
          cancelText: 'Cancel'
        }
      },
      edit: {
        show: true,
        cta: 'Edit',
        type: 'modal',
        modal: {
          key: 'modal-edit',
          show: false,
          title: 'Edit',
          message: (props: any): string => {
            return `Edit ${props.label}` ?? (`Edit` as string)
          },
          confirmText: 'Edit',
          cancelText: 'Cancel'
        }
      },
      delete: {
        show: true,
        cta: 'Delete',
        type: 'modal',
        modal: {
          key: 'modal-edit',
          show: false,
          title: 'Delete',
          message: (props: any): string => {
            return `Delete ${props.label}` ?? (`Delete` as string)
          },
          confirmText: 'Delete',
          cancelText: 'Cancel'
        }
      },
      duplicate: {
        show: false,
        cta: 'Duplicate',
        type: 'modal',
        modal: {
          key: 'modal-duplicate',
          show: false,
          title: 'Duplicate',
          message: (props: any): string => {
            return `Duplicate ${props.label}` ?? (`Duplicate` as string)
          },
          confirmText: 'Duplicate',
          cancelText: 'Cancel'
        }
      }
    },
    savedCreateState: {},
    api: false
  }
} as unknown as DatatableClientType

const props = defineProps<DatatableClientType>()

const deepMerge = (target: any, source: any): DatatableClientType => {
  if (typeof target !== 'object' || typeof source !== 'object') return source
  Object.keys(source).forEach((key) => {
    const targetValue = target[key]
    const sourceValue = source[key]
    if (Array.isArray(targetValue) && Array.isArray(sourceValue)) {
      target[key] = [...targetValue, ...sourceValue]
    } else if (
      typeof targetValue === 'object' &&
      typeof sourceValue === 'object'
    ) {
      target[key] = deepMerge(Object.assign({}, targetValue), sourceValue)
    } else {
      target[key] = sourceValue
    }
  })
  return target
}

const mergedConfig = ref<DatatableClientType>(deepMerge(defaultProps, props))

const title = ref(mergedConfig.value.config.title)
const headersTable = ref<GeneratedField[]>(
  mergedConfig.value.config.fields as GeneratedField[]
)
const itemsTable = ref<Record<string, any>[]>(
  mergedConfig.value.config.items ?? []
)
const itemValueTable = ref(mergedConfig.value.config.itemValue)
const returnObjectTable = ref(mergedConfig.value.config.returnObject)
const densityTable = ref<Density>(mergedConfig.value.config.density)
const headerPropsTable = ref(mergedConfig.value.config.headerProps)
const rowPropsTable = ref(mergedConfig.value.config.rowProps)
const isLoadingTable = ref(mergedConfig.value.config.isLoading)
const loadingTextTable = ref(mergedConfig.value.config.loadingText)
const isShowCurrentPageTable = ref(mergedConfig.value.config.isShowCurrentPage)
const perPageOptionsTable = ref(mergedConfig.value.config.perPageOptions)
const hoverTable = ref(mergedConfig.value.config.hover)
const showSelectTable = ref(mergedConfig.value.config.showSelect)
const selectStrategyTable = ref(mergedConfig.value.config.selectStrategy)
const showExpandTable = ref(mergedConfig.value.config.showExpand)
const autoTitleSeparatorTable = ref(
  mergedConfig.value.config.autoTitleSeparator
)
const multiSortTable = ref(mergedConfig.value.config.multiSort)
const isShowIndexNumberTable = ref(mergedConfig.value.config.isShowIndexNumber)
const defaultHeaderPropsTable = ref(
  mergedConfig.value.config.defaultHeaderProps
)
const unfilteredConfigTable = ref<GeneratedField[]>([])
const savedCreateState = ref(mergedConfig.value.config.savedCreateState)
const modelForms = ref<ModelFormType>({})
const page = ref(1)
const itemsPerPage = ref(10)

const selectedParent = ref<any>(null)

const slots = useSlots()

const emits = defineEmits([
  'open:create',
  'open:detail',
  'open:edit',
  'open:delete',
  'open:duplicate',
  'submit:create',
  'submit:detail',
  'submit:edit',
  'submit:delete',
  'submit:duplicate',
  'click:create',
  'click:detail',
  'click:edit',
  'click:delete',
  'click:duplicate',
  'update:items-table',
  'update:options',
  'update:trigger-table',
] as { [key: string]: any })

const isMethodAttributeType = (value: any): value is MethodAttributeType => {
  return value && typeof value === 'object'
}

const defaultFieldProps: Field = {
  key: '',
  title: '',
  value: '',
  placeholder: '',
  cellClass: [],
  methods: {
    index: {
      type: 'text',
      show: true,
      display: '',
      permissions: {
        name: ['all'],
        isActive: false
      }
    } as MethodAttributeType & boolean
  }
}

const generateHeaderProps = () => {
  let initialHeader: any[] = []

  if (!!mergedConfig.value.config.fields?.length) {
    initialHeader = mergedConfig.value.config.fields.map((header: Field) => {
      // check if headers has "value" property, if not, use "key" property
      if (!header.value) {
        header.value = header.key
      }

      return {
        ...defaultHeaderPropsTable.value,
        ...header
      }
    })
  } else {
    initialHeader = itemsTable.value?.length
      ? Object.keys(itemsTable.value[0]).map((key) => {
          let title = key

          if (autoTitleSeparatorTable.value == 'camel') {
            title = key.replace(/([a-z])([A-Z])/g, '$1 $2')
          } else if (autoTitleSeparatorTable.value == 'pascal') {
            title = key.replace(/([A-Z])/g, ' $1')
          } else if (autoTitleSeparatorTable.value == 'snake') {
            title = key.replace(/_/g, ' ')
          } else if (autoTitleSeparatorTable.value == 'kebab') {
            title = key.replace(/-/g, ' ')
          }

          // cnvert camelCase to Pascal Case
          title = title.charAt(0).toUpperCase() + title.slice(1)

          return {
            ...defaultHeaderPropsTable.value,
            title: title,
            key: key,
            value: key
          }
        })
      : []
  }

  // headersTable.value without index_number and action
  const exceptionHeader = ['index_number', 'action']
  let filteredHeader: GeneratedField[] = []
  let fieldsWithDefaultProps: GeneratedField[] = []

  // assign default props to initialHeader
  initialHeader.forEach((field: Field, index: number) => {
    let header: any = { ...defaultFieldProps, ...field }
    if (!field.value && field.key) {
      header['value'] = field.key
    }

    if (!field.placeholder) {
      header['placeholder'] = field.title
    }

    for (let [key, value] of Object.entries(field.methods)) {
      let newKey: MethodsOptionsType = key as MethodsOptionsType
      let newValue: MethodAttributeType = value as MethodAttributeType

      if (typeof value === 'boolean') {
        field.methods[newKey] = {
          type: 'text',
          show: value,
          display: field.key,
          dateFormat: 'YYYY-MM-DD',
          rules: [],
          permissions: {
            name: ['all'],
            isActive: false
          },
          others: {}
        }
      } else if (typeof value === 'object') {
        const defaultMethodProps = {
          type: value.type,
          show: value.show ?? true,
          display: value.display ?? field.key,
          dateFormat: value.dateFormat ?? 'YYYY-MM-DD',
          rules: value.rules ?? [],
          permissions: {
            name: value.permissions?.name ?? ['all'],
            isActive: value.permissions?.isActive ?? false,
            action: value.permissions?.action ?? 'warn'
          },
          others: value.others ?? {}
        }
        field.methods[newKey] = { ...defaultMethodProps, ...newValue }
      }
    }

    fieldsWithDefaultProps.push(header)

    if (!exceptionHeader.includes(field.key)) {
      filteredHeader.push(header)
    }
  })

  unfilteredConfigTable.value = cloneObject(fieldsWithDefaultProps)

  filteredHeader.forEach((field: Field, index: number) => {
    if (
      isMethodAttributeType(field.methods?.index) &&
      !field.methods?.index?.show
    ) {
      filteredHeader.splice(index, 1)
      initialHeader.splice(index, 1)
    }
  })

  headersTable.value = filteredHeader

  if (isShowIndexNumberTable.value) {
    const showIndexProps = {
      title: '#',
      key: 'index_number',
      value: 'index_number', // Add the missing value property
      width: 50,
      minWidth: 50,
      maxWidth: 50,
      align: 'center',
      sortable: false
    }
    initialHeader.unshift(showIndexProps)
    // headersTable.value.unshift(showIndexProps)
    // headersTable.value.unshift(showIndexProps)
  }
  const actionProps = {
    title: '',
    key: 'action',
    value: '', // Add the missing value property
    width: 0,
    minWidth: 0,
    maxWidth: 0,
    sortable: false
  }

  initialHeader.push(actionProps)

  // filter unique key
  initialHeader = initialHeader.filter(
    (header, index, self) =>
      index === self.findIndex((t) => t.key === header.key)
  )

  headersTable.value = headersTable.value.filter(
    (header, index, self) =>
      index === self.findIndex((t) => t.key === header.key)
  )

  return initialHeader
}

const computedAllHeaderKeyProps = ref<Fields>(generateHeaderProps())

const updateItemsTable = (items?: Record<string, any>[]) => {
  itemsTable.value = items ?? []
  emits('update:items-table', items)
}

// watch fields
watch(
  () => mergedConfig.value.config.fields,
  (newVal, oldVal) => {
    if (newVal !== oldVal) {
      computedAllHeaderKeyProps.value = generateHeaderProps()
    }
  },
  { deep: true, immediate: true }
)

watch(
  () => props.config.triggerUpdateTable,
  (newVal, oldVal) => {
    // console.log('mergedConfig.value.config.triggerUpdateTable', mergedConfig.value.config.triggerUpdateTable);
    if (newVal===true) {
      // console.log(props.config.items,'items');
      
      updateItemsTable(props.config.items)
      emits('update:trigger-table', false)
      // console.log('updateItemsTable', itemsTable.value);
      // console.log('mergedConfig.value.config.triggerUpdateTable', mergedConfig.value.config.triggerUpdateTable);
      
      
    }
  },
  { deep: true, immediate: true }
)


const filteredModalForms = ref<ModelFormType>({})

const isMethodUsed = (
  header: GeneratedField,
  method: MethodsOptionsType
): boolean => {
  let isUsed = true

  if (
    isMethodAttributeType(header.methods[method]) &&
    !header.methods[method]?.show
  ) {
    isUsed = false
  }

  return isUsed
}

const generateModelForm = (
  method: MethodsOptionsType,
  item?: Record<string, any>
) => {
  let model: any = {}
  let modal: ModelFormType = {}
  filteredModalForms.value = {}
  // headersTable
  // modelForms

  // console.log(item, 'item')

  unfilteredConfigTable.value.forEach((header: GeneratedField) => {
    // model[header.value ?? header.key] = ''
    // console.log(header, 'header.key')
    let isMethodActive = isMethodUsed(header, method)
    if (!isMethodActive) {
      return
    }

    if (isMethodAttributeType(header.methods[method])) {
      model[header.value ?? header.key] = {
        key: header.key,
        payload: item?.[header.value ?? header.key] ?? '',
        error: [],
        rules: header.methods[method]?.rules ?? [],
        type: header.methods[method]?.type ?? 'text'
      }
    }

    // console.log(model, typeof model, 'model')

    for (let [iModel, modelValue] of Object.entries(model)) {
      // console.log(iModel, iKey, modelValue, 'modelValue')

      unfilteredConfigTable.value.forEach(
        (header: GeneratedField, index: number) => {
          if (iModel == header.key) {
            // console.log(iModel, header.key, 'header.key')
            // console.log(modelValue, 'header.key')
            modal[iModel] = modelValue as ModelFormInputType
            modal[iModel].headerOptions = header
          }
        }
      )
    }
  })

  modelForms.value = cloneObject(modal)

  // filter type hidden
  for (let [key, value] of Object.entries(modal)) {
    if (value.headerOptions.methods[method]?.type == 'hidden') {
      delete modal[key]
    }
  }

  filteredModalForms.value = modal

  // console.log(modelForms.value, 'modelForms')
  // console.log(filteredModalForms.value, 'filteredmodelForms')
}

const toggleOpenModal = (
  action?: IButtonConfig,
  key?: string,
  event: boolean = true
) => {
  // console.log('toggleOpenModal', action, key, event)

  if (event === true) return
  if (!!action?.modal && action?.type == 'modal') {
    action.modal.key = randomId()
    action.modal.show = event
    // console.log('toggleOpenModal', action.modal.show, event)
  }
  emits(`open:${key}`, action, event)
}

const clickAction = (
  key: MethodsOptionsType,
  action: IButtonConfig,
  iItem: number,
  item?: Record<string, any>
) => {
  if (action.type == 'modal') {
    return openModal(key, action, item, true)
  } else if (action.type == 'quick') {
    // if (key == 'edit') {
    //   console.log('edit', action, iItem)
    //   openModal('edit', action, item)
    // }

    if (key == 'delete') {
      itemsTable.value.splice(iItem, 1)
      updateItemsTable(itemsTable.value)
    }

    if (key == 'duplicate') {
      let item = cloneObject(itemsTable.value[iItem])

      if (!!action.excludeDuplicate) {
        action.excludeDuplicate.forEach((key: string) => {
          delete item[key]
        })
      }

      itemsTable.value.push(item)
      updateItemsTable(itemsTable.value)
    }
  }

  emits(`click:${key}`, action, iItem)
}

// const toggleOpenModal = (
//   action?: IButtonConfig,
//   key?: string,
//   event: boolean = true
const openModal = (
  key: MethodsOptionsType,
  action?: IButtonConfig,
  item?: Record<string, any>,
  event: boolean = true
) => {
  generateModelForm(key, item)
  if (!!action?.modal && action?.type == 'modal') {
    action.modal.key = randomId()
    action.modal.show = event
    // console.log('openModal1', action.modal.show, key, action, item)
  }
  // console.log('openModal2', key, action, item)

  emits(`open:${key}`, action, true)
}

const closeModal = (action?: IButtonConfig, key?: string) => {
  if (!!action?.modal && action?.type == 'modal') {
    action.modal.show = false
  }
  emits(`open:${key}`, action, false)
}

const submitModal = (action?: IButtonConfig, key?: string) => {
  if (!!action?.modal && action?.type == 'modal') {
    action.modal.show = false
  }

  let combinePayload: Record<string, any> = {}
  let payload: Record<string, any> = {}
  for (let [key, value] of Object.entries(modelForms.value)) {
    payload[key] = value.payload
  }
  // console.log(modelForms.value, 'modelForms')

  let filteredPayload: Record<string, any> = {}
  for (let [key, value] of Object.entries(filteredModalForms.value)) {
    filteredPayload[key] = value.payload
  }
  // console.log(filteredModalForms.value, 'filteredModalForms')

  combinePayload = { ...payload, ...filteredPayload }

  let args = {
    key: key,
    action: action,
    config: modelForms.value,
    payload: combinePayload
  } as SubmitModalArgsType

  useEmitTracker().trackEmit(`submit:${key}`)
  emits(`submit:${key}`, args)

  // console.log(args, 'submitModal')

  if (useEmitTracker().hasEmitted(`submit:${key}`)) return

  if (key == 'create') {
    itemsTable.value.push(combinePayload)
    updateItemsTable(itemsTable.value)
  } else if (key == 'edit') {
    // itemValue is the primary key, so we need to find the index of the item
    let iItem = itemsTable.value.findIndex(
      (item: Record<string, any>) =>
        item[itemValueTable.value] == combinePayload[itemValueTable.value]
    )
    // console.log(iItem, 'iItem')
    // console.log(itemValueTable.value, 'itemValueTable.value')

    itemsTable.value[iItem] = combinePayload
    updateItemsTable(itemsTable.value)
  }
}

const guardObjectType = (value: any): value is object => {
  return value && typeof value === 'object'
}

const isColumnDisplay = (
  header: Field,
  type: DisplayColumnType,
  method: string = 'index'
): boolean => {
  let isDisplay = false
  if (method == 'index') {
    isDisplay =
      isMethodAttributeType(header.methods?.index) &&
      header.methods?.index?.type === type &&
      !!header.methods?.index?.show

    if (
      isMethodAttributeType(header.methods?.index) &&
      !!header.methods?.index?.permissions?.isActive
    ) {
      isDisplay = useAuth.permit(header.methods?.index?.permissions.name ?? '')
    }
  } else if (method == 'create') {
    isDisplay =
      isMethodAttributeType(header.methods?.create) &&
      header.methods?.create?.type === type &&
      !!header.methods?.create?.show

    if (
      isMethodAttributeType(header.methods?.create) &&
      !!header.methods?.create?.permissions?.isActive
    ) {
      isDisplay = useAuth.permit(header.methods?.create?.permissions.name ?? '')
    }
  } else if (method == 'edit') {
    isDisplay =
      isMethodAttributeType(header.methods?.edit) &&
      header.methods?.edit?.type === type &&
      !!header.methods?.edit?.show

    if (
      isMethodAttributeType(header.methods?.edit) &&
      !!header.methods?.edit?.permissions?.isActive
    ) {
      isDisplay = useAuth.permit(header.methods?.edit?.permissions.name ?? '')
    }
  }

  return isDisplay
}

const displayColumn = (header: Field, value: any): any => {
  let display = ''
  let type = isMethodAttributeType(header.methods?.index)
    ? header.methods?.index?.type
    : 'text'

  if (value === null || value === undefined || value === '') {
    return '-'
  }

  if (type == 'reference') {
    // console.log('displayColumn', header, value, type)

    display = value

    if (
      guardObjectType(header.methods?.index) &&
      (guardObjectType(header.methods?.index?.reference) ||
        !!header.methods?.index?.reference)
    ) {
      display = referenceOptions(
        header.methods?.index.reference.options as Record<string, any>,
        value,
        header.methods?.index.reference.label ?? 'name',
        header.methods?.index.reference.key ?? 'id'
      )
    }
  } else {
    display = value
  }

  return display
}

const isCreatable = computed(() => {
  let isCreate = false
  mergedConfig.value.config.fields?.forEach((field: Field) => {
    if (
      !!field.methods?.create ||
      (isMethodAttributeType(field.methods?.create) &&
        Object.keys(field.methods?.create).length)
    ) {
      isCreate = true
    }
  })

  return isCreate
})

const isModalOpenable = ref(false)

const isModalOpen = () => {
  let isOpen = false
  for (let [key, value] of Object.entries(mergedConfig.value.config.actions)) {
    if (value.modal?.show) {
      isOpen = true
    }
  }

  isModalOpenable.value = isOpen
}

const updateOptions = async (options: UpdateOptionsType) => {
  isLoadingTable.value = true

  page.value = options.page
  itemsPerPage.value = options.itemsPerPage

  let api = mergedConfig.value.config.api

  if (!api) {
    if (options.sortBy.length) {
      options.sortBy.forEach((sort: SortByType, index: number) => {
        itemsTable.value.sort((a: any, b: any) => {
          if (a[sort.key] < b[sort.key]) {
            return sort.order == 'asc' ? -1 : 1
          }
          if (a[sort.key] > b[sort.key]) {
            return sort.order == 'asc' ? 1 : -1
          }
          return 0
        })
      })
    }

    isLoadingTable.value = false

    emits('update:options', options)
    return
  }

  if (!!api?.index) {
    let url = api.index as string
    let apiParams: ApiParamsType = {
      page: options.page,
      per_page: options.itemsPerPage
    }

    if (!mergedConfig.value.config.multiSort) {
      apiParams.order_column = options.sortBy[0].key
      apiParams.order_direction = options.sortBy[0].order
    } else {
      apiParams.sort_by = options.sortBy
    }

    let method = 'get'
    if (typeof api.index === 'object') {
      url = api.index.url
      method = api.index.method
    }

    if (method == 'get') {
      try {
        let response = await useMyFetch().get(url, { params: apiParams })

        itemsTable.value = response.data.data
        updateItemsTable(itemsTable.value)

        emits('update:options', {
          ...options,
          response: response.data,
          loading: false
        })
      } catch (error: ErrorResponseApiType) {
        itemsTable.value = []
        updateItemsTable(itemsTable.value)

        console.log(error, 'Failed To Get Data')

        emits('update:options', {
          ...options,
          response: error,
          loading: false
        })
      } finally {
        isLoadingTable.value = false
      }
    } else if (method == 'post') {
      try {
        let response = await useMyFetch().post(url, apiParams)

        itemsTable.value = response.data.data
        updateItemsTable(itemsTable.value)

        emits('update:options', {
          ...options,
          response: response.data,
          loading: false
        })
      } catch (error: ErrorResponseApiType) {
        itemsTable.value = []
        updateItemsTable(itemsTable.value)

        console.log(error, 'Failed To Get Data')

        emits('update:options', {
          ...options,
          response: error,
          loading: false
        })
      } finally {
        isLoadingTable.value = false
      }
    }

    // let response =
    //   .get(url, { params: apiParams })
    //   .then((response: ResponseApiType | AxiosResponse) => {
    //     itemsTable.value = response.data.data
    //     isLoadingTable.value = false
    //     emits('update:options', options)
    //   })
  }

  isLoadingTable.value = false
}

watchEffect(() => {
  mergedConfig.value = deepMerge(defaultProps, props)
  isModalOpen()
})
</script>
<template>
  <div class="flex w-full flex-col gap-4">
    <div
      class="flex w-full items-center"
      :class="{
        'justify-between': !!mergedConfig.config.title && isCreatable,
        'justify-end': !mergedConfig.config.title || !isCreatable
      }"
    >
      <div v-if="!!mergedConfig.config.title">
        <h1 class="text-lg font-semibold">{{ title }}</h1>
      </div>
      <BaseCustomButton
        v-if="isCreatable"
        btn-save
        @click="
          openModal(
            'create',
            mergedConfig.config.actions.create,
            undefined,
            true
          )
        "
      >
        <div class="flex items-center gap-2 sm:gap-1 md:gap-3">
          <v-icon icon="mdi-plus"></v-icon>
          <span>{{ mergedConfig.config.actions.create?.cta }}</span>
        </div>
      </BaseCustomButton>
    </div>
    <div class="w-full overflow-x-auto">
      <v-data-table
        class="table-hover"
        :headers="computedAllHeaderKeyProps"
        :items="itemsTable"
        :item-value="itemValueTable"
        :return-object="returnObjectTable"
        :density="densityTable"
        :header-props="headerPropsTable"
        :row-props="rowPropsTable"
        :loading="isLoadingTable"
        :show-current-page="isShowCurrentPageTable"
        :loading-text="loadingTextTable"
        :items-per-page-options="perPageOptionsTable"
        :hover="hoverTable"
        :show-select="showSelectTable"
        :select-strategy="selectStrategyTable"
        :show-expand="showExpandTable"
        :multi-sort="multiSortTable"
        :page="page"
        :items-per-page="itemsPerPage"
        v-model="selectedParent"
        @update:options="updateOptions"
      >
        <!-- <template #header.data-table-select="" -->
        <template
          #header.data-table-select="{
            allSelected,
            selectAll,
            someSelected
          }: {
            allSelected: any
            selectAll: any
            someSelected: any
          }"
        >
          <v-checkbox-btn
            :model-value="allSelected"
            @update:model-value="selectAll"
            :indeterminate="someSelected && !allSelected"
            class="flex w-full items-center justify-center"
            hide-details
          />
        </template>

        <template
          #item="{
            item,
            isSelected,
            toggleSelect,
            index
          }: {
            item: any
            isSelected: any
            toggleSelect: any
            index: any
          }"
        >
          <tr>
            <td v-if="showSelectTable">
              <v-checkbox-btn
                :model-value="isSelected({ value: item, selectable: false })"
                @update:model-value="
                  toggleSelect({
                    value: item,
                    selectable: false
                  })
                "
                class="flex w-full flex-row items-center justify-center"
              />
            </td>
            <td v-if="isShowIndexNumberTable">
              <div class="flex w-full flex-row items-center justify-center">
                {{ index + 1 }}
              </div>
            </td>
            <td
              v-for="(header, iHeader) in headersTable"
              :key="iHeader"
              :class="['whitespace-nowrap', header.cellClass]"
            >
              <div v-if="isColumnDisplay(header, 'text')">
                {{ displayColumn(header, item[header.value ?? header.key]) }}
              </div>
              <div v-if="isColumnDisplay(header, 'reference')">
                <d-shorttext
                  :text="
                    displayColumn(header, item[header.value ?? header.key])
                  "
                  :max-length="20"
                />
              </div>
              <div v-else-if="isColumnDisplay(header, 'date')">
                {{ displayColumn(header, item[header.value ?? header.key]) }}
              </div>
              <div v-else-if="isColumnDisplay(header, 'datetime')">
                {{ displayColumn(header, item[header.value ?? header.key]) }}
              </div>
              <div v-else-if="isColumnDisplay(header, 'currency')">
                {{ displayColumn(header, item[header.value ?? header.key]) }}
              </div>
              <div v-else-if="isColumnDisplay(header, 'number')">
                <d-num-layout
                  :value="
                    displayColumn(header, item[header.value ?? header.key])
                  "
                />

                {{}}
              </div>
              <div v-else-if="isColumnDisplay(header, 'boolean')">
                <v-icon
                  :color="
                    item[header.value ?? header.key] ? 'success' : 'error'
                  "
                >
                  {{
                    item[header.value ?? header.key] ? 'mdi-check' : 'mdi-close'
                  }}
                </v-icon>
              </div>
              <div v-else-if="isColumnDisplay(header, 'image')">
                <v-img
                  :src="item[header.value ?? header.key]"
                  width="50"
                  height="50"
                  contain
                ></v-img>
              </div>
              <div v-else-if="isColumnDisplay(header, 'array')">
                <span
                  v-for="(value, index) in item[header.value ?? header.key]"
                  :key="index"
                >
                  {{ value }}
                </span>
              </div>
              <div v-else-if="isColumnDisplay(header, 'object')">
                <span
                  v-for="(value, key) in item[header.value ?? header.key]"
                  :key="key"
                >
                  {{ key }}: {{ value }}
                </span>
              </div>
            </td>

            <td class="action-table sticky-right">
              <div class="action-button">
                <div
                  v-if="!slots['item:actions-all']"
                  class="flex flex-row gap-1"
                >
                  <div>
                    <div
                      v-if="
                        !slots['item:action-duplicate'] &&
                        mergedConfig.config.actions?.duplicate?.show
                      "
                      :class="[
                        mergedConfig.config.actions?.duplicate?.class,
                        'cursor-pointer rounded-lg bg-indigo-400 px-2 py-1 text-white transition-all ease-in-out hover:bg-indigo-500'
                      ]"
                      @click="
                        clickAction(
                          'duplicate',
                          mergedConfig.config.actions.duplicate,
                          index
                        )
                      "
                    >
                      {{ mergedConfig.config.actions?.duplicate?.cta }}
                    </div>
                    <slot
                      name="item:action-duplicate"
                      :item="item"
                      :index="index"
                      v-else
                    />
                  </div>

                  <div>
                    <div
                      v-if="
                        !slots['item:action-detail'] &&
                        mergedConfig.config.actions?.detail?.show
                      "
                      :class="[
                        mergedConfig.config.actions?.detail?.class,
                        'cursor-pointer rounded-lg bg-blue-400 px-2 py-1 text-white transition-all ease-in-out hover:bg-blue-500'
                      ]"
                      @click="
                        openModal(
                          'detail',
                          mergedConfig.config.actions.detail,
                          item,
                          true
                        )
                      "
                    >
                      {{ mergedConfig.config.actions?.detail?.cta }}
                    </div>
                    <slot
                      name="item:action-detail"
                      :item="item"
                      :index="index"
                      v-else
                    />
                  </div>

                  <div>
                    <div
                      v-if="
                        !slots['item:action-edit'] &&
                        mergedConfig.config.actions?.edit?.show
                      "
                      :class="[
                        mergedConfig.config.actions?.edit?.class,
                        'cursor-pointer rounded-lg bg-emerald-400 px-2 py-1 text-white transition-all ease-in-out hover:bg-emerald-500'
                      ]"
                      @click="
                        clickAction(
                          'edit',
                          mergedConfig.config.actions.edit,
                          index,
                          item
                        )
                      "
                    >
                      {{ mergedConfig.config.actions?.edit?.cta }}
                    </div>
                    <slot
                      name="item:action-edit"
                      :item="item"
                      :index="index"
                      v-else
                    />
                  </div>

                  <div>
                    <div
                      v-if="
                        !slots['item:action-delete'] &&
                        mergedConfig.config.actions?.delete?.show
                      "
                      :class="[
                        mergedConfig.config.actions?.delete?.class,
                        'cursor-pointer rounded-lg bg-rose-500 px-2 py-1 text-white transition-all ease-in-out hover:bg-rose-700'
                      ]"
                      @click="
                        clickAction(
                          'delete',
                          mergedConfig.config.actions.delete,
                          index
                        )
                      "
                    >
                      {{ mergedConfig.config.actions?.delete?.cta }}
                    </div>
                    <slot
                      name="item:action-delete"
                      :item="item"
                      :index="index"
                      v-else
                    />
                  </div>
                </div>

                <div v-else>
                  <slot name="item:actions-all" :item="item" :index="index" />
                </div>
              </div>
            </td>
          </tr>
        </template>

        <template #no-data>
          <div v-if="slots.noData">
            <slot name="no-data" />
          </div>
          <div class="flex h-[5rem] items-center justify-center" v-else>
            <h3 class="font-weight-bolder text-dark mt-3">
              Data {{ title }} tidak ditemukan
            </h3>
          </div>
        </template>
      </v-data-table>
    </div>
  </div>

  <ModalsFinalModal
    v-for="(action, key) in mergedConfig.config.actions"
    :name="action?.modal?.key ?? key"
    :is-open="action?.modal?.show"
    :size="action?.modal?.size ?? 'sm'"
    :label="action?.modal?.title"
    :header-text-class="['text-xl', action?.modal?.headerTextClass ?? '']"
    :custom-class="['p-6', action?.modal?.customClass ?? '']"
    @update:is-open="toggleOpenModal(action, key, $event)"
    v-if="isModalOpenable"
  >
    <template #label>
      <slot :name="`modal:${key}-label`" v-bind="{ modal: action?.modal }">
        <div
          :class="['flex items-center gap-2', action?.modal?.headerClass ?? '']"
        >
          <span :class="['text-xl', action?.modal?.headerTextClass ?? '']">
            {{ action?.modal?.title }}
          </span>
        </div>
      </slot>
    </template>

    <div v-if="action?.modal?.show">
      <slot :name="`modal:${key}-content`" v-bind="{ modal: action?.modal }">
        <form
          @submit.prevent="submitModal(action, key)"
          :class="['flex flex-col gap-5', action?.modal?.contentClass ?? '']"
        >
          <!-- <div
          :class="[action?.modal?.contentClass ?? '']"
          v-for="(field, iField) in headersTable"
          :key="iField"
          v-if="isDisplayRow(key)"
        > -->
          <div
            v-for="(modelForm, keyModelForm, iModelForm) in filteredModalForms"
            :key="keyModelForm"
          >
            <slot
              :name="`modal:${key}-${keyModelForm}`"
              v-bind="{
                item: modelForm,
                configKey: filteredModalForms[keyModelForm],
                keyModelForm: keyModelForm,
                options: modelForm.headerOptions,
                methodKey: key,
                permitted: isColumnDisplay(
                  modelForm.headerOptions,
                  modelForm.headerOptions.methods[key]?.type ?? 'text',
                  key
                ),
                filteredModalForms: filteredModalForms
              }"
            >
              <div v-if="isColumnDisplay(modelForm.headerOptions, 'text', key)">
                <d-text-input
                  :model-value="filteredModalForms[keyModelForm].payload"
                  @update:model-value="
                    filteredModalForms[keyModelForm].payload = $event
                  "
                  :label="modelForm.headerOptions.title"
                />
              </div>
              <div v-if="isColumnDisplay(modelForm.headerOptions, 'view', key)">
                {{ modelForm.headerOptions.title }}
              </div>
              <div
                v-if="isColumnDisplay(modelForm.headerOptions, 'disabled', key)"
              >
                <d-text-input
                  :model-value="filteredModalForms[keyModelForm].payload"
                  @update:model-value="
                    filteredModalForms[keyModelForm].payload = $event
                  "
                  :label="modelForm.headerOptions.title"
                  :disabled="true"
                />
              </div>
              <div
                v-if="
                  isColumnDisplay(
                    modelForm.headerOptions,
                    'autocomplete-client',
                    key
                  )
                "
              >
                <d-autocomplete-client
                  :model-value="filteredModalForms[keyModelForm].payload"
                  @update:model-value="
                    filteredModalForms[keyModelForm].payload = $event
                  "
                  :label="modelForm.headerOptions.title"
                  :items="modelForm.headerOptions.methods[key]?.others?.items"
                  :item-title="
                    modelForm.headerOptions.methods[key]?.others?.itemTitle ??
                    'name'
                  "
                  :item-value="
                    modelForm.headerOptions.methods[key]?.others?.itemValue ??
                    'id'
                  "
                  :is-display-multiple-key="
                    modelForm.headerOptions.methods[key]?.others
                      ?.isDisplayMultipleKey ?? false
                  "
                  :display-multiple-keys="
                    modelForm.headerOptions.methods[key]?.others
                      ?.displayMultipleKeys ?? ['id', 'name']
                  "
                  :max-length-display="
                    modelForm.headerOptions.methods[key]?.others
                      ?.maxLengthDisplay ?? 70
                  "
                />
              </div>
              <div v-if="isColumnDisplay(modelForm.headerOptions, 'date', key)">
                <d-date-picker-light
                  v-model="filteredModalForms[keyModelForm].payload"
                  :label="modelForm.headerOptions.title"
                  :dp-class="
                    modelForm.headerOptions.methods[key]?.others?.dpClass
                  "
                  :clearable="
                    modelForm.headerOptions.methods[key]?.others?.clearable
                  "
                  :placeholder="modelForm.headerOptions.placeholder"
                  :density="
                    modelForm.headerOptions.methods[key]?.others?.density
                  "
                  :variant="
                    modelForm.headerOptions.methods[key]?.others?.variant
                  "
                ></d-date-picker-light>
              </div>
              <div
                v-if="isColumnDisplay(modelForm.headerOptions, 'datetime', key)"
              >
                <d-date-picker-light
                  v-model="filteredModalForms[keyModelForm].payload"
                  :label="modelForm.headerOptions.title"
                  :dp-class="
                    modelForm.headerOptions.methods[key]?.others?.dpClass
                  "
                  :clearable="
                    modelForm.headerOptions.methods[key]?.others?.clearable
                  "
                  :placeholder="modelForm.headerOptions.placeholder"
                  :density="
                    modelForm.headerOptions.methods[key]?.others?.density
                  "
                  :variant="
                    modelForm.headerOptions.methods[key]?.others?.variant
                  "
                ></d-date-picker-light>
              </div>
              <div
                v-if="isColumnDisplay(modelForm.headerOptions, 'currency', key)"
              >
                {{ modelForm.headerOptions.title }}
              </div>
              <div
                v-if="isColumnDisplay(modelForm.headerOptions, 'number', key)"
              >
                <d-num-v-format
                  :label="modelForm.headerOptions.title"
                  :reverse="false"
                  :hide-currency-display="true"
                  v-model="filteredModalForms[keyModelForm].payload"
                />
              </div>
              <div
                v-if="isColumnDisplay(modelForm.headerOptions, 'boolean', key)"
              >
                {{ modelForm.headerOptions.title }}
              </div>
              <div
                v-if="isColumnDisplay(modelForm.headerOptions, 'image', key)"
              >
                {{ modelForm.headerOptions.title }}
              </div>
            </slot>
          </div>
          <!-- </div> -->
          <button type="submit" class="hidden"></button>
        </form>
      </slot>
    </div>

    <template #footer>
      <slot :name="`modal:${key}-footer`" v-bind="{ modal: action?.modal }">
        <div class="flex w-full items-center gap-3 pt-3">
          <d-button
            v-if="!slots[`modal:${key}-cancel`]"
            @click="closeModal(action, key)"
            :class="[
              'grow justify-center rounded-lg !border !border-solid !border-rose-700 py-2 !text-rose-700 transition-all ease-in-out hover:!bg-rose-50',
              action?.modal?.cancelClass ?? ''
            ]"
            :text-class="[
              action?.modal?.cancelTextClass ?? 'text-rose-700 text-lg'
            ]"
            :cta="action?.modal?.cancelText"
            type="submit"
            :no-icon="true"
          ></d-button>

          <slot
            v-else
            :name="`modal:${key}-cancel`"
            v-bind="{ modal: action?.modal }"
            class="grow"
          ></slot>

          <d-button
            v-if="!slots[`modal:${key}-confirm`]"
            :class="[
              ' w-2/3 justify-center rounded-lg !bg-[#4094D4] py-2 text-white transition-all ease-in-out hover:!bg-[#3882ba]',
              action?.modal?.confirmClass ?? ''
            ]"
            :text-class="[
              action?.modal?.confirmTextClass ?? 'text-white text-lg'
            ]"
            :cta="action?.modal?.confirmText"
            @click="submitModal(action, key)"
            type="submit"
            :no-icon="true"
          ></d-button>
          <slot
            v-else
            :name="`modal:${key}-confirm`"
            v-bind="{ modal: action?.modal }"
          ></slot>
        </div>
      </slot>
    </template>
  </ModalsFinalModal>
</template>
