export const useEmitTracker = () => {
  const emits = ref<string[]>([])

  const trackEmit = (event: string) => {
    emits.value.push(event)
  }

  const hasEmitted = (event: string) => {
    return emits.value.includes(event)
  }

  return {
    trackEmit,
    hasEmitted
  }
}
