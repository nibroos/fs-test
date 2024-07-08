import { useAlert } from '~/composables/useAlert'
import { useMyFetch } from '~/composables/useMyFetch'
import DateFnsAdapter from '@date-io/date-fns'
import type { AuthDataType } from '~/types/AuthType'

const { toISO, addDays } = new DateFnsAdapter()

const useAuthStore = defineStore('AuthStore', {
  state: () => ({
    data: {} as AuthDataType,
    form: {
      first_name: '',
      email: '',
      password: '',
    },
    registerView: false,
    formState: {
      loading: false,
    },
    abilities: [] as any,
  }),

  getters: {},

  actions: {
    async loginAuth() {
      if (this.formState.loading) return
      this.formState.loading = true

      try {
        const response = await useMyFetch().post(`/login`, this.form)
        const data = response.data?.data
        this.data.token = data.token

        // set Token
        localStorage.setItem('_token', data.token)
        localStorage.setItem('expired', data.expiresIn)

        // redirect
        navigateTo('/')

        return response
      } catch (error: any) {
        useAlert.alertError(error?.response?.data?.message || 'Login Failed!')
        navigateTo('/login')
      } finally {
        this.formState.loading = false
      }
    },

    async registerAuth() {
      if (this.formState.loading) return
      this.formState.loading = true

      try {
        const response = await useMyFetch().post(`/signup`, this.form)
        const data = response.data?.data
        this.data.token = data.token

        // set Token
        localStorage.setItem('_token', data.token)
        localStorage.setItem('expired', data.expiresIn)
        // redirect
        navigateTo('/')

        return response
      } catch (error: any) {
        useAlert.alertError(error?.response?.data?.message || 'Register Failed!')
        navigateTo('/login')
      } finally {
        this.formState.loading = false
      }
    },

    async logoutUser() {
      try {
        const response = await useMyFetch().post('/logout')

        if (response.status === 200) {
          this.data.token = null
          localStorage.removeItem('_token')
          localStorage.removeItem('expired')
          useAlert.alertSuccess('Logout successfully.')
          navigateTo('/login')
        }
      } catch (error) {
        localStorage.removeItem('_token')
        localStorage.removeItem('expired')
        navigateTo('/')
        console.log('Failed To logout')
      }

      // this.data.token = null;
      // this.data.message = "";
      // this.data.status = null;
      // this.status = null;
    },

    async getProfile() {
      try {
        const response = await useMyFetch().post('/profile')
        if (response.status === 200) {
          this.data = response.data
        } else {
          this.data.token = null
          navigateTo('/login')
        }
      } catch (error) {
        this.data.token = null
        navigateTo('/login')
      }
    },

    // async getAbilities() {
    //   try {
    //     const response = await useMyFetch().post('/api/master/roles/abilities')
    //     if (response.status === 200) {
    //       this.abilities = response.data.data
    //     }
    //   } catch (error) {
    //     useAuth.removeAuth()
    //     console.log(error)
    //   }
    // },
  },
  persist: [
    {
      paths: ['data', 'status', 'abilities'],
      storage: localStorage
    }
  ]
})

export default useAuthStore