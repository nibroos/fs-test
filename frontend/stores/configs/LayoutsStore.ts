const useLayoutsStore = defineStore({
  id: 'layoutsStore',
  state: () => ({
    titlePath: '',
    subTitlePath: '',
    lastPathSegment: '',
    parentTitle: '',
    topTitle: '',
    currentRouteName: '',
    lastFullPath: '',
    isCloseSidebar: true,
    layoutName: 'guest' as any
  }),
  actions: {
    defineTitlePath(config?: any) {
      const route = useRoute()

      let routePath = route.path
      let pathArray = routePath.split('/')
      let titlePath = pathArray[1]
      let subTitlePath = pathArray[3]
      let lastPathSegment = pathArray[pathArray.length - 1].replace(/-/g, ' ')

      if (titlePath.replace(/-/g, ' ') == lastPathSegment) {
        subTitlePath = ''
        lastPathSegment = ''
      }

      this.titlePath = config?.titlePath ?? titlePath
      this.subTitlePath = config?.subTitlePath ?? subTitlePath
      this.lastPathSegment = config?.lastPathSegment ?? lastPathSegment
      this.parentTitle = config?.parentTitle ?? ''
      this.topTitle = config?.topTitle ?? titlePath
      this.currentRouteName = route.name?.toString() ?? ''
      // this.lastFullPath = window.length > 2 ? window.history.state.path : ''
    },
    hasHistory(): boolean {
      return window.history.length > 2
    }
  },
  persist: [
    {
      paths: ['lastFullPath']
      // storage: localStorage
    }
  ]
})

export default useLayoutsStore

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useLayoutsStore, import.meta.hot))
}