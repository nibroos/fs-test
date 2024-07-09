import type { GeneratedFields } from '~/types/DatatableClientType'

export type FormType = {
  title: string
  class?: string
  type: FormTypeOptionsType
  fields: GeneratedFields
  actions: FormActionsType
}

export type FormTypeOptionsType = 'create' | 'edit' | 'filter'

export type FormActionsType = {
  confirmText?: string
  cancelText?: string
  confirmClass?: string
  cancelClass?: string
  confirmTextClass?: string
  cancelTextClass?: string
}
