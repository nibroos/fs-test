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
    icon: 'mdi-account-box',
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
        <v-list density="compact" lines="one">

          <v-list-item to="/" rounded="lg">
            <template #prepend>
              <v-icon>mdi-view-dashboard</v-icon>
            </template>

            <v-list-item-title>Dashboard</v-list-item-title>
          </v-list-item>
        </v-list>
        <v-list density="comfortable">

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

    <div class="flex h-[77px] w-full text-center items-center justify-center gap-x-5 transition-all ease-in-out px-4">

      <d-button @click="handleLogout" class="justify-center rounded-lg bg-[#4094D4] hover:!bg-[#3476a8] w-full"
        text-class="text-white" :cta="isExpanded ? 'Logout' : '<-'" :no-icon="true"></d-button>
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
