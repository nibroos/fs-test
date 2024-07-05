const runtimeConfig = useRuntimeConfig()

const ceisaApi = () => {
  return runtimeConfig.public.CEISA_API || 'https://apis-gw.beacukai.go.id'
}

export const useApi = {
  ceisaApi
}
