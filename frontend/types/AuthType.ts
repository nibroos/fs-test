export type AuthResponseType = {
  data?: AuthDataType
  message: string
  cookie: string
}

export type AuthDataType = {
  uuid?: string | null
  email?: string
  first_name?: string
  last_name?: any
  created_at?: string
  updated_at?: string
  deleted_at?: any
  expiresIn?: number
  token?: string | null
}

export type FormLoginType = {
  email: string
  password: string
  first_name?: string
}