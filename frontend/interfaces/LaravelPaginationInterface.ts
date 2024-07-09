export interface Pagination<TData> {
  current_page: number
  data: TData
  first_page_url: string
  from: number
  last_page: number
  last_page_url: number
  links: []
  next_page_url: string
  path?: string
  per_page: number
  prev_page_url: null
  to: string
  total: string
  loading: boolean
}

export interface Meta {
  current_page: number
  from: number
  last_page: number
  path?: string
  per_page: number
  to: number
  total: number
}

export interface PaginationMeta {
  data: Record<string, any>[]
  meta: Meta
  loading: boolean
}
