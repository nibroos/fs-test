<script setup lang="ts">
import useLayoutsStore from '@/stores/configs/LayoutsStore'
import useAuthStore from '~/stores/AuthStore';

const authStore = useAuthStore()
const { data } = storeToRefs(authStore)
// const drawer = ref(undefined || true);

const layoutState = useLayoutsStore()
const {
  titlePath,
  subTitlePath,
  lastPathSegment,
  parentTitle,
  topTitle,
  lastFullPath,
  isCloseSidebar
} = storeToRefs(layoutState)
const token = localStorage.getItem('_token')

const route = useRoute()

const handleClikSidebar = () => {
  if (isCloseSidebar.value) {
    isCloseSidebar.value = false
  } else {
    isCloseSidebar.value = true
  }
}

watchEffect(() => {
  if (!!route) {
    layoutState.defineTitlePath()
  }
})

onMounted(() => {
  console.log('Updated20240623-1NB')
  layoutState.defineTitlePath()

  if (!token || token == '') {
    navigateTo('/login')
  }
})

onBeforeUnmount(() => {
  lastFullPath.value = route.fullPath
})
</script>

<template>
  <div class="absolute z-10 h-screen w-full bg-white">
    <v-app>
      <!-- ---------------------------------------------- -->
      <!---Sidebar -->
      <!-- ---------------------------------------------- -->
      <v-navigation-drawer left class="leftSidebar transition delay-75 ease-in-out" elevation="1" :rail="isCloseSidebar"
        expand-on-hover color="#1E293A" temporary permanent>
        <LayoutSidebar />
      </v-navigation-drawer>

      <!-- ---------------------------------------------- -->
      <!---Header -->
      <!-- ---------------------------------------------- -->
      <v-app-bar elevation="2" color="#fff">
        <v-app-bar-nav-icon class="mr-2" @click.stop="handleClikSidebar" />

        <div class="flex items-center justify-between">
          <div class="mb-3">
            <slot name="buttonBack" />
          </div>

          <h1 class="text-xl font-bold leading-5 md:text-2xl md:leading-6 lg:text-3xl lg:leading-10">
            <slot name="titleHeader" />
          </h1>
          <div class="flex flex-col">
            <h1 class="text-xl font-semibold capitalize">
              {{ topTitle.replace(/-/g, ' ') }}
            </h1>
            <div class="flex w-full items-center gap-5">
              <div v-if="parentTitle" class="flex flex-row items-center gap-x-2 lg:gap-x-5">
                <h1 class="text-base font-semibold">{{ parentTitle }}</h1>
                <div class="h-2 w-2 rounded-full bg-black" />
              </div>
              <div v-if="titlePath">
                <p class="text-sm capitalize">
                  {{ titlePath.replace(/-/g, ' ') }}
                </p>
              </div>

              <div v-if="subTitlePath" class="flex items-center gap-x-2 lg:gap-x-5">
                <div class="h-2 w-2 rounded-full bg-black" />
                <p class="text-sm capitalize">
                  {{ subTitlePath.replace(/-/g, ' ') }}
                </p>
              </div>

              <div v-else-if="lastPathSegment" class="flex items-center gap-x-5">
                <div class="h-2 w-2 rounded-full bg-black" />
                <p class="text-sm capitalize">{{ lastPathSegment }}</p>
              </div>
            </div>
          </div>
        </div>
        <v-spacer />
        <LayoutHeader />
      </v-app-bar>
      <v-container fluid class="page-wrapper">
        <v-main class="">
          <div class="h-full w-full">
            <slot />
          </div>
        </v-main>
      </v-container>
    </v-app>
  </div>
</template>
