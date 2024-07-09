import type { VAutocomplete, VDataTable } from 'vuetify/components'
import type {
  AutocompleteType,
  AutocompleteClientType
} from '~/types/AutocompleteType'
import type { PermissionType } from './PermissionType'
import type { DatePickerLightType } from './DatePickerLightType'
import {
  type Pagination,
  type PaginationMeta,
  type Meta
} from '~/interfaces/LaravelPaginationInterface'

type Density = VAutocomplete['$props']['density']
// type ReadonlyHeaders = VDataTable['$props']['headers']
type ReadonlyHeaders = VDataTable['$props']['headers']
type UnwrapReadonlyArray<A> = A extends Readonly<Array<infer I>> ? I : never
type ReadonlyDataTableHeader = UnwrapReadonlyArray<ReadonlyHeaders>

export type DatatableClientType = {
  config: DatatableConfig
}

export type DatatableConfig = {
  title?: string
  items?: IItemsType<any>
  fields: Fields
  itemValue: string // primary key
  returnObject?: boolean
  density?: Density
  headerProps?: RowProps
  rowProps?: RowProps
  isLoading?: boolean
  loadingText?: string
  isShowCurrentPage?: boolean
  perPageOptions?: any[]
  hover?: boolean
  showSelect?: boolean
  selectStrategy?: 'single' | 'page' | 'all' | undefined
  showExpand?: boolean
  autoTitleSeparator?: string
  multiSort?: boolean
  isShowIndexNumber?: boolean
  defaultHeaderProps?: DefaultHeaderProps
  actions: Actions
  savedCreateState?: any
  api?: boolean & ApiType
  triggerUpdateTable?:boolean
}

export type ApiType = {
  index?: string | OptionsApiType
  detail?: string | OptionsApiType
  create?: string | OptionsApiType
  delete?: string | OptionsApiType
}

export type OptionsApiType = {
  url: string
  method: 'get' | 'post' | 'put' | 'delete'
}

export type Actions = {
  index?: IButtonConfig
  create?: IButtonConfig
  edit?: IButtonConfig
  detail?: IButtonConfig
  filter?: IButtonConfig
  duplicate?: IButtonConfig
  delete?: IButtonConfig
}

export type IButtonConfig = {
  show: boolean
  cta?: string
  type?: 'modal' | 'link' | 'quick'
  path?: string
  emit?: string
  class?: string
  excludeDuplicate?: string[]
  item?: ItemType<any>
  modal?: Modal
}

export type Modal = {
  key?: string
  show?: boolean
  title?: string
  message?: (props: { label: string }) => string
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  headerClass?: string
  headerTextClass?: string
  contentClass?: string
  customClass?: string
  confirmText?: string
  cancelText?: string
  confirmClass?: string
  cancelClass?: string
  confirmTextClass?: string
  cancelTextClass?: string
}

export type DefaultHeaderProps = {
  title?: string
  sortable?: boolean
  key?: string
  value?: string
  align?: string
  width?: number
  minWidth?: number
  maxWidth?: number
  type?: string
  valueReferences?: any[]
  inputConfig?: {
    type: string
    value: string
    options: any[]
  }
}

export type RowProps = {
  class?: string
}

export type Fields = Field[]
export type GeneratedFields = GeneratedField[]

export type Field = {
  key: string
  title?: string
  value?: string
  placeholder?: string
  cellClass?: string[]
  methods: MethodsType
} & ReadonlyDataTableHeader

export type GeneratedField = {
  key: string
  title?: string
  value?: string
  placeholder?: string
  cellClass?: string[]
  methods: GeneratedMethodsType
} & ReadonlyDataTableHeader

export type IItemsType<T> = Array<ItemType<T>>

type ItemType<T> = {
  [key: string]: T
}

export type MethodsType = {
  index?: MethodAttributeType | boolean
  create?: MethodAttributeType | boolean
  edit?: MethodAttributeType | boolean
  detail?: MethodAttributeType | boolean
  filter?: MethodAttributeType | boolean
  duplicate?: MethodAttributeType | boolean
  delete?: MethodAttributeType | boolean
}

export type GeneratedMethodsType = {
  index?: MethodAttributeType
  create?: MethodAttributeType
  edit?: MethodAttributeType
  detail?: MethodAttributeType
  filter?: MethodAttributeType
  duplicate?: MethodAttributeType
  delete?: MethodAttributeType
}

export type MethodsOptionsType =
  | 'index'
  | 'create'
  | 'edit'
  | 'detail'
  | 'filter'
  | 'duplicate'
  | 'delete'

export type MethodAttributeType = {
  type: DisplayColumnType
  show?: boolean
  display?: string // column name
  dateFormat?: string // 'DD/MM/YYYY' | 'DD/MM/YYYY HH:mm' etc
  reference?: ReferenceDisplayType
  rules?: any[]
  permissions?: PermissionType
  others?: ModalOptionsTableType &
    AutocompleteType &
    AutocompleteClientType &
    DatePickerLightType
}

type ModalOptionsTableType = {
  key?: string
  label?: string
  api?: string // without url parameter, paramter on payload, ex: /api/users/index
  apiMethod?: MethodApiType
  options?: any[]
  header?: string[]
  mainHeaderKey?: string
}

export type ReferenceDisplayType = {
  label: string // columns name, ex: 'name', 'id|no|name'
  key?: string // default 'id', key of options / response from api
  api?: string // without url parameter, id on payload, ex: /api/users/show
  apiMethod?: MethodApiType
  options?: IItemsType<any> // client side
}

export type MethodApiType = 'get' | 'post' | 'put' | 'delete'

export type LabelSplitterType = '|' | ',' | ' ' | '-' | '.' | '/' | '_'

export type DisplayColumnType =
  | 'text'
  | 'view'
  | 'disabled'
  | 'hidden'
  | 'date'
  | 'datetime'
  | 'currency'
  | 'number'
  | 'rawNumber'
  | 'reference'
  | 'autocomplete'
  | 'autocomplete-client'
  | 'boolean'
  | 'image'
  | 'link'
  | 'button'
  | 'icon'
  | 'status'
  | 'array'
  | 'object'

export type ModelFormType = {
  [key: string]: ModelFormInputType
}

export type ModelFormInputType = {
  key: MethodsOptionsType
  payload: any
  errors?: any[]
  rules?: any[]
  type?: DisplayColumnType
  headerOptions: GeneratedField
}

export type SubmitModalArgsType = {
  key: string
  config: ModelFormType
  action: IButtonConfig
  payload: Record<string, any>
}

export type UpdateOptionsType = {
  page: number
  sortBy: SortByType[]
  itemsPerPage: number
}

export type SortByType = {
  key: string
  order: string
}

export type ResponseApiType = {
  data: Pagination<any> & PaginationMeta
} & ErrorResponseApiType

export type ErrorResponseApiType = {
  status: number
  message: string
  response: {
    data: {
      message: string
      status: number
      errors: Record<string, any[]>
    }
  }
}

export type ApiParamsType = {
  page: number
  per_page?: number
  order_column?: string
  order_direction?: string
  sort_by?: SortByType[]
} & {
  [key: string]: any
}
