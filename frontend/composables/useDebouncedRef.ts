import { customRef, type CustomRefFactory } from 'vue'
export type DebouncedRef<T> = (value: T, delay?: number) => Ref<T>

export function useDebouncedRef<T>(value: T, delay: number = 200): Ref<T> {
  let timeout: ReturnType<typeof setTimeout>
  return customRef<T>((track, trigger) => {
    return {
      get() {
        track()
        return value
      },
      set(newValue) {
        clearTimeout(timeout)
        timeout = setTimeout(() => {
          value = newValue
          trigger()
        }, delay)
      }
    }
  })
}

// export const useDebouncedRef: DebouncedRef<any> = (value: any, delay: number = 200) => {
//   let timeout: ReturnType<typeof setTimeout>
//   return customRef<any>((track, trigger) => {
//     return {
//       get() {
//         track()
//         return value
//       },
//       set(newValue) {
//         clearTimeout(timeout)
//         timeout = setTimeout(() => {
//           value = newValue
//           trigger()
//         }, delay)
//       }
//     }
//   })
// }
