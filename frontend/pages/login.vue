<template>
  <div class="min-h-screen flex flex-row justify-center items-center bg-gray-100 dark:bg-zinc-900">
    <div class="max-h-screen flex flex-row max-w-4xl bg-white dark:bg-zinc-800 shadow-md overflow-hidden rounded-xl">
      <div v-auto-animate class="flex items-center p-12 py-auto w-full">
        <form v-if="registerView === true" @submit.prevent="authStore.registerAuth()">
          <div class="mb-4 text-left">
            <p class="text-2xl font-bold mb-1 dark:text-zinc-100">
              <span>Daftar</span>
            </p>
            <p class="max-w-full text-sm mx-auto text-gray-500 dark:text-zinc-400">
              Masukkan data diri untuk memulai menggunakan
              aplikasi.
            </p>
          </div>
          <div class="mt-4">
            <label for="name" class="block font-bold text-sm text-gray-700 dark:text-zinc-100">
              Nama
            </label>
            <div
              class="relative text-gray-400 transition focus-within:text-teal-500 hover:text-teal-500 after:text-teal-500">
              <input type="text" id="name" v-model="form.first_name"
                class="block mt-1 w-full pl-4 py-2 bg-gray-50 dark:bg-zinc-800 hover:bg-gray-100 dark:hover:bg-zinc-900 placeholder-gray-400 dark:placeholder-zinc-600 border-gray-300 dark:border-zinc-600 focus:border-teal-500 focus:ring-teal-500 after:ring-teal-500 dark:focus:border-teal-500 dark:focus:ring-teal-500 dark:after:ring-teal-500 text-gray-800 dark:text-zinc-100 outline-0 hover:ring-0 after:border-teal-600 focus:text-gray-800 focus:ring-0 dark:focus:bg-zinc-900 border rounded-md shadow-sm transition text-sm"
                placeholder="Amran Setiawan" autocomplete="on" required autofocus />
            </div>
          </div>
          <div class="mt-4">
            <label for="email" class="block font-bold text-sm text-gray-700 dark:text-zinc-100">
              Email
            </label>
            <div
              class="relative text-gray-400 transition focus-within:text-teal-500 hover:text-teal-500 after:text-teal-500">
              <span class="absolute inset-y-0 left-0 flex items-center pl-3 pt-2">
                <svg class="w-5 h-5 stroke-current" stroke-width="2" xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24">
                  <g id="ic-contact-mail" transform="translate(-1.25 -4.25)">
                    <rect id="Rectangle_25" data-name="Rectangle 25" width="20" height="14" rx="2"
                      transform="translate(2 5)" fill="none" stroke-linecap="round" stroke-linejoin="round"
                      stroke-width="1.5" />
                    <path id="Path_81" data-name="Path 81" d="M2.58,5.59l8.23,8.22a2,2,0,0,0,2.83,0l8-8" fill="none"
                      stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" fill-rule="evenodd" />
                  </g>
                </svg>
              </span>
              <input type="email" id="email" v-model="form.email"
                class="block mt-1 w-full pl-11 py-2 bg-gray-50 dark:bg-zinc-800 hover:bg-gray-100 dark:hover:bg-zinc-900 placeholder-gray-400 dark:placeholder-zinc-600 border-gray-300 dark:border-zinc-600 focus:border-teal-500 focus:ring-teal-500 after:ring-teal-500 dark:focus:border-teal-500 dark:focus:ring-teal-500 dark:after:ring-teal-500 text-gray-800 dark:text-zinc-100 outline-0 hover:ring-0 after:border-teal-600 focus:text-gray-800 focus:ring-0 dark:focus:bg-zinc-900 border rounded-md shadow-sm transition text-sm"
                placeholder="kevin@gmail.com" autocomplete="on" required autofocus />
            </div>
          </div>
          <div class="mt-4">
            <div class="flex justify-between">
              <label for="password" class="block font-bold text-sm text-gray-700 dark:text-zinc-100">
                Password
              </label>
            </div>
            <div
              class="relative text-gray-400 focus-within:text-teal-500 hover:text-teal-500 after:text-teal-500 transition">
              <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                <svg class="w-5 h-5 stroke-current" fill="currentColor" stroke-width="0"
                  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px">
                  <path
                    d="M 12 1 C 8.6761905 1 6 3.6761905 6 7 L 6 8 C 4.9069372 8 4 8.9069372 4 10 L 4 20 C 4 21.093063 4.9069372 22 6 22 L 18 22 C 19.093063 22 20 21.093063 20 20 L 20 10 C 20 8.9069372 19.093063 8 18 8 L 18 7 C 18 3.6761905 15.32381 1 12 1 z M 12 3 C 14.27619 3 16 4.7238095 16 7 L 16 8 L 8 8 L 8 7 C 8 4.7238095 9.7238095 3 12 3 z M 6 10 L 18 10 L 18 20 L 6 20 L 6 10 z M 12 13 C 10.9 13 10 13.9 10 15 C 10 16.1 10.9 17 12 17 C 13.1 17 14 16.1 14 15 C 14 13.9 13.1 13 12 13 z" />
                </svg>
              </span>
              <input type="password" id="password" v-model="form.password"
                class="block mt-1 w-full pl-11 py-2 bg-gray-50 dark:bg-zinc-800 hover:bg-gray-100 dark:hover:bg-zinc-900 placeholder-gray-400 dark:placeholder-zinc-600 border-gray-300 dark:border-zinc-600 focus:border-teal-500 focus:ring-teal-500 after:ring-teal-500 dark:focus:border-teal-500 dark:focus:ring-teal-500 dark:after:ring-teal-500 text-gray-800 dark:text-zinc-100 outline-0 hover:ring-0 after:border-teal-600 focus:text-gray-800 focus:ring-0 dark:focus:bg-zinc-900 border rounded-md shadow-sm transition text-sm"
                placeholder="Password" required autocomplete="current-password" />
            </div>
          </div>

          <!-- Buttons -->
          <div class="flex mt-6 mb-4">
            <button
              class="px-4 py-2.5 bg-teal-600 border border-transparent rounded-md text-sm text-white text-center tracking-widest hover:bg-teal-700 active:bg-teal-900 focus:outline-none focus:border-teal-900 focus:ring focus:ring-teal-300 dark:focus:ring-teal-600 transition content-center items-center self-center flex-1 font-extrabold disabled:bg-teal-500 dark:disabled:bg-teal-600"
              :disabled="formState.loading">
              <div v-if="formState.loading" class="flex flex-row justify-center">
                <svg :class="{
                  'text-white': formState.loading,
                }" v-show="formState.loading" class="animate-spin w-4 h-5 mr-2" xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 24 24" fill="currentColor" stroke="currentColor">
                  <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2">
                    <path stroke-dasharray="60" stroke-dashoffset="60" stroke-opacity=".3"
                      d="M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3Z">
                      <animate fill="freeze" attributeName="stroke-dashoffset" dur="1.3s" values="60;0" />
                    </path>
                    <path stroke-dasharray="15" stroke-dashoffset="15" d="M12 3C16.9706 3 21 7.02944 21 12">
                      <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="15;0" />
                      <animateTransform attributeName="transform" dur="1.5s" repeatCount="indefinite" type="rotate"
                        values="0 12 12;360 12 12" />
                    </path>
                  </g>
                </svg>
                <div>Mengecek data</div>
              </div>
              <div v-else>Buat Akun</div>
            </button>
          </div>
          <p class="text-sm mx-auto text-gray-500 text-center">
            Sudah punya akun?
            <span class="text-teal-600 hover:text-teal-800 cursor-pointer underline"
              @click="registerView = !registerView">Masuk</span>
          </p>
        </form>
        <form v-else @submit.prevent="authStore.loginAuth()" class="dark:text-zinc-100">
          <div class="mb-4 text-left">
            <p class="text-2xl font-bold mb-1">
              <span>Masuk</span>
            </p>
            <p class="max-w-full text-sm mx-auto text-gray-500 dark:text-zinc-400">
              Silahkan masuk dengan data akun anda untuk
              menjalankan aplikasi.
            </p>
          </div>
          <!-- Email -->
          <div>
            <label for="email" class="block font-bold text-sm text-gray-700 dark:text-zinc-100">
              Email
            </label>
            <div
              class="relative text-gray-400 transition focus-within:text-teal-500 hover:text-teal-500 after:text-teal-500">
              <span class="absolute inset-y-0 left-0 flex items-center pl-3 pt-2">
                <svg class="w-5 h-5 stroke-current" stroke-width="2" xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24">
                  <g id="ic-contact-mail" transform="translate(-1.25 -4.25)">
                    <rect id="Rectangle_25" data-name="Rectangle 25" width="20" height="14" rx="2"
                      transform="translate(2 5)" fill="none" stroke-linecap="round" stroke-linejoin="round"
                      stroke-width="1.5" />
                    <path id="Path_81" data-name="Path 81" d="M2.58,5.59l8.23,8.22a2,2,0,0,0,2.83,0l8-8" fill="none"
                      stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" fill-rule="evenodd" />
                  </g>
                </svg>
              </span>
              <input type="email" id="email" v-model="form.email"
                class="block mt-1 w-full pl-11 py-2 bg-gray-50 dark:bg-zinc-800 hover:bg-gray-100 dark:hover:bg-zinc-900 placeholder-gray-400 dark:placeholder-zinc-600 border-gray-300 dark:border-zinc-600 focus:border-teal-500 focus:ring-teal-500 after:ring-teal-500 dark:focus:border-teal-500 dark:focus:ring-teal-500 dark:after:ring-teal-500 text-gray-800 dark:text-zinc-100 outline-0 hover:ring-0 after:border-teal-600 focus:text-gray-800 focus:ring-0 dark:focus:bg-zinc-900 border rounded-md shadow-sm transition text-sm"
                placeholder="kevin@gmail.com" autocomplete="on" required autofocus />
            </div>
          </div>
          <!-- Password -->
          <div class="mt-4">
            <div class="flex justify-between">
              <label for="password" class="block font-bold text-sm text-gray-700 dark:text-zinc-100">
                Password
              </label>
            </div>
            <div
              class="relative text-gray-400 focus-within:text-teal-500 hover:text-teal-500 after:text-teal-500 transition">
              <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                <svg class="w-5 h-5 stroke-current" fill="currentColor" stroke-width="0"
                  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px">
                  <path
                    d="M 12 1 C 8.6761905 1 6 3.6761905 6 7 L 6 8 C 4.9069372 8 4 8.9069372 4 10 L 4 20 C 4 21.093063 4.9069372 22 6 22 L 18 22 C 19.093063 22 20 21.093063 20 20 L 20 10 C 20 8.9069372 19.093063 8 18 8 L 18 7 C 18 3.6761905 15.32381 1 12 1 z M 12 3 C 14.27619 3 16 4.7238095 16 7 L 16 8 L 8 8 L 8 7 C 8 4.7238095 9.7238095 3 12 3 z M 6 10 L 18 10 L 18 20 L 6 20 L 6 10 z M 12 13 C 10.9 13 10 13.9 10 15 C 10 16.1 10.9 17 12 17 C 13.1 17 14 16.1 14 15 C 14 13.9 13.1 13 12 13 z" />
                </svg>
              </span>
              <input type="password" id="password" v-model="form.password"
                class="block mt-1 w-full pl-11 py-2 bg-gray-50 dark:bg-zinc-800 hover:bg-gray-100 dark:hover:bg-zinc-900 placeholder-gray-400 dark:placeholder-zinc-600 border-gray-300 dark:border-zinc-600 focus:border-teal-500 focus:ring-teal-500 after:ring-teal-500 dark:focus:border-teal-500 dark:focus:ring-teal-500 dark:after:ring-teal-500 text-gray-800 dark:text-zinc-100 outline-0 hover:ring-0 after:border-teal-600 focus:text-gray-800 focus:ring-0 dark:focus:bg-zinc-900 border rounded-md shadow-sm transition text-sm"
                placeholder="Password" autocomplete="on" required />
            </div>
          </div>

          <!-- Buttons -->
          <div class="flex mt-6 mb-4">
            <button
              class="px-4 py-2.5 bg-teal-600 border border-transparent rounded-md text-sm text-white text-center tracking-widest hover:bg-teal-700 active:bg-teal-900 focus:outline-none focus:border-teal-900 focus:ring focus:ring-teal-300 transition content-center items-center self-center flex-1 font-extrabold disabled:bg-teal-400 dark:disabled:bg-teal-600"
              :disabled="formState.loading">
              <div v-if="formState.loading" class="flex flex-row justify-center">
                <svg :class="{
                  'text-white': formState.loading,
                }" v-show="formState.loading" class="animate-spin w-4 h-5 mr-2" xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 24 24" fill="currentColor" stroke="currentColor">
                  <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2">
                    <path stroke-dasharray="60" stroke-dashoffset="60" stroke-opacity=".3"
                      d="M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3Z">
                      <animate fill="freeze" attributeName="stroke-dashoffset" dur="1.3s" values="60;0" />
                    </path>
                    <path stroke-dasharray="15" stroke-dashoffset="15" d="M12 3C16.9706 3 21 7.02944 21 12">
                      <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="15;0" />
                      <animateTransform attributeName="transform" dur="1.5s" repeatCount="indefinite" type="rotate"
                        values="0 12 12;360 12 12" />
                    </path>
                  </g>
                </svg>
                <div>Mengecek data</div>
              </div>
              <div v-else>Masuk</div>
            </button>
          </div>
          <p class="text-sm mx-auto text-gray-500 text-center">
            Belum punya akun?
            <span class="text-teal-600 hover:text-teal-800 cursor-pointer underline"
              @click="registerView = !registerView">Daftar sekarang</span>
          </p>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import useAuthStore from '@/stores/AuthStore'

definePageMeta({
  layout: 'guest' as any
})

const authStore = useAuthStore()
const { form, formState, registerView } = storeToRefs(authStore)
const token = localStorage.getItem('_token')

onMounted(() => {
  authStore.getProfile()

  if (!!token) {
    navigateTo('/')
  }
})

// watchEffect(() => {
//   if (!!data.value.token) {
//     console.log(data.value.token, 'tokennnn');

//     navigateTo('/')
//   }
// })
</script>