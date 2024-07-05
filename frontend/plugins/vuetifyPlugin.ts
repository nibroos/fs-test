import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import DateIODateFnsAdapter from '@date-io/date-fns'

const dateFns = new DateIODateFnsAdapter()

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    date: {
      adapter: dateFns
    }
  })
  app.vueApp.use(vuetify)
})
