import VueNumberFormat from '@coders-tm/vue-number-format'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueNumberFormat, { precision: 4 })
})
