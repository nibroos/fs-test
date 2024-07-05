<script setup lang="ts">
import { loginStore } from '~/stores/loginStore'
import { useAlert } from '~/composables/useAlert'

const loginUser = loginStore()

const handleLogout = async () => {
  const isConfirmed = await useAlert.showPopupConfirmation(
    'Logout',
    'Are you sure you want to log out?',
    'Logout',
    true
  )
  if (isConfirmed) {
    await loginUser.logoutUser()
  }
}
</script>

<template>
  <v-menu :close-on-content-click="false">
    <template v-slot:activator="{ props }">
      <div class="mr-5 flex items-center gap-2">
        <button
          class="rounded-full p-2 opacity-70 transition-all delay-200 duration-300 hover:bg-slate-300 hover:opacity-60"
        >
          <v-icon icon="mdi-bell"></v-icon>
        </button>
        <button
          class="rounded-full p-2 opacity-70 transition-all delay-200 duration-300 hover:bg-slate-300 hover:opacity-60"
          @click="handleLogout"
        >
          <v-icon icon="mdi-logout"></v-icon>
        </button>
      </div>
    </template>
  </v-menu>
</template>
