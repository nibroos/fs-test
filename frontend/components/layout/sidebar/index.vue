<script setup lang="ts">
import useLayouts from '@/stores/configs/LayoutsStore'
import useAuthStore from '~/stores/AuthStore';
import { useAlert } from '~/composables/useAlert'

const authStore = useAuthStore()

const token = localStorage.getItem('_token')
const layoutState = useLayouts()
const { isCloseSidebar } = storeToRefs(layoutState)

const itemVendors = [
  {
    title: 'Vendor',
    icon: 'mdi-truck-delivery-outline',
    link: '/vendor',
    permissions: ['']
  }
]
const isExpanded = ref(false)

const handleExpanded = (value: boolean) => {
  isExpanded.value = value
}
const handleMouseHover = () => {
  if (isCloseSidebar.value == true) {
    if (!isExpanded.value) {
      useDebouncedRef(handleExpanded(true), 1000)
    } else {
      useDebouncedRef(handleExpanded(false), 1000)
    }
  }
}

const handleLogout = async () => {
  const isConfirmed = await useAlert.showPopupConfirmation(
    'Logout',
    'Are you sure you want to log out?',
    'Logout',
    true
  )
  if (isConfirmed) {
    await authStore.logoutUser()
  }
}

watch(isCloseSidebar, (newValue) => {
  if (!newValue) {
    isExpanded.value = true
  } else {
    isExpanded.value = false
  }
})

onMounted(async () => {
  if (token) {
    await Promise.all([authStore.getProfile()])
  }
})
</script>

<template>
  <div @mouseenter="handleMouseHover" @mouseleave="handleMouseHover"
    class="flex h-full flex-col items-center justify-between">
    <div class="flex w-full flex-col gap-y-5 py-5">
      <!-- Menu List -->
      <div class="max-h-[80vh] w-full overflow-y-auto">
        <v-list v-if="useAuth.permit('REPORT_READ')" color="#fff" density="compact" lines="one">

          <v-list-item color="#898F99" to="/" rounded="lg">
            <template #prepend>
              <v-icon>mdi-view-dashboard-outline</v-icon>
            </template>

            <v-list-item-title>Dashboard</v-list-item-title>
          </v-list-item>
        </v-list>
        <!-- list Management -->
        <v-list color="#fff" density="comfortable">

          <!-- List static -->
          <template v-for="(item, i) in itemVendors" :key="i">
            <v-list-item v-if="useAuth.permit(item.permissions)" :value="item" color="#898F99" rounded="lg"
              :to="item.link" :title="item.title">
              <template #prepend>
                <v-icon :icon="item.icon"></v-icon>
              </template>
            </v-list-item>
          </template>
        </v-list>
      </div>
    </div>

    <!-- Profile Account -->
    <div
      class="flex h-[77px] w-full cursor-pointer text-center items-center justify-stretch gap-x-5 bg-slate-900 transition-all ease-in-out hover:bg-slate-900/60 lg:px-2"
      @click="handleLogout">
      <div class="w-full">
        Logout
      </div>
    </div>
  </div>
</template>
<style scoped>
* {
  -ms-overflow-style: none;
  /* IE and Edge */
  scrollbar-width: thin;
  scrollbar-color: #898f99 #121c2b;
}
</style>
