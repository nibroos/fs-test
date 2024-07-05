const router = useRoute()

const useLayoutsStore = defineStore({
  id: 'layoutsStore',
  state: () => {
    return {
      titlePath: 'testlayout',
      subTitlePath: '',
      lastPathSegment: '',
      parentTitle: '',
      topTitle: ''
    }
  },
  actions: {
    defineTitlePath(config?: any) {
      let routePath = router.path
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
    },
    hasHistory(): boolean {
      return window.history.length > 2
    }
  },
  persist: true
})

export default useLayoutsStore

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useLayoutsStore, import.meta.hot))
}