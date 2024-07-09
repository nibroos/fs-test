export type PaginationRequestType = {
  page: number
  per_page: number
  order_column?: string
  order_direction?: string
}
export type ResultCountType = {
  total: number
}