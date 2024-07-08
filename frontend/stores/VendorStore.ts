import { useMyFetch } from '~/composables/useMyFetch'
import type { ResponseType } from 'axios'
import {
  type Pagination,
  type PaginationMeta,
  type Meta
} from '~/interfaces/LaravelPaginationInterface'
import type { VendorType } from '~/types/VendorType'
import { useUnitStore } from '@/stores/UnitStore'

export const useVendorStore = defineStore(
  'VendorStore',
  {
    state: () => ({
      formData: {
        id: null,
        uuid: '',
        unit_id: null,
        name: '',
        address: '',
      } as VendorType,
      tabFormIndex: 0,
      qBody: {
        index: {
          page: 1,
          per_page: 10,
          global: '',
          name: '',
          order_column: '',
          order_direction: 'desc'
        }
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
      async getAllDataVendor() {
        if (this.metaModal.index.loading) return
        this.metaModal.index.loading = true

        const unitStore = useUnitStore()

        const { unitInput } = storeToRefs(unitStore)
        try {
          const response = await useMyFetch().post(
            `/vendors/list`,
            {
              ...this.qBody.index,
              unit_id: unitInput.value.option
            }
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

      async createVendor(item: any) {
        try {
          const response = await useMyFetch().post(
            '/vendors/store',
            item
          )
          this.formData = cloneObject(useInitials.formCreateEditVendor)

          return response
        } catch (error: any) {
          console.log('Failed To Create Data', error.response.data)
          return error.response.data
        }
      },

      async showVendor(uuid: any) {
        try {
          const response = await useMyFetch().post(
            `/vendors/show`,
            { uuid }
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

      async updateVendor(item: any) {
        try {
          const response = await useMyFetch().post(
            `/vendors/update`,
            item
          )
          if (response.status === 200) {
            useAlert.alertSuccess(response.data.message)
            cloneObject(useInitials.formCreateEditVendor)
          }

          return response
        } catch (error: any) {
          console.log('Failed To Update Data', error)
          return error.response.data
        }
      },

      async deletedVendor(uuid: string) {
        try {
          const response = await useMyFetch().post(
            `/vendors/delete`,
            {
              uuid: uuid
            }
          )
          if (response.status === 200) {
            useAlert.alertSuccess(response.data.message)
          }

          return response
        } catch (error: any) {
          console.log('FAILED TO DELETED DATA')
          return error.response
        }
      }
    },
    persist: [
      {
        paths: [
          'qBody',
          'formFilterIndex',
        ],
        storage: localStorage
      }
    ]
  }
)
