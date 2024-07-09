
export type ResponseType = {
  errors?: {
    [key: string]: Record<string, any>
  }
  message: string
  status?: number
} & DataResponseType

export type MetaResponseType = {
  page: number
  per_page: number
  total: number
  next_page: number
  last: number
}

export type DataResponseType = {
  data: any
  meta?: MetaResponseType
}
