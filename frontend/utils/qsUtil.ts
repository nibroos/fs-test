import qs from 'qs'

export const qsTransform = (param: object = {}, opt?: any): string => {
  return qs.stringify(param)
}