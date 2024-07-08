import { useMyFetch } from '~/composables/useMyFetch'
import type { ResponseType } from 'axios'
import {
  type Pagination,
  type PaginationMeta,
  type Meta
} from '~/interfaces/LaravelPaginationInterface'

export const useUnitStore = defineStore(
  'UnitStore',
  {
    state: () => ({
      formData: {
        id: null as any,
        customer_id: null as any,
        currency_id: null as any,
        payment_date: '',
        adjustment_no: '',
      },
      isActiveTabIndex: 1,
      tabFormIndex: 0,
      qBody: {
        index: {
          page: 1,
          per_page: 10,
          global: '',
          order_column: '',
          order_direction: 'desc'
        }
      },
      unitInput: {
        option: null,
      },
      showModal: {
        create: false,
        edit: false
      },
      metaModal: {
        index: {
          data: [] as any,
          loading: false,
          meta: {} as Meta
        } as PaginationMeta
      },
    }),
    actions: {
      async getAllDataUnit() {
        if (this.metaModal.index.loading) return
        this.metaModal.index.loading = true

        try {
          const response = await useMyFetch().post(
            `/vendors/list`,
            this.qBody
          )

          this.metaModal.index.data = response.data.data
          this.metaModal.index.meta.current_page = response.data.meta.current_page
          this.metaModal.index.meta.last_page = response.data.meta.last_page
          this.metaModal.index.meta.per_page = response.data.meta.per_page
          this.metaModal.index.meta.total = response.data.meta.total
          this.metaModal.index.meta.to = response.data.meta.to

          return response
        } catch (error) {
          console.log('Failed Load Data', error)
        } finally {
          this.metaModal.index.loading = false
        }
      },

      async createUnit(item: any) {
        try {
          const response = await useMyFetch().post(
            '/vendors/store',
            item
          )
          // this.formData = JSON.parse(
          //   JSON.stringify(useInitials.formCreateEditUnit)
          // )

          return response
        } catch (error: any) {
          console.log('Failed To Create Data', error.response.data)
          return error.response.data
        }
      },

      async showUnit(id: any) {
        try {
          const response = await useMyFetch().post(
            `/vendors/show`,
            { id }
          )

          if (response.status === 200) {
            response.data.data.forEach((po: any, iPo: number) => {
              po.purchase_invoices.forEach((pod: any, iPod: number) => {
                response.data.data[iPo].purchase_invoices[iPod].uid = randomId()
              })
            })
          }

          return response
        } catch (err) {
          console.log('Failed To Get Detail Data Purchase Adjustment', err)
        }
      },

      async updateUnit(item: any) {
        try {
          const response = await useMyFetch().post(
            `/vendors/update`,
            item
          )
          if (response.status === 200) {
            useAlert.alertSuccess(response.data.message)
            // this.formData = JSON.parse(
            //   JSON.stringify(useInitials.formCreateEditUnit)
            // )
          }

          return response
        } catch (error: any) {
          console.log('Failed To Update Data', error)
          return error.response.data
        }
      },

      async deletedUnit(id: string) {
        try {
          const response = await useMyFetch().post(
            `/vendors/delete`,
            {
              id
            }
          )
          if (response.status === 200) {
            useAlert.alertSuccess(response.data.message)
          }

          return response
        } catch (error) {
          console.log('FAILED TO DELETED DATA')
        }
      }
    },
    persist: [
      {
        paths: [
          'qBody',
          'formFilterIndex',
          'isActiveTabIndex',
          'unitInput'
        ],
        storage: localStorage
      }
    ]
  }
)
