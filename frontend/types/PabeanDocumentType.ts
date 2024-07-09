export interface PabeanDocumentType {
  id_ceisa: string | number
  asalData: string
  asuransi: number
  biayaPengurang: number
  biayaTambahan: number
  bruto: number
  cif: number
  disclaimer: string
  flagVd: string
  fob: number
  freight: number
  hargaPenyerahan: number
  idPengguna: string
  jabatanTtd: string
  jumlahKontainer: number
  jumlahTandaPengaman: number
  kodeAsuransi: string
  kodeCaraBayar: string
  kodeDokumen: string
  kodeIncoterm: string
  kodeJenisImpor: string
  kodeJenisNilai: string
  kodeJenisProsedur: string
  kodeKantor: string
  kodePelMuat: string
  kodePelTransit: string
  kodePelTujuan: string
  kodeTps: string
  kodeTutupPu: string
  kodeValuta: string
  kotaTtd: string
  namaTtd: string
  ndpbm: number
  netto: number
  nilaiBarang: number
  nilaiIncoterm: number
  nilaiMaklon: number
  nilai_pabean: number
  nomorAju: string
  nomorBc11: string
  posBc11: string
  seri: number
  subPosBc11: string
  subSubPosBc11: string
  tanggalAju: string
  tanggalBc11: string
  tanggalTiba: string
  tanggalTtd: string
  totalDanaSawit: number
  volume: number
  vd: number
  process_option: string
  barang: Barang[]
  entitas: Entita[]
  kemasan: Kemasan[]
  kontainer: Kontainer[]
  dokumen: Dokumen[]
  pengangkut: Pengangkut[]
  ceisa_details?: CeisaDetail[]
}

export interface Barang {
  spesifikasiLain: string
  item_id: number | string
  id_ceisa_detail?: number | string
  asuransi: number
  bruto: number
  cif: number | string
  cifRupiah: number
  diskon: number
  fob: number
  freight: number
  hargaEkspor: number
  hargaPatokan: number
  hargaPenyerahan: number
  hargaPerolehan: number
  hargaSatuan: number
  hjeCukai: number
  isiPerKemasan: number
  jumlahBahanBaku: number
  jumlahDilekatkan: number
  jumlahKemasan: number
  jumlahPitaCukai: number
  jumlahRealisasi: number
  jumlahSatuan: number
  kapasitasSilinder: number
  kodeJenisKemasan: string
  kodeKondisiBarang: string
  kodeNegaraAsal: string
  kodeSatuanBarang: string
  merk: string
  ndpbm: number
  netto: number
  nilaiBarang: number
  nilaiDanaSawit: number
  nilaiDevisa: number
  nilaiTambah: number
  pernyataanLartas: string
  persentaseImpor: number
  posTarif: string
  saldoAkhir: number
  saldoAwal: number
  kodeBarang: string
  seriBarang: number
  seriBarangDokAsal: number
  seriIjin: number
  tahunPembuatan: number
  tarifCukai: number
  ukuran: string
  tipe: string
  uraian: string
  volume: number
  barangDokumen: BarangDokumen[]
  barangTarif: BarangTarif[]
  barangVd: BarangVd[]
  barangSpekKhusus: any[]
  barangPemilik: any[]
}

export interface Barangv2 {
  spesifikasiLain: string
  item_id?: number | string | null
  asuransi: number
  bruto: number
  cif: number | string
  cifRupiah: number
  diskon: number
  fob: number
  ukuran:string
  freight: number
  hargaEkspor: number
  hargaPatokan: number
  hargaPenyerahan: number
  hargaPerolehan: number
  hargaSatuan: number
  hjeCukai: number
  isiPerKemasan: number
  jumlahBahanBaku: number
  jumlahDilekatkan: number
  jumlahKemasan: number
  jumlahPitaCukai: number
  jumlahRealisasi: number
  jumlahSatuan: number
  kapasitasSilinder: number
  kodeJenisKemasan: string
  kodeKondisiBarang: string
  kodeNegaraAsal: string
  kodeSatuanBarang: string
  merk: string
  ndpbm: number
  netto: number
  nilaiBarang: number
  nilaiDanaSawit: number
  nilaiDevisa: number
  nilaiTambah: number
  pernyataanLartas: string
  persentaseImpor: number
  posTarif?: string | null
  saldoAkhir: number
  saldoAwal: number
  kodeBarang: string
  seriBarang: number
  seriBarangDokAsal: number
  seriIjin: number
  tahunPembuatan: number
  tarifCukai: number
  tipe: string
  uraian: string
  volume: number
  isCukai: boolean
  barangDokumen: BarangDokumen[]
  barangTarif: BarangTarifParentObject
  barangVd: BarangVd[]
  barangSpekKhusus: any[]
  barangPemilik: any[]
}

export interface BarangDokumen {
  seriDokumen: string
}

export interface BarangTarif {
  jumlahSatuan: number
  kodeFasilitasTarif: string
  kodeJenisPungutan: string
  kodeJenisTarif: string
  nilaiBayar: number
  nilaiFasilitas: number
  seriBarang: number
  tarif: number
  tarifFasilitas?: number
  jumlahKemasan?: number
  kodeKemasan?: string
  kodeKomoditiCukai?: string
  kodeSatuanBarang?: string
  kodeSubKomoditiCukai?: string
  nilaiSudahDilunasi?: number
}

export interface BarangTarifParentObject {
  BM: BarangTarif
  CUKAI: BarangTarif
  PPN: BarangTarif
  PPH: BarangTarif
}

export interface BarangVd {
  uid: string
  kodeJenisVd: string
  nilaiBarangVd: number
}

export interface Dokumen {
  idDokumen: string
  kodeDokumen: string
  kodeFasilitas: string | null
  izin: string
  kantor: string
  file: string
  nomorDokumen: string
  seriDokumen: number
  tanggalDokumen: string
  namaFasilitas?: string
}

export interface Entita {
  alamatEntitas: string
  kodeEntitas: string
  kodeJenisApi?: string
  kodeJenisIdentitas?: string
  kodeStatus?: string
  namaEntitas: string
  nibEntitas?: string
  nomorIdentitas?: string
  seriEntitas: number
  kodeNegara?: string
  nomorIjinEntitas?: string
  tanggalIjinEntitas?: string
}

export interface Kemasan {
  jumlahKemasan: number
  kodeJenisKemasan: string
  merkKemasan: string
  seriKemasan: number
}

export interface Kontainer {
  kodeJenisKontainer: string
  kodeTipeKontainer: string
  kodeUkuranKontainer: string
  nomorKontainer: string
  seriKontainer: number
}

export interface Pengangkut {
  kodeBendera: string
  namaPengangkut: string
  nomorPengangkut: string
  kodeCaraAngkut: string
  seriPengangkut: number
}

export type CeisaDetail = {
  id: number
  jumlahSatuan: number
  cif: string | number
  ceisa_id: number
  item_id: number
  details: ItemDetails
  created_at: string
  updated_at: string
  deleted_at: any
  ndpbm: number
  nomorAju: string
  id_ceisa_detail: number
}

export type ItemDetails = {
  cif: number
  fob: number
  merk: string
  tipe: string
  bruto: number
  ndpbm: number
  netto: number
  diskon: number
  uraian: string
  volume: number
  freight: number
  item_id: number
  asuransi: number
  barangVd: BarangVd[]
  hjeCukai: number
  posTarif: string
  seriIjin: number
  cifRupiah: number
  saldoAwal: number
  kodeBarang: string
  saldoAkhir: number
  seriBarang: number
  tarifCukai: number
  barangTarif: BarangTarif[]
  hargaEkspor: number
  hargaSatuan: number
  nilaiBarang: number
  nilaiDevisa: number
  nilaiTambah: number
  hargaPatokan: number
  jumlahSatuan: number
  barangDokumen: BarangDokumen[]
  barangPemilik: any[]
  isiPerKemasan: number
  jumlahKemasan: number
  hargaPerolehan: number
  kodeNegaraAsal: string
  nilaiDanaSawit: number
  tahunPembuatan: number
  hargaPenyerahan: number
  jumlahBahanBaku: number
  jumlahPitaCukai: number
  jumlahRealisasi: number
  persentaseImpor: number
  spesifikasiLain: string
  barangSpekKhusus: any[]
  jumlahDilekatkan: number
  kodeJenisKemasan: string
  kodeSatuanBarang: string
  pernyataanLartas: string
  kapasitasSilinder: number
  kodeKondisiBarang: string
  seriBarangDokAsal: number
}
