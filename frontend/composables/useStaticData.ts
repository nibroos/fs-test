import { type DuplicateSalesOrderInterface } from '~/interfaces/DuplicateSalesOrderInterface'

const duplicateSalesOrder = {
  id: '',
  customer_id: '',
  currency_id: '',
  pph23_id: '',
  order_type_id: '',
  shipping_term_id: '',
  buyer_po_number: '',
  order_date: '',
  shipping_date: '',
  shipping_destination: '',
  payment_term: '',
  remark: '',
  discount: '',
  is_vat: '',
  status: '',
  total_amount: '',
  total_discount: '',
  total_pph23: '',
  vat: '',
  grand_total: '',
  order_status: '',
  percentage: '',
  mode: '',
  pph23s: [],
  currencies: [],
  styles: [],
  master_styles: [],
  master_color_methods: [],
  master_color_variants: [],
  deleted_styles: [],
  deleted_color_methods: []
} as unknown as DuplicateSalesOrderInterface

export const useStaticData = {
  duplicateSalesOrder
}
