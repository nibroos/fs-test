import Form from 'vform'
import type { Pagination } from '~/interfaces/LaravelPaginationInterface'
import type { PabeanDocumentType } from '~/types/PabeanDocumentType'

const formCreateEditSalesOrder = new Form({
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
  pph23s: [],
  currencies: [],
  styles: [],
  coloring_so: [],
  master_styles: [],
  master_color_methods: [],
  master_color_variants: [],
  deleted_styles: [],
  deleted_color_methods: []
})

const pagination = {
  current_page: 1,
  first_page_url: '',
  from: 0,
  data: [],
  last_page: 0,
  last_page_url: '',
  links: [],
  next_page_url: '',
  path: '',
  per_page: 0,
  prev_page_url: '',
  to: 0,
  total: 0,
  loading: false
} as any as Pagination<any[]>

const formCreateEditPurchaseOrder = {
  id: '',
  customer_id: null as any,
  customer_name: '',
  discount: 0,
  purchase_type_id: null as any,
  purchase_order_date: '',
  shipping_date: '',
  status: 'Process' as any,
  shipping_destination: '',
  shipping_term_id: null as any,
  term_of_payment: null as any,
  currency_id: null as any,
  exchange_rate: '',
  use_vat: 0,
  remark: '',
  pph23_id: null as any,
  item_ids: [],
  items_amount: [],
  qty_orders: [],
  unit_prices: [],
  need_qty: [],
  selectedItems: [],
  summary: {
    total_amount: '',
    total_discount: '',
    total_pph23: '',
    total_vat: '',
    grand_total: ''
  },
  selected_type: ''
}

const formCreateEditRequestOrder = {
  id: '',
  request_date: null,
  remark: '',
  items: [],
  selected_type: '',
  ro_number: '',
  summary: {
    grand_total: 0
  }
}

const formCreateEditInventoryIn = new Form({
  id: null,
  customer_id: null,
  io_type_id: null,
  do_number: '',
  do_date: '',
  currency_id: null as number | null,
  exchange_rate: '',
  ingoing_date: '',
  warehouse_id: null,
  invoice_number: '',
  invoice_date: '',
  pph23_id: null,
  use_vat: false,
  doc_type: null,
  doc_number: '',
  doc_date: '',
  aju_number: '',
  discount: 0,
  shipping_destination: ''
})

const formCreateEditInventoryOut = new Form({
  id: '',
  customer_id: null as number | null,
  io_type_id: null as number | null,
  do_number: '',
  do_date: '',
  currency_id: null as number | null,
  exchange_rate: '',
  ingoing_date: '',
  warehouse_id: null as number | null,
  invoice_number: '',
  invoice_date: '',
  pph23_id: null as number | null,
  use_vat: false,
  doc_type: null as number | null,
  doc_number: '',
  doc_date: '',
  aju_number: '',
  discount: 0,
  shipping_destination: ''
})

const formCreateEditShipping = {
  customer_id: null as any,
  shipping_term_id: null as any,
  currency_id: null as any,
  warehouse_id: null as any,
  shipping_date: '',
  exchange_rate: null as any,
  destination: '',
  document_type: null as any,
  document_no: null as any,
  document_date: null as any,
  aju_no: null as any,
  colors: [
    {
      sales_order_id: null,
      style_id: null,
      color_method_id: null,
      color_variant_id: null,
      shipping_qty: null,
      unit_price: 0,
      amount: 0
    }
  ],
  total_amount: 0,
  grand_total: 0
}

const formCreateEditSalesInvoice = {
  customer_id: null as any,
  payment_term_id: null as any,
  currency_id: null as any,
  pph23_id: null as any,
  invoice_date: '',
  invoice_no: '',
  exchange_rate: '',
  disc: '' as any,
  is_vat: 0,
  total_amount: 0,
  total_discount: 0,
  total_pph: 0,
  total_vat: 0,
  grand_total: 0,
  shipping_list: [] as any
}

const formCreateEditMasterStyle = {
  id: null,
  customer_id: null as any,
  unit_id: null as any,
  cap_type_id: null as any,
  cap_size_id: null as any,
  cap_category_id: null as any,
  cutting_type_id: null as any,
  finishing_type_id: null as any,
  packing_method_id: null as any,
  collection_id: null as any,
  customers: [],
  units: [],
  cap_types: [],
  cap_sizes: [],
  cap_categories: [],
  cutting_types: [],
  finishing_types: [],
  packing_methods: [],
  collections: [],
  style_name: '',
  price: '',
  description: '',
  factory_code: '',
  weight_d: '',
  weight_l: '',
  m_length: '',
  l_length: '',
  h_length: '',
  weft_length: '',
  s_length: '',
  mono_base: '',
  mono_base_calculation: '',
  spec_number: '',
  sku_buyer: '',
  style_type: null,
  //  Untuk BOM input
  item_ids: [] as any[],
  bom_quantities: [] as any[],
  //  Packing Material
  packing_material_style_details_ids: [] as any,
  packing_material_style_details_quantities: [] as any,
  boms: [] as any,
  packing_materials: [] as any,
  data_color_group: [] as any,
  is_active: 0
}

const formCreateEditProductionPlan = {
  sales_order_id: null,
  form_date: '',
  end_date: '',
  so_number: '',
  buyer: '',
  styles: {
    data: [
      {
        id: null,
        line_qty: null,
        selected_colors: {
          data: [
            {
              id: null,
              id_style: null,
              color_method_id: null,
              color_variant_id: null,
              total_qty_target: null,
              total_line: null,
              lines: {
                data: [
                  {
                    id: null,
                    name: '',
                    qty: 0
                  }
                ]
              }
            }
          ]
        }
      }
    ]
  }
}

const formCreateEditPurchaseInvoice = {
  customer_id: null as any,
  payment_term_id: null as any,
  currency_id: null as any,
  pph23_id: null as any,
  invoice_date: '',
  invoice_no: '',
  exchange_rate: '',
  disc: '' as any,
  is_vat: 0,
  total_amount: 0,
  total_discount: 0,
  total_pph: 0,
  total_vat: 0,
  grand_total: 0,
  purchase_order_details: [] as any
}

const formCreateEditOpnameSingle = {
  isOpen: false,
  id: '',
  item_id: '',
  warehouse_id: '',
  adjustment_date: '',
  qty: 0
}

const formCreateEditSalesAdjustment = {
  customer_id: null as any,
  currency_id: null as any,
  exchange_rate: '',
  total_amount: 0,
  grand_total: 0,
  admin_bank: 0,
  rounding: 0,
  sales_invoice: [] as any
}

const formCreateEditPurchaseAdjustment = {
  id: null as any,
  customer_id: null as any,
  currency_id: null as any,
  payment_date: '',
  exchange_rate: '',
  total_amount: 0,
  grand_total: 0,
  admin_bank: 0,
  rounding: 0,
  foreign_exchange_profit: 0,
  foreign_exchange_loss: 0,
  summary: {
    total_adjustment_usd: 0,
    grand_total_usd: 0,
    total_invoice_idr: 0,
    total_adjustment_idr: 0,
    total_remaining_idr: 0,
    rate_profit: 0,
    rate_loss: 0
  },
  purchase_invoices: [] as any
}

const qIndexOpname = {
  page: 1,
  items: 10,
  search_by: 'item',
  item: null as any,
  warehouse: null as any,
  global: '',
  start_date: '',
  end_date: '',
  order_column: '',
  order_direction: ''
}

const formCreateEditCeisa: PabeanDocumentType = {
  id_ceisa: '',
  asalData: 'S',
  asuransi: 0,
  biayaPengurang: 0,
  biayaTambahan: 0,
  bruto: 0,
  cif: 0,
  disclaimer: '1',
  flagVd: 'Y',
  fob: 0,
  freight: 0,
  hargaPenyerahan: 0,
  idPengguna: 'ABCDE',
  jabatanTtd: '',
  jumlahKontainer: 0,
  jumlahTandaPengaman: 0,
  kodeAsuransi: '',
  kodeCaraBayar: '',
  kodeDokumen: '20',
  kodeIncoterm: '',
  kodeJenisImpor: '',
  kodeJenisNilai: '',
  kodeJenisProsedur: '',
  kodeKantor: '',
  kodePelMuat: '',
  kodePelTransit: '',
  kodePelTujuan: '',
  kodeTps: '',
  kodeTutupPu: '',
  kodeValuta: 'USD',
  kotaTtd: '',
  namaTtd: '',
  ndpbm: 0,
  netto: 0,
  nilaiBarang: 0,
  nilaiIncoterm: 2,
  nilaiMaklon: 0,
  nilai_pabean: 0,
  nomorAju: '',
  nomorBc11: '',
  posBc11: '',
  seri: 0,
  subPosBc11: '',
  subSubPosBc11: '',
  tanggalAju: '',
  tanggalBc11: '',
  tanggalTiba: '',
  tanggalTtd: '',
  totalDanaSawit: 0,
  volume: 0,
  vd: 0,
  process_option: '001',
  barang: [],
  entitas: [
    {
      alamatEntitas: '',
      kodeEntitas: '1', // IMPORTIR
      kodeJenisIdentitas: '',
      namaEntitas: '',
      nibEntitas: '',
      nomorIdentitas: '',
      nomorIjinEntitas: '',
      seriEntitas: 1,
      tanggalIjinEntitas: '',
      kodeJenisApi: '',
      kodeStatus: ''
    },
    {
      alamatEntitas: '',
      kodeEntitas: '7', // PEMILIK
      kodeJenisIdentitas: '',
      namaEntitas: '',
      nomorIdentitas: '',
      seriEntitas: 2
    },
    {
      alamatEntitas: '',
      kodeEntitas: '9', // PENGIIRM
      kodeNegara: '',
      namaEntitas: '',
      seriEntitas: 3
    },
    {
      alamatEntitas: '',
      kodeEntitas: '10', // PENJUAL
      kodeNegara: '',
      namaEntitas: '',
      seriEntitas: 4
    },
    {
      alamatEntitas: '',
      kodeEntitas: '11', // PEMUSATAN
      kodeJenisIdentitas: '',
      namaEntitas: '',
      nomorIdentitas: '',
      seriEntitas: 5
    }
  ],
  kemasan: [],
  kontainer: [],
  dokumen: [],
  pengangkut: [
    {
      kodeBendera: '',
      namaPengangkut: '',
      nomorPengangkut: '',
      kodeCaraAngkut: '',
      seriPengangkut: 1
    }
  ],
  ceisa_details: []
}

const perPageOptions = [10, 20, 50, 100]

export const useInitials = {
  formCreateEditSalesOrder,
  formCreateEditPurchaseOrder,
  formCreateEditRequestOrder,
  formCreateEditInventoryIn,
  formCreateEditInventoryOut,
  formCreateEditShipping,
  formCreateEditSalesInvoice,
  formCreateEditMasterStyle,
  formCreateEditProductionPlan,
  formCreateEditPurchaseInvoice,
  formCreateEditOpnameSingle,
  formCreateEditSalesAdjustment,
  formCreateEditPurchaseAdjustment,
  formCreateEditCeisa,
  qIndexOpname,
  pagination,
  perPageOptions
}
