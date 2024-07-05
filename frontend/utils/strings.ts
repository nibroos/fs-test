import type { LabelSplitterType } from '~/types/DatatableClientType'
import { twMerge, type ClassNameValue } from 'tailwind-merge'
import { normalizeClass } from 'vue'
export const clean_xss = (str: string) => {
  if (typeof str === 'undefined' || str === null) return ''
  if (typeof str !== 'string') return str
  var new_data = str.replace(/<[^>]*>/g, '')
  return new_data
}

export const randomId = () => {
  return btoa(Math.random().toString())
}

export const splitLabelComplex = (
  data: Record<string, any>,
  label: string
): string => {
  const splitters: LabelSplitterType[] = ['|', ',', ' ', '-', '.', '/', '_']
  let currentLabel = label

  for (const splitter of splitters) {
    if (currentLabel.includes(splitter)) {
      const keys = currentLabel.split(splitter)
      const values = keys.map((key) => data[key] ?? key)
      return values.join(splitter)
    }
  }

  return data[label] ?? label
}

export const referenceOptions = (
  data: Record<string, any>,
  value: any,
  refLabel: string,
  refKey: string
) => {
  let display = value
  let refOptions = data as Record<string, any>

  let refSelected = refOptions.find((option: any) => option[refKey] == value)

  if (!refSelected) return value
  display = splitLabelComplex(refSelected, refLabel)

  return display
}

export const classMerge = (...classes: ClassNameValue[]) => {
  return twMerge(normalizeClass(classes))
}