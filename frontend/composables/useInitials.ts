import type { Pagination } from '~/interfaces/LaravelPaginationInterface'
import type { PabeanDocumentType } from '~/types/PabeanDocumentType'


const formCreateEditVendor = {
  id: null,
  uuid: '',
  unit_id: null,
  name: '',
  address: '',
}

const perPageOptions = [10, 20, 50, 100]

export const useInitials = {
  formCreateEditVendor,
  perPageOptions
}
