// const listBC = ['BC 2.0', 'BC 3.0']
const listBC = [
  { id: 'BC 2.0', name: 'BC 2.0' },
  { id: 'BC 3.0', name: 'BC 3.0' }
]

const kodeKantor = [
  { id: '000000', name: 'DJBC' },
  { id: '001000', name: 'SEKRETARIAT' },
  { id: '001100', name: 'TP BIDANG I' },
  { id: '001200', name: 'TP BIDANG II' },
  { id: '001300', name: 'TP BIDANG III' },
  { id: '001400', name: 'DIREKTORAT KI' },
  { id: '001500', name: 'DIREKTORAT KBP' },
  { id: '002000', name: 'DIREKTORAT TEKNIS' },
  { id: '003000', name: 'DIREKTORAT FASILITAS' },
  { id: '004000', name: 'DIREKTORAT CUKAI' },
  { id: '005000', name: 'DIREKTORAT P2' },
  { id: '006000', name: 'DIREKTORAT AUDIT' },
  { id: '007000', name: 'DIREKTORAT KIAL' },
  { id: '008000', name: 'DIREKTORAT PPS' },
  { id: '009000', name: 'DIREKTORAT IKC' },
  { id: '010000', name: 'KANWIL SUMUT' },
  { id: '010100', name: 'KPPBC KUALANAMU' },
  { id: '010700', name: 'KPPBC ELAWAN' },
  { id: '010800', name: 'KPPBC MEDAN' },
  { id: '010900', name: 'KPPBC PANGKALAN SUSU' },
  { id: '011000', name: 'KPPBC PEMATANGSIANTAR' },
  { id: '011100', name: 'KPPBC TELUK NIBUNG' },
  { id: '011200', name: 'KPPBC KUALA TANJUNG' },
  { id: '011300', name: 'KPPBC SIBOLGA' },
  { id: '011500', name: 'KPPBC TELUK BAYUR' },
  { id: '011600', name: 'BLBC KELAS II MEDAN' },
  { id: '020000', name: 'KANWIL KHUSUS KEPRI' },
  { id: '020100', name: 'KPPBC TBK' },
  { id: '020200', name: 'KPPBC SAMBU BELAKANG PADANG' },
  { id: '020300', name: 'KPPBC SELAT PANJANG' },
  { id: '020400', name: 'KPU BATAM' },
  { id: '020500', name: 'KPPBC TANJUNG PINANG' },
  { id: '020800', name: 'KPPBC DABO SINGKEP' },
  { id: '020900', name: 'KPPBC DUMAI' },
  { id: '021000', name: 'KPPBC BAGAN SIAPIAPI' },
  { id: '021100', name: 'KPPBC BENGKALIS' },
  { id: '021200', name: 'KPPBC PEKANBARU' },
  { id: '021300', name: 'KPPBC SIAK SRI INDRAPURA' },
  { id: '021500', name: 'KPPBC TEMBILAHAN' },
  { id: '021700', name: 'KPPBC TAREMPA' },
  { id: '021800', name: 'PANGSAROP BATAM' },
  {
    id: '021900',
    name: 'PANGSAROP TANJUNG BALAI KARIMUN'
  },
  { id: '030000', name: 'KANWIL SUMBAGTIM' },
  { id: '030100', name: 'KPPBC PALEMBANG' },
  { id: '030200', name: 'KPPBC BENGKULU' },
  { id: '030300', name: 'KPPBC PANGKALPINANG' },
  { id: '030500', name: 'KPPBC TANJUNGPANDAN' },
  { id: '030600', name: 'KPPBC JAMBI' },
  { id: '030700', name: 'KPPBC BANDAR LAMPUNG' },
  { id: '040000', name: 'KANWIL JAKARTA' },
  { id: '040300', name: 'KPU TANJUNG PRIOK' },
  { id: '040400', name: 'KPPBC JAKARTA' },
  { id: '040500', name: 'BLBC KELAS I JAKARTA' },
  { id: '040600', name: 'KPPBC KANTOR POS PASAR BARU' },
  { id: '040700', name: 'PANGSAROP TANJUNG PRIOK' },
  { id: '050000', name: 'KANWIL JABAR' },
  { id: '050100', name: 'KPU  SOEKARNO-HATTA' },
  { id: '050300', name: 'KPPBC  BOGOR' },
  { id: '050400', name: 'KPPBC TMP MERAK' },
  { id: '050500', name: 'KPPBC BANDUNG' },
  { id: '050600', name: 'KPPBC TASIKMALAYA' },
  { id: '050700', name: 'KPPBC CIREBON' },
  { id: '050800', name: 'KPPBC PURWAKARTA' },
  { id: '050900', name: 'KPPBC BEKASI' },
  { id: '051000', name: 'KPPBC CIKARANG' },
  { id: '060000', name: 'KANWIL JATENG DIY' },
  { id: '060100', name: 'KPPBC TMP TANJUNG EMAS' },
  { id: '060200', name: 'KPPBC PEKALONGAN' },
  { id: '060300', name: 'KPPBC TMC KUDUS' },
  { id: '060400', name: 'KPPBC CILACAP' },
  { id: '060600', name: 'KPPBC SURAKARTA' },
  { id: '060700', name: 'KPPBC YOGYAKARTA' },
  { id: '060800', name: 'KPPBC SEMARANG' },
  { id: '061000', name: 'KPPBC TEGAL' },
  { id: '061100', name: 'KPPBC MAGELANG' },
  { id: '062000', name: 'KPPBC PURWOKERTO' },
  { id: '070000', name: 'KANWIL JATIM I' },
  { id: '070100', name: 'KPPBC TMP TANJUNG PERAK' },
  { id: '070200', name: 'KPPBC MADURA' },
  { id: '070300', name: 'KPPBC GRESIK' },
  { id: '070400', name: 'KPPBC BOJONEGORO' },
  { id: '070500', name: 'KPPBC TMP JUANDA' },
  { id: '070600', name: 'KPPBC TMC MALANG' },
  { id: '070700', name: 'KPPBC BLITAR' },
  { id: '070800', name: 'KPPBC TMC KEDIRI' },
  { id: '070900', name: 'KPPBC TULUNG AGUNG' },
  { id: '071000', name: 'KPPBC MADIUN' },
  { id: '071100', name: 'KPPBC JEMBER' },
  { id: '071200', name: 'KPPBC PROBOLINGGO' },
  { id: '071300', name: 'KPPBC PASURUAN' },
  { id: '071400', name: 'BLBC KELAS II SURABAYA' },
  { id: '071500', name: 'KPPBC SIDOARJO' },
  { id: '080000', name: 'KANWIL BALI, NTB DAN NTT' },
  { id: '080100', name: 'KPPBC TMP NGURAH RAI' },
  { id: '080200', name: 'KPPBC DENPASAR' },
  { id: '080300', name: 'KPPBC MATARAM' },
  { id: '080400', name: 'KPPBC SUMBAWA' },
  { id: '080500', name: 'KPPBC KUPANG' },
  { id: '080700', name: 'KPPBC MAUMERE' },
  { id: '081200', name: 'KPPBC BENOA' },
  { id: '081300', name: 'KPPBC ATAPUPU' },
  { id: '081400', name: 'KPPBC ATAMBUA' },
  { id: '090000', name: 'KANWIL KALBAGBAR' },
  { id: '090100', name: 'KPPBC PONTIANAK' },
  { id: '090200', name: 'KPPBC ENTIKONG' },
  { id: '090400', name: 'KPPBC KETAPANG' },
  { id: '090500', name: 'KPPBC SINTETE' },
  { id: '090700', name: 'KPPBC SAMPIT' },
  { id: '090800', name: 'KPPBC PANGKALAN BUN' },
  { id: '090900', name: 'KPPBC PULANG PISAU' },
  { id: '091000', name: 'KPPBC NANGA BADAU' },
  { id: '092000', name: 'KPPBC JAGOI BABANG' },
  { id: '100000', name: 'KANWIL KALBAGTIM' },
  { id: '100100', name: 'KPPBC BANJARMASIN' },
  { id: '100200', name: 'KPPBC KOTABARU' },
  { id: '100300', name: 'KPPBC BALIKPAPAN' },
  { id: '100500', name: 'KPPBC SAMARINDA' },
  { id: '100600', name: 'KPPBC BONTANG' },
  { id: '100800', name: 'KPPBC TARAKAN' },
  { id: '100900', name: 'KPPBC NUNUKAN' },
  { id: '101000', name: 'KPPBC SANGATTA' },
  { id: '110000', name: 'KANWIL SULBAGSEL' },
  { id: '110100', name: 'KPPBC MAKASSAR' },
  { id: '110300', name: 'KPPBC PAREPARE' },
  { id: '110400', name: 'KPPBC MALILI' },
  { id: '110500', name: 'KPPBC BAJOE' },
  { id: '110600', name: 'KPPBC KENDARI' },
  { id: '110700', name: 'KPPBC POMALAA' },
  { id: '110800', name: 'KPPBC PANTOLOAN' },
  { id: '110900', name: 'KPPBC MOROWALI' },
  { id: '111000', name: 'KPPBC LUWUK' },
  { id: '111100', name: 'KPPBC BITUNG' },
  { id: '111200', name: 'KPPBC MANADO' },
  { id: '111300', name: 'KPPBC GORONTALO' },
  { id: '111400', name: 'PANGSAROP PANTOLOAN' },
  { id: '120000', name: 'KANWIL MALUKU' },
  { id: '120100', name: 'KPPBC AMBON' },
  { id: '120200', name: 'KPPBC TERNATE' },
  { id: '120300', name: 'KPPBC SORONG' },
  { id: '120400', name: 'KPPBC MANOKWARI' },
  { id: '120500', name: 'KPPBC FAK-FAK' },
  { id: '120600', name: 'KPPBC JAYAPURA' },
  { id: '120700', name: 'KPPBC MERAUKE' },
  { id: '120800', name: 'KPPBC AMAMAPARE' },
  { id: '120900', name: 'KPPBC BIAK' },
  { id: '121000', name: 'KPPBC TUAL' },
  { id: '121100', name: 'PANGSAROP SORONG' },
  { id: '122000', name: 'KPPBC BINTUNI' },
  { id: '122100', name: 'KPPBC KAIMANA' },
  { id: '122200', name: 'KPPBC NABIRE' },
  { id: '122300', name: 'KPPBC BABO' },
  { id: '130000', name: 'KANWIL ACEH' },
  { id: '130100', name: 'KPPBC BANDA ACEH' },
  { id: '130300', name: 'KPPBC SABANG' },
  { id: '130400', name: 'KPPBC MEULABOH' },
  { id: '130500', name: 'KPPBC LHOKSEUMAWE' },
  { id: '130600', name: 'KPPBC KUALA LANGSA' },
  { id: '140000', name: 'KANWIL RIAU' },
  { id: '150000', name: 'KANWIL BANTEN' },
  { id: '150300', name: 'KPPBC TANGERANG' },
  { id: '160000', name: 'KANWIL JATIM II' },
  { id: '160200', name: 'KPPBC MARUNDA' },
  { id: '160700', name: 'KPPBC BANYUWANGI' },
  { id: '170000', name: 'KANWIL SUMBAGBAR' },
  { id: '180000', name: 'KANWIL KALBAGSEL' },
  { id: '180100', name: 'KPPBC Nashta' },
  { id: '180200', name: 'KPPBC Nashta' },
  { id: '190000', name: 'KANWIL SULBAGTARA' },
  { id: '200000', name: 'KANWIL KHUSUS PAPUA' },
  { id: '760000', name: 'PUSDIKLAT BEA DAN CUKAI' },
  { id: '999999', name: 'UNIT LAIN DI LUAR DJBC' }
]

const kodeJenisImpor = [
  { id: '1', name: 'UNTUK DIPAKAI' },
  { id: '2', name: 'SEMENTARA' },
  { id: '3', name: 'REIMPOR' },
  { id: '4', name: 'TPB' },
  { id: '5', name: 'PELAYANAN SEGERA' },
  { id: '6', name: 'VOORUITSLAG' },
  { id: '7', name: 'GABUNGAN' }
]

const kodeCaraBayar = [
  { id: '1', name: 'BIASA/TUNAI' },
  { id: '2', name: 'BERKALA' },
  { id: '3', name: 'DENGAN JAMINAN' },
  { id: '4', name: 'PERHITUNGAN KEMUDIAN' },
  { id: '5', name: 'KONSINYASI (CONSIGNMENT)' },
  { id: '6', name: 'USANCE LETTER OF CREDIT' },
  { id: '7', name: 'RED CLAUSE LETTER OF CREDIT' },
  { id: '8', name: 'INTER-COMPANY ACCOUNT' },
  { id: '9', name: 'GABUNGAN/LAINNYA' },
  {
    id: '10',
    name: 'PEMBAYARAN KEMUDIAN (OPEN ACCOUNT) SECARA BERTAHAP'
  },
  {
    id: '11',
    name: 'PEMBAYARAN KEMUDIAN (OPEN ACCOUNT) SECARA TUNAI'
  },
  {
    id: '12',
    name: 'DILAKUKAN DI DN DENGAN PEMBAYARAN UANG TUNAI'
  },
  {
    id: '13',
    name: 'DILAKUKAN DI DN DENGAN PEMBAYARAN MELALUI TELEGRAPH'
  },
  { id: '14', name: 'DILAKUKAN TANPA PEMBAYARAN' },
  { id: '15', name: 'PEMBAYARAN DIMUKA (ADVANCE PAYMENT)' },
  { id: '16', name: 'SIGHT LETTER OF CREDIT' },
  { id: '17', name: 'INKASO (COLLECTION DRAFT)' }
]

const kodeJenisProsedur = [
  { id: '1', name: 'BIASA' },
  { id: '2', name: 'BERKALA' }
]

const kodeJenisIdentitas = [
  { id: '0', name: 'NPWP 12 DIGIT' },
  { id: '1', name: 'NPWP 10 DIGIT' },
  { id: '2', name: 'PASPOR' },
  { id: '3', name: 'KTP' },
  { id: '4', name: 'LAINNYA' },
  { id: '5', name: 'NPWP 15 DIGIT' }
]

const kodeJenisApi = [
  { id: '01', name: 'ANGKA PENGENAL IMPORTIR UMUM (APIU)' },
  { id: '02', name: 'ANGKA PENGENAL IMPORTIR PERSEROAN (APIP)' },
  { id: '04', name: 'ANGKA PENGENAL IMPORTIR TERBATAS (APIT)' }
]

// status importir
const kodeStatus = [
  { id: 'MITA', name: 'MITA' },
  { id: 'AEO', name: 'AEO' },
  { id: 'LAINNYA', name: 'LAINNYA' }
]

const kodeNegara = [
  {
    id: 'AN',
    name: 'NETHERLANDS ANTILLES'
  },
  {
    id: 'AZ',
    name: 'AZERBAIJAN'
  },
  {
    id: 'BE',
    name: 'BELGIUM'
  },
  {
    id: 'BH',
    name: 'BAHRAIN'
  },
  {
    id: 'BJ',
    name: 'BENIN'
  },
  {
    id: 'CC',
    name: 'COCOS (KEELING) ISLANDS'
  },
  {
    id: 'CI',
    name: "COTE D'IVOIRE"
  },
  {
    id: 'CK',
    name: 'COOK ISLANDS'
  },
  {
    id: 'CU',
    name: 'CUBA'
  },
  {
    id: 'CV',
    name: 'CAPE VERDE'
  },
  {
    id: 'CX',
    name: 'CHRISTMAS ISLAND'
  },
  {
    id: 'CZ',
    name: 'CZECH REPUBLIC'
  },
  {
    id: 'DJ',
    name: 'DJIBOUTI'
  },
  {
    id: 'DK',
    name: 'DENMARK'
  },
  {
    id: 'DO',
    name: 'DOMINICAN REPUBLIC'
  },
  {
    id: 'ER',
    name: 'ERITREA'
  },
  {
    id: 'FI',
    name: 'FINLAND'
  },
  {
    id: 'FR',
    name: 'FRANCE'
  },
  {
    id: 'GE',
    name: 'GEORGIA'
  },
  {
    id: 'HM',
    name: 'HEARD ISLAND AND MCDONALD ISLANDS'
  },
  {
    id: 'HU',
    name: 'HUNGARY'
  },
  {
    id: 'IL',
    name: 'ISRAEL'
  },
  {
    id: 'IO',
    name: 'BRITISH INDIAN OCEAN TERRITORY'
  },
  {
    id: 'IR',
    name: 'IRAN, ISLAMIC REPUBLIC OF'
  },
  {
    id: 'JM',
    name: 'JAMAICA'
  },
  {
    id: 'JO',
    name: 'JORDAN'
  },
  {
    id: 'KH',
    name: 'CAMBODIA'
  },
  {
    id: 'KI',
    name: 'KIRIBATI'
  },
  {
    id: 'KM',
    name: 'COMOROS'
  },
  {
    id: 'LA',
    name: "LAO PEOPLE'S DEMOCRATIC REPUBLIC"
  },
  {
    id: 'LK',
    name: 'SRI LANKA'
  },
  {
    id: 'LS',
    name: 'LESOTHO'
  },
  {
    id: 'LV',
    name: 'LATVIA'
  },
  {
    id: 'MQ',
    name: 'MARTINIQUE'
  },
  {
    id: 'MT',
    name: 'MALTA'
  },
  {
    id: 'MZ',
    name: 'MOZAMBIQUE'
  },
  {
    id: 'NA',
    name: 'NAMIBIA'
  },
  {
    id: 'NG',
    name: 'NIGERIA'
  },
  {
    id: 'NP',
    name: 'NEPAL'
  },
  {
    id: 'NU',
    name: 'NIUE'
  },
  {
    id: 'Nh',
    name: 'NASHTAx'
  },
  {
    id: 'Ni',
    name: 'NAuHTA'
  },
  {
    id: 'Nl',
    name: 'NLAHTAX'
  },
  {
    id: 'PA',
    name: 'PANAMA'
  },
  {
    id: 'PE',
    name: 'PERU'
  },
  {
    id: 'PG',
    name: 'PAPUA NEW GUINEA'
  },
  {
    id: 'PH',
    name: 'PHILIPPINES'
  },
  {
    id: 'PT',
    name: 'PORTUGAL'
  },
  {
    id: 'SB',
    name: 'SOLOMON ISLANDS'
  },
  {
    id: 'SC',
    name: 'SEYCHELLES'
  },
  {
    id: 'SE',
    name: 'SWEDEN'
  },
  {
    id: 'SK',
    name: 'SLOVAKIA'
  },
  {
    id: 'SS',
    name: 'South Sudan'
  },
  {
    id: 'TF',
    name: 'FRENCH SOUTHERN TERRITORIES'
  },
  {
    id: 'TG',
    name: 'TOGO'
  },
  {
    id: 'TO',
    name: 'TONGA'
  },
  {
    id: 'UA',
    name: 'UKRAINE'
  },
  {
    id: 'UG',
    name: 'UGANDA'
  },
  {
    id: 'AL',
    name: 'ALBANIA'
  },
  {
    id: 'AO',
    name: 'ANGOLA'
  },
  {
    id: 'AT',
    name: 'AUSTRIA'
  },
  {
    id: 'BA',
    name: 'BOSNIA AND HERZEGOVINA'
  },
  {
    id: 'BB',
    name: 'BARBADOS'
  },
  {
    id: 'BO',
    name: 'BOLIVIA'
  },
  {
    id: 'CD',
    name: 'CONGO, THE DEMOCRATIC REPUBLIC OF THE'
  },
  {
    id: 'DE',
    name: 'GERMANY'
  },
  {
    id: 'DM',
    name: 'DOMINICA'
  },
  {
    id: 'EH',
    name: 'WESTERN SAHARA'
  },
  {
    id: 'ET',
    name: 'ETHIOPIA'
  },
  {
    id: 'FJ',
    name: 'FIJI'
  },
  {
    id: 'FM',
    name: 'MICRONESIA, FEDERATED STATES OF'
  },
  {
    id: 'GA',
    name: 'GABON'
  },
  {
    id: 'HN',
    name: 'HONDURAS'
  },
  {
    id: 'IN',
    name: 'INDIA'
  },
  {
    id: 'IQ',
    name: 'IRAQ'
  },
  {
    id: 'IS',
    name: 'ICELAND'
  },
  {
    id: 'KN',
    name: 'SAINT KITTS AND NEVIS'
  },
  {
    id: 'LB',
    name: 'LEBANON'
  },
  {
    id: 'LR',
    name: 'LIBERIA'
  },
  {
    id: 'LT',
    name: 'LITHUANIA'
  },
  {
    id: 'MG',
    name: 'MADAGASCAR'
  },
  {
    id: 'ML',
    name: 'MALI'
  },
  {
    id: 'MP',
    name: 'NORTHERN MARIANA ISLANDS'
  },
  {
    id: 'NF',
    name: 'NORFOLK ISLAND'
  },
  {
    id: 'NL',
    name: 'NETHERLANDS'
  },
  {
    id: 'NZ',
    name: 'NEW ZEALAND'
  },
  {
    id: 'PL',
    name: 'POLAND'
  },
  {
    id: 'PN',
    name: 'PITCAIRN'
  },
  {
    id: 'PR',
    name: 'PUERTO RICO'
  },
  {
    id: 'PW',
    name: 'PALAU'
  },
  {
    id: 'RS',
    name: 'SERBIA'
  },
  {
    id: 'SA',
    name: 'SAUDI ARABIA'
  },
  {
    id: 'SD',
    name: 'SUDAN'
  },
  {
    id: 'SG',
    name: 'SINGAPORE'
  },
  {
    id: 'SH',
    name: 'SAINT HELENA'
  },
  {
    id: 'SN',
    name: 'SENEGAL'
  },
  {
    id: 'ST',
    name: 'SAO TOME AND PRINCIPE'
  },
  {
    id: 'TJ',
    name: 'TAJIKISTAN'
  },
  {
    id: 'TK',
    name: 'TOKELAU'
  },
  {
    id: 'TT',
    name: 'TRINIDAD AND TOBAGO'
  },
  {
    id: 'TZ',
    name: 'TANZANIA, UNITED REPUBLIC OF'
  },
  {
    id: 'US',
    name: 'UNITED STATES'
  },
  {
    id: 'VE',
    name: 'VENEZUELA'
  },
  {
    id: 'VG',
    name: 'VIRGIN ISLANDS, BRITISH'
  },
  {
    id: 'VU',
    name: 'VANUATU'
  },
  {
    id: 'WF',
    name: 'WALLIS AND FUTUNA'
  },
  {
    id: 'YU',
    name: 'YUGOSLAVIA'
  },
  {
    id: 'AF',
    name: 'AFGHANISTAN'
  },
  {
    id: 'AQ',
    name: 'ANTARCTICA'
  },
  {
    id: 'BL',
    name: 'Saint Barth�lemy'
  },
  {
    id: 'BT',
    name: 'BHUTAN'
  },
  {
    id: 'BZ',
    name: 'BELIZE'
  },
  {
    id: 'CG',
    name: 'CONGO'
  },
  {
    id: 'CN',
    name: 'CHINA'
  },
  {
    id: 'CR',
    name: 'COSTA RICA'
  },
  {
    id: 'CW',
    name: 'Cura�ao'
  },
  {
    id: 'CY',
    name: 'CYPRUS'
  },
  {
    id: 'DZ',
    name: 'ALGERIA'
  },
  {
    id: 'EE',
    name: 'ESTONIA'
  },
  {
    id: 'ES',
    name: 'SPAIN'
  },
  {
    id: 'FK',
    name: 'FALKLAND ISLANDS (MALVINAS)'
  },
  {
    id: 'GF',
    name: 'FRENCH GUIANA'
  },
  {
    id: 'GH',
    name: 'GHANA'
  },
  {
    id: 'GI',
    name: 'GIBRALTAR'
  },
  {
    id: 'GQ',
    name: 'EQUATORIAL GUINEA'
  },
  {
    id: 'GR',
    name: 'GREECE'
  },
  {
    id: 'GS',
    name: 'SOUTH GEORGIA AND THE SOUTH SANDWICH ISL'
  },
  {
    id: 'GY',
    name: 'GUYANA'
  },
  {
    id: 'HT',
    name: 'HAITI'
  },
  {
    id: 'ID',
    name: 'INDONESIA'
  },
  {
    id: 'IE',
    name: 'IRELAND'
  },
  {
    id: 'KP',
    name: "KOREA, DEMOCRATIC PEOPLE'S REPUBLIC OF"
  },
  {
    id: 'KW',
    name: 'KUWAIT'
  },
  {
    id: 'LY',
    name: 'LIBYAN ARAB JAMAHIRIYA'
  },
  {
    id: 'MR',
    name: 'MAURITANIA'
  },
  {
    id: 'NI',
    name: 'NICARAGUA'
  },
  {
    id: 'NO',
    name: 'NORWAY'
  },
  {
    id: 'NT',
    name: 'NAuHTA'
  },
  {
    id: 'PF',
    name: 'FRENCH POLYNESIA'
  },
  {
    id: 'QA',
    name: 'QATAR'
  },
  {
    id: 'RE',
    name: 'REUNION'
  },
  {
    id: 'RU',
    name: 'RUSSIAN FEDERATION'
  },
  {
    id: 'SJ',
    name: 'SVALBARD AND JAN MAYEN'
  },
  {
    id: 'SO',
    name: 'SOMALIA'
  },
  {
    id: 'SR',
    name: 'SURINAME'
  },
  {
    id: 'SV',
    name: 'EL SALVADOR'
  },
  {
    id: 'TD',
    name: 'CHAD'
  },
  {
    id: 'TH',
    name: 'THAILAND'
  },
  {
    id: 'TP',
    name: 'EAST TIMOR'
  },
  {
    id: 'TW',
    name: 'TAIWAN, PROVINCE OF CHINA'
  },
  {
    id: 'UY',
    name: 'URUGUAY'
  },
  {
    id: 'VN',
    name: 'VIET NAM'
  },
  {
    id: 'WS',
    name: 'SAMOA'
  },
  {
    id: 'YE',
    name: 'YEMEN'
  },
  {
    id: 'YT',
    name: 'MAYOTTE'
  },
  {
    id: 'ZA',
    name: 'SOUTH AFRICA'
  },
  {
    id: 'ZW',
    name: 'ZIMBABWE'
  },
  {
    id: 'AE',
    name: 'UNITED ARAB EMIRATES'
  },
  {
    id: 'AG',
    name: 'ANTIGUA AND BARBUDA'
  },
  {
    id: 'AI',
    name: 'ANGUILLA'
  },
  {
    id: 'AM',
    name: 'ARMENIA'
  },
  {
    id: 'AR',
    name: 'ARGENTINA'
  },
  {
    id: 'BD',
    name: 'BANGLADESH'
  },
  {
    id: 'BF',
    name: 'BURKINA FASO'
  },
  {
    id: 'BG',
    name: 'BULGARIA'
  },
  {
    id: 'BI',
    name: 'BURUNDI'
  },
  {
    id: 'BQ',
    name: 'Bonaire, Sint Eustatius and Saba'
  },
  {
    id: 'BS',
    name: 'BAHAMAS'
  },
  {
    id: 'BV',
    name: 'BOUVET ISLAND'
  },
  {
    id: 'CA',
    name: 'CANADA'
  },
  {
    id: 'CH',
    name: 'SWITZERLAND'
  },
  {
    id: 'CL',
    name: 'CHILE'
  },
  {
    id: 'CM',
    name: 'CAMEROON'
  },
  {
    id: 'CO',
    name: 'COLOMBIA'
  },
  {
    id: 'EC',
    name: 'ECUADOR'
  },
  {
    id: 'GB',
    name: 'UNITED KINGDOM'
  },
  {
    id: 'GD',
    name: 'GRENADA'
  },
  {
    id: 'GG',
    name: 'Guernsey'
  },
  {
    id: 'GM',
    name: 'GAMBIA'
  },
  {
    id: 'GP',
    name: 'GUADELOUPE'
  },
  {
    id: 'GW',
    name: 'GUINEA-BISSAU'
  },
  {
    id: 'HK',
    name: 'HONG KONG'
  },
  {
    id: 'IM',
    name: 'Isle of Man'
  },
  {
    id: 'KR',
    name: 'KOREA, REPUBLIC OF'
  },
  {
    id: 'KY',
    name: 'CAYMAN ISLANDS'
  },
  {
    id: 'KZ',
    name: 'KAZAKSTAN'
  },
  {
    id: 'LC',
    name: 'SAINT LUCIA'
  },
  {
    id: 'LU',
    name: 'LUXEMBOURG'
  },
  {
    id: 'MA',
    name: 'MOROCCO'
  },
  {
    id: 'ME',
    name: 'Montenegro'
  },
  {
    id: 'MF',
    name: 'Saint Martin (French Part)'
  },
  {
    id: 'MM',
    name: 'MYANMAR'
  },
  {
    id: 'MS',
    name: 'MONTSERRAT'
  },
  {
    id: 'MU',
    name: 'MAURITIUS'
  },
  {
    id: 'MY',
    name: 'MALAYSIA'
  },
  {
    id: 'NE',
    name: 'NIGER'
  },
  {
    id: 'NR',
    name: 'NAURU'
  },
  {
    id: 'Nz',
    name: 'NAuHTA'
  },
  {
    id: 'OM',
    name: 'OMAN'
  },
  {
    id: 'PK',
    name: 'PAKISTAN'
  },
  {
    id: 'ZA',
    name: 'SOUTH AFRICA'
  },
  {
    id: 'ZW',
    name: 'ZIMBABWE'
  },
  {
    id: 'AN',
    name: 'NETHERLANDS ANTILLES'
  },
  {
    id: 'AZ',
    name: 'AZERBAIJAN'
  },
  {
    id: 'BE',
    name: 'BELGIUM'
  },
  {
    id: 'BH',
    name: 'BAHRAIN'
  },
  {
    id: 'BJ',
    name: 'BENIN'
  },
  {
    id: 'CC',
    name: 'COCOS (KEELING) ISLANDS'
  },
  {
    id: 'CI',
    name: "COTE D'IVOIRE"
  },
  {
    id: 'CK',
    name: 'COOK ISLANDS'
  },
  {
    id: 'CU',
    name: 'CUBA'
  },
  {
    id: 'CV',
    name: 'CAPE VERDE'
  },
  {
    id: 'CX',
    name: 'CHRISTMAS ISLAND'
  },
  {
    id: 'CZ',
    name: 'CZECH REPUBLIC'
  },
  {
    id: 'DJ',
    name: 'DJIBOUTI'
  },
  {
    id: 'DK',
    name: 'DENMARK'
  },
  {
    id: 'DO',
    name: 'DOMINICAN REPUBLIC'
  },
  {
    id: 'ER',
    name: 'ERITREA'
  },
  {
    id: 'FI',
    name: 'FINLAND'
  },
  {
    id: 'FR',
    name: 'FRANCE'
  },
  {
    id: 'GE',
    name: 'GEORGIA'
  },
  {
    id: 'HM',
    name: 'HEARD ISLAND AND MCDONALD ISLANDS'
  },
  {
    id: 'HU',
    name: 'HUNGARY'
  },
  {
    id: 'IL',
    name: 'ISRAEL'
  },
  {
    id: 'IO',
    name: 'BRITISH INDIAN OCEAN TERRITORY'
  },
  {
    id: 'IR',
    name: 'IRAN, ISLAMIC REPUBLIC OF'
  },
  {
    id: 'JM',
    name: 'JAMAICA'
  },
  {
    id: 'JO',
    name: 'JORDAN'
  },
  {
    id: 'KH',
    name: 'CAMBODIA'
  },
  {
    id: 'KI',
    name: 'KIRIBATI'
  },
  {
    id: 'KM',
    name: 'COMOROS'
  },
  {
    id: 'LA',
    name: "LAO PEOPLE'S DEMOCRATIC REPUBLIC"
  },
  {
    id: 'LK',
    name: 'SRI LANKA'
  },
  {
    id: 'LS',
    name: 'LESOTHO'
  },
  {
    id: 'LV',
    name: 'LATVIA'
  },
  {
    id: 'MQ',
    name: 'MARTINIQUE'
  },
  {
    id: 'MT',
    name: 'MALTA'
  },
  {
    id: 'MZ',
    name: 'MOZAMBIQUE'
  },
  {
    id: 'NA',
    name: 'NAMIBIA'
  },
  {
    id: 'NG',
    name: 'NIGERIA'
  },
  {
    id: 'NP',
    name: 'NEPAL'
  },
  {
    id: 'NU',
    name: 'NIUE'
  },
  {
    id: 'Nh',
    name: 'NASHTAx'
  },
  {
    id: 'Ni',
    name: 'NAuHTA'
  },
  {
    id: 'Nl',
    name: 'NLAHTAX'
  },
  {
    id: 'PA',
    name: 'PANAMA'
  },
  {
    id: 'PE',
    name: 'PERU'
  },
  {
    id: 'PG',
    name: 'PAPUA NEW GUINEA'
  },
  {
    id: 'PH',
    name: 'PHILIPPINES'
  },
  {
    id: 'PT',
    name: 'PORTUGAL'
  },
  {
    id: 'SB',
    name: 'SOLOMON ISLANDS'
  },
  {
    id: 'SC',
    name: 'SEYCHELLES'
  },
  {
    id: 'SE',
    name: 'SWEDEN'
  },
  {
    id: 'SK',
    name: 'SLOVAKIA'
  },
  {
    id: 'SS',
    name: 'South Sudan'
  },
  {
    id: 'TF',
    name: 'FRENCH SOUTHERN TERRITORIES'
  },
  {
    id: 'TG',
    name: 'TOGO'
  },
  {
    id: 'TO',
    name: 'TONGA'
  },
  {
    id: 'UA',
    name: 'UKRAINE'
  },
  {
    id: 'UG',
    name: 'UGANDA'
  }
]

const kodeJenisDokumen = [
  {
    id: '10',
    name: 'RKSP'
  },
  {
    id: '11',
    name: 'MANIFES'
  },
  {
    id: '16',
    name: 'BC 1.6 - PEMBERITAHUAN PABEAN PENGELUARAN BARANG DARI KAWASAN PABEAN UNTUK DITIMBUN DI PUSAT LOGISTIK BERIKAT'
  },
  {
    id: '20',
    name: 'BC 2.0 - PEMBERITAHUAN IMPOR BARANG'
  },
  {
    id: '21',
    name: 'PIBK/IMPOR KHUSUS'
  },
  {
    id: '23',
    name: 'BC 2.3 - PEMBERITAHUAN IMPOR BARANG UNTUK DITIMBUN DI TEMPAT PENIMBUNAN BERIKAT'
  },
  {
    id: '25',
    name: 'BC 2.5 - PEMBERITAHUAN IMPOR BARANG DARI TEMPAT PENIMBUNAN BERIKAT'
  },
  {
    id: '27',
    name: 'BC 2.7 - PEMBERITAHUAN PENGELUARAN UNTUK DIANGKUT DARI TEMPAT PENIMBUNAN BERIKAT KE TEMPAT PENIMBUNAN BERIKAT LAINNYA'
  },
  {
    id: '28',
    name: 'BC 2.8 - PEMBERITAHUAN IMPOR BARANG DARI PUSAT LOGISTIK BERIKAT'
  },
  {
    id: '30',
    name: 'BC 3.0 - PEMBERITAHUAN EKSPOR NARAMG'
  },
  {
    id: '33',
    name: 'BC 3.3 - PEMBERITAHUAN EKSPOR BARANG MELALUI/DARI PUSAT LOGISTIK BERIKAT'
  },
  {
    id: '40',
    name: 'BC 4.0 - PEMBERITAHUAN PEMASUKAN BARANG ASAL TEMPAT LAIN DALAM DAERAH PABEAN KE TEMPAT PENIMBUNAN BERIKAT'
  },
  {
    id: '41',
    name: 'BC 4.1 - PEMBERITAHUAN PENGELUARAN KEMBALI BARANG ASAL TEMPAT LAIN DALAM DAERAH PABEAN DARI TEMPAT PENIMBUNAN BERIKAT'
  },
  {
    id: '50',
    name: 'KITE'
  },
  {
    id: '51',
    name: 'FTZ 01'
  },
  {
    id: '52',
    name: 'FTZ 02'
  },
  {
    id: '53',
    name: 'FTZ 03'
  },
  {
    id: '65',
    name: 'BC 1.1 KONSOLIDASI PJT'
  },
  {
    id: '111',
    name: 'Bank Devisa Hasil Ekspor (DHE)'
  },
  {
    id: '161',
    name: 'PPB - PEMBERITAHUAN PERPINDAHAN BARANG ANTAR TEMPAT PENIMBUNAN DALAM SATU PUSAT LOGISTIK BERIKAT'
  },
  {
    id: '217',
    name: 'PACKING LIST'
  },
  {
    id: '246',
    name: 'L/C'
  },
  {
    id: '261',
    name: 'BC 2.6.1 - PEMBERITAHUAN PENGELUARAN BARANG DARI TEMPAT PENIMBUNAN BERIKAT DENGAN JAMINAN'
  },
  {
    id: '262',
    name: 'BC 2.6.2 - PEMBERITAHUAN PEMASUKAN KEMBALI BARANG YANG DI KELUARKAN DARI TEMPAT PENIMBUNAN BERIKAT DENGAN JAMINAN'
  },
  {
    id: '281',
    name: 'PPK - PEMBERITAHUAN PEMASUKAN KEMBALI BARANG ASAL PLB DARI LOKASI PENERIMA FASILITAS DI TEMPAT LAIN DALAM DAERAH PABEAN KE PLB'
  },
  {
    id: '282',
    name: 'DOKAP PLB - PEMBERITAHUAN PENGELUARAN DENGAN DOKUMEN PELENGKAP'
  },
  {
    id: '315',
    name: 'KONTRAK'
  },
  {
    id: '331',
    name: 'P3BET - PEMBERITAHUAN PENGGABUNGAN DAN PEMECAHAN BARANG EKSPOR DAN TRANSHIPMENT'
  },
  {
    id: '343',
    name: 'SHIPING ORDER'
  },
  {
    id: '380',
    name: 'INVOICE'
  },
  {
    id: '383',
    name: 'SSTB'
  },
  {
    id: '388',
    name: 'FAKTUR PAJAK'
  },
  {
    id: '410',
    name: 'SURAT SANGGUP BAYAR / SSB'
  },
  {
    id: '430',
    name: 'BANK GARANSI'
  },
  {
    id: '440',
    name: 'SURAT TANDA BUKTI SETOR / STBS'
  },
  {
    id: '454',
    name: 'SSPCP / SSBC'
  },
  {
    id: '455',
    name: 'SURAT SETORAN PAJAK (SSP)'
  },
  {
    id: '456',
    name: 'SKB'
  },
  {
    id: '457',
    name: 'Surat Keterangan Bebas (SKB) PPh'
  },
  {
    id: '458',
    name: 'SURAT KETERANGAN TIDAK DIPUNGUT (SKTD) PPN'
  },
  {
    id: '500',
    name: 'MOU PDE (Eksportir)'
  },
  {
    id: '511',
    name: 'FTZ-01 PEMASUKAN DARI LUAR DAERAH PABEAN (IMPOR)'
  },
  {
    id: '512',
    name: 'FTZ-01 PENGELUARAN KE LUAR DAERAH PABEAN (EKSPOR)'
  },
  {
    id: '513',
    name: 'FTZ-01 PENGELUARAN KE TEMPAT LAIN DALAM DAERAH PABEAN'
  },
  {
    id: '521',
    name: 'FTZ-02 PEMASUKAN ANTAR FREE TRADE ZONE DAN KAWASAN BERIKAT'
  },
  {
    id: '522',
    name: 'FTZ-02 PENGELUARAN ANTAR FREE TRADE ZONE DAN KAWASAN BERIKAT'
  },
  {
    id: '531',
    name: 'FTZ-03 PEMASUKAN DARI TEMPAT LAIN DALAM DAERAH PABEAN'
  },
  {
    id: '640',
    name: 'DELIVERY ORDER'
  },
  {
    id: '666',
    name: 'Pengecualian Dengan Surat Keputusan'
  },
  {
    id: '704',
    name: 'MASTER B/L'
  },
  {
    id: '705',
    name: 'B/L'
  },
  {
    id: '740',
    name: 'AWB'
  },
  {
    id: '741',
    name: 'MASTER AWB'
  },
  {
    id: '800',
    name: 'SERTIFIKAT ALAT PERANGKAT TELEKOM/POSTEL'
  },
  {
    id: '803',
    name: 'SATS LN / DEPHUT'
  },
  {
    id: '805',
    name: 'REGISTRASI B3 / KLH'
  },
  {
    id: '808',
    name: 'IJIN IMPOR / POLRI'
  },
  {
    id: '809',
    name: 'SIE'
  },
  {
    id: '810',
    name: 'SM/SPM'
  },
  {
    id: '811',
    name: 'Sertifikat Legalitas Kayu (Dok.V-Legal)'
  },
  {
    id: '812',
    name: 'Dok. Impor (PIB)'
  },
  {
    id: '813',
    name: 'DOK. CUKAI (CK)'
  },
  {
    id: '814',
    name: 'SKEP IJIN EKSPOR BERKALA'
  },
  {
    id: '815',
    name: 'SKEP IJIN TATA NIAGA EKSPOR'
  },
  {
    id: '816',
    name: 'DOK. EKSPOR (PEB)'
  },
  {
    id: '817',
    name: 'Eksportir Terdaftar (ET) Depdag'
  },
  {
    id: '818',
    name: 'Endorsement BRIK'
  },
  {
    id: '819',
    name: 'Sertifikat Intan Kasar'
  },
  {
    id: '820',
    name: 'Surat Persetujuan Ekspor (SPE)'
  },
  {
    id: '821',
    name: 'Surat Tanda Registrasi UPPB'
  },
  {
    id: '822',
    name: 'Srt Tanda Pendaftaran Pedagang Bokor SIR'
  },
  {
    id: '834',
    name: 'SNI GULA KRISTAL MENTAH / DEPTAN'
  },
  {
    id: '835',
    name: 'IZIN DAN/ATAU PENDAFT PESTISIDA / DEPTAN'
  },
  {
    id: '836',
    name: 'IZIN IMPOR / DEPTAN'
  },
  {
    id: '842',
    name: 'SNI / ESDM'
  },
  {
    id: '843',
    name: 'NOMOR PELUMAS TERDAFTAR / ESDM'
  },
  {
    id: '844',
    name: 'IJIN USAHA NIAGA/IU NIAGA TERBATAS/ESDM'
  },
  {
    id: '845',
    name: 'REKOMENDASI IMPOR PELUMAS'
  },
  {
    id: '846',
    name: 'SKEM'
  },
  {
    id: '851',
    name: 'SURAT IJIN KARANTINA TANAMAN'
  },
  {
    id: '853',
    name: 'SURAT IJIN KARANTINA HEWAN / IKAN'
  },
  {
    id: '854',
    name: 'SURAT PERSETUJUAN MUAT BPOM'
  },
  {
    id: '856',
    name: 'LAP. PEMERIKSAAN SURVEYOR (LPS-E)'
  },
  {
    id: '857',
    name: 'FUMIGATION CERTIFICATE'
  },
  {
    id: '858',
    name: 'CITES CERTIFICATE'
  },
  {
    id: '860',
    name: 'Electronic Certificate Of Origin (E-CO)'
  },
  {
    id: '861',
    name: 'CERTIFICATE OF ORIGIN (CO)'
  },
  {
    id: '862',
    name: 'SKEP USDFS'
  },
  {
    id: '871',
    name: 'Nomor Pendaftaran Alat Kesehatan/Depkes'
  },
  {
    id: '872',
    name: 'LAPORAN SURVEYOR DEPKES'
  },
  {
    id: '873',
    name: 'IP (NARKTK, PREKURSOR & PSIKOTR)/DEPKES'
  },
  {
    id: '874',
    name: 'IT (PREKURSOR & PSIKOTR)/DEPKES'
  },
  {
    id: '875',
    name: 'SPI (NARKTK, PREKURSOR & PSIKOTR)/DEPKES'
  },
  {
    id: '876',
    name: 'Ijin Pembawaan UKA'
  },
  {
    id: '877',
    name: 'Ijin Persetujuan Pembawaan UKA'
  },
  {
    id: '878',
    name: 'Ijin Pelaporan Pembawaan UKA'
  },
  {
    id: '888',
    name: 'PENGECUALIAN PERIJINAN'
  },
  {
    id: '902',
    name: 'IJIN BAPETEN'
  },
  {
    id: '911',
    name: 'SURAT KEPUTUSAN'
  },
  {
    id: '912',
    name: 'SKEP FASILITAS BKPM'
  },
  {
    id: '913',
    name: 'SKEP FASILITAS PERTAMBANGAN'
  },
  {
    id: '914',
    name: 'KITE IKM'
  },
  {
    id: '915',
    name: 'Skep Fasilitas Impor Sementara'
  },
  {
    id: '917',
    name: 'BPBC / BPPAI'
  },
  {
    id: '918',
    name: 'SK LABEL BAHASA INDONESIA'
  },
  {
    id: '919',
    name: 'SK Bermotor'
  },
  {
    id: '920',
    name: 'SKEP TPB'
  },
  {
    id: '936',
    name: 'KH-9a/Izin Impor Karantina Hewan'
  },
  {
    id: '937',
    name: 'KH-14/Izin Impor Karantina Hewan'
  },
  {
    id: '938',
    name: 'KH-17/Izin Impor Karantina Hewan'
  },
  {
    id: '939',
    name: 'KT-5/Izin Impor Karantina Pertanian'
  },
  {
    id: '940',
    name: 'KT-9/Izin Impor Karantina Pertanian'
  },
  {
    id: '941',
    name: 'KT-13/Izin Impor Karantina Pertanian'
  },
  {
    id: '942',
    name: 'IZIN IMPOR KARANTINA TUMBUHAN'
  },
  {
    id: '943',
    name: 'KH-5 / IZIN IMPOR KARANTINA HEWAN'
  },
  {
    id: '944',
    name: 'KH-7 / IZIN IMPOR KARANTINA HEWAN'
  },
  {
    id: '945',
    name: 'KH-12 / IZIN IMPOR KARANTINA HEWAN'
  },
  {
    id: '946',
    name: 'KID-3 / IZIN IMPOR KARANTINA IKAN'
  },
  {
    id: '947',
    name: 'KID-15 / IZIN IMPOR KARANTINA IKAN'
  },
  {
    id: '948',
    name: 'NPIK'
  },
  {
    id: '949',
    name: 'PENGAKUAN SBG IMPORTIR PRODUSEN'
  },
  {
    id: '950',
    name: 'KID-4/IZIN KARANTINA IKAN'
  },
  {
    id: '951',
    name: 'HC (HEALTH CERTIFICATE)'
  },
  {
    id: '956',
    name: 'PENGAKUAN SBG IMPORTIR TERDAFTAR'
  },
  {
    id: '957',
    name: 'SNI/SPB/DEPDAG'
  },
  {
    id: '958',
    name: 'LAPORAN SURVEYOR / DEPDAG'
  },
  {
    id: '959',
    name: 'SURAT PERSETUJUAN IMPOR DEP.DAG'
  },
  {
    id: '960',
    name: '3D/PC dan/atau PFP'
  },
  {
    id: '961',
    name: 'Hasil Lab'
  },
  {
    id: '993',
    name: 'SURAT IJIN MENTERI PERTANIAN'
  }
]

const kodeTutupPu = [
  { id: '11', name: 'BC 1.1' },
  { id: '12', name: 'BC 1.2' },
  { id: '14', name: 'BC 1.4' }
]

const kodeCaraAngkut = [
  { id: '1', name: 'LAUT' },
  { id: '2', name: 'KERETA API' },
  { id: '3', name: 'DARAT' },
  { id: '4', name: 'UDARA' },
  { id: '5', name: 'POS' },
  { id: '6', name: 'MULTIMODA' },
  { id: '7', name: 'INSTALASI / PIPA' },
  { id: '8', name: 'PERAIRAN' },
  { id: '9', name: 'LAINNYA' }
]

const kodeJenisKemasan = [
  {
    id: '1A',
    name: 'Drum, steel'
  },
  {
    id: '1B',
    name: 'Drum, aluminium'
  },
  {
    id: '1D',
    name: 'Drum, plywood'
  },
  {
    id: '1F',
    name: 'Container, flexible'
  },
  {
    id: '1G',
    name: 'Drum, fibre'
  },
  {
    id: '1W',
    name: 'Drum, wooden'
  },
  {
    id: '2C',
    name: 'Barrel, wooden'
  },
  {
    id: '3A',
    name: 'Jerrican, steel'
  },
  {
    id: '3H',
    name: 'Jerrican, plastic'
  },
  {
    id: 43,
    name: 'Bag, super bulk'
  },
  {
    id: 44,
    name: 'Bag, polybag'
  },
  {
    id: '4A',
    name: 'Box, steel'
  },
  {
    id: '4B',
    name: 'Box, aluminium'
  },
  {
    id: '4C',
    name: 'Box, natural wood'
  },
  {
    id: '4D',
    name: 'Box, plywood'
  },
  {
    id: '4F',
    name: 'Box, reconstituted wood'
  },
  {
    id: '4G',
    name: 'Box, fibreboard'
  },
  {
    id: '4H',
    name: 'Box, plastic'
  },
  {
    id: '5H',
    name: 'Bag, woven plastic'
  },
  {
    id: '5L',
    name: 'Bag, textile'
  },
  {
    id: '5M',
    name: 'Bag, paper'
  },
  {
    id: '6H',
    name: 'Composite packaging, plastic receptacle'
  },
  {
    id: '6P',
    name: 'Composite packaging, glass receptacle'
  },
  {
    id: '7A',
    name: 'Case, car'
  },
  {
    id: '7B',
    name: 'Case, wooden'
  },
  {
    id: '8A',
    name: 'Pallet, wooden'
  },
  {
    id: '8B',
    name: 'Crate, wooden'
  },
  {
    id: '8C',
    name: 'Bundle, wooden'
  },
  {
    id: 'AA',
    name: 'Intermediate bulk container, rigid plastic'
  },
  {
    id: 'AB',
    name: 'Receptacle, fibre'
  },
  {
    id: 'AC',
    name: 'Receptacle, paper'
  },
  {
    id: 'AD',
    name: 'Receptacle, wooden'
  },
  {
    id: 'AE',
    name: 'Aerosol'
  },
  {
    id: 'AF',
    name: 'Pallet, modular, collars 80cms * 60cms'
  },
  {
    id: 'AG',
    name: 'Pallet, shrinkwrapped'
  },
  {
    id: 'AH',
    name: 'Pallet, 100cms * 110cms'
  },
  {
    id: 'AI',
    name: 'Clamshell'
  },
  {
    id: 'AJ',
    name: 'Cone'
  },
  {
    id: 'AL',
    name: 'Ball'
  },
  {
    id: 'AM',
    name: 'Ampoule, non protected'
  },
  {
    id: 'AP',
    name: 'Ampoule, protected'
  },
  {
    id: 'AT',
    name: 'Atomizer'
  },
  {
    id: 'AV',
    name: 'Capsule'
  },
  {
    id: 'B4',
    name: 'Belt'
  },
  {
    id: 'BA',
    name: 'Barrel'
  },
  {
    id: 'BB',
    name: 'Bobbin'
  },
  {
    id: 'BC',
    name: 'Bottlecrate, bottlerack'
  },
  {
    id: 'BD',
    name: 'Board'
  },
  {
    id: 'BE',
    name: 'Bundle'
  },
  {
    id: 'BF',
    name: 'Balloon, non-protected'
  },
  {
    id: 'BG',
    name: 'Bag'
  },
  {
    id: 'BH',
    name: 'Bunch'
  },
  {
    id: 'BI',
    name: 'Bin'
  },
  {
    id: 'BJ',
    name: 'Bucket'
  },
  {
    id: 'BK',
    name: 'Basket'
  },
  {
    id: 'BL',
    name: 'Bale, compressed'
  },
  {
    id: 'BM',
    name: 'Basin'
  },
  {
    id: 'BN',
    name: 'Bale, non -compressed'
  },
  {
    id: 'BO',
    name: 'Bottle, non-protected, cylindrical'
  },
  {
    id: 'BP',
    name: 'Balloon, protected'
  },
  {
    id: 'BQ',
    name: 'Bottle, protected cylindrical'
  },
  {
    id: 'BR',
    name: 'Bar'
  },
  {
    id: 'BS',
    name: 'Bottle, non-protected, bulbous'
  },
  {
    id: 'BT',
    name: 'Bolt'
  },
  {
    id: 'BU',
    name: 'Butt'
  },
  {
    id: 'BV',
    name: 'Bottle, protected bulbous'
  },
  {
    id: 'BW',
    name: 'Box, for liquids'
  },
  {
    id: 'BX',
    name: 'Box'
  },
  {
    id: 'BY',
    name: 'Board, in bundle/bunch/truss'
  },
  {
    id: 'BZ',
    name: 'Bars, in bundle/bunch/truss'
  },
  {
    id: 'CA',
    name: 'Can, rectangular'
  },
  {
    id: 'CB',
    name: 'Beer crate'
  },
  {
    id: 'CC',
    name: 'Churn'
  },
  {
    id: 'CD',
    name: 'Can, with handle and spout'
  },
  {
    id: 'CE',
    name: 'Creel'
  },
  {
    id: 'CF',
    name: 'Coffer'
  },
  {
    id: 'CG',
    name: 'Cage'
  },
  {
    id: 'CH',
    name: 'Chest'
  },
  {
    id: 'CI',
    name: 'Canister'
  },
  {
    id: 'CJ',
    name: 'Coffin'
  },
  {
    id: 'CK',
    name: 'Cask'
  },
  {
    id: 'CL',
    name: 'Coil'
  },
  {
    id: 'CM',
    name: 'Card'
  },
  {
    id: 'CN',
    name: 'Cont,not otherwise specfied as transport equipment'
  },
  {
    id: 'CO',
    name: 'Carboy, non-protected'
  },
  {
    id: 'CP',
    name: 'Carboy, protected'
  },
  {
    id: 'CQ',
    name: 'Cartridge'
  },
  {
    id: 'CR',
    name: 'Crate'
  },
  {
    id: 'CS',
    name: 'Case'
  },
  {
    id: 'CT',
    name: 'Carton'
  },
  {
    id: 'CU',
    name: 'Cup'
  },
  {
    id: 'CV',
    name: 'Cover'
  },
  {
    id: 'CW',
    name: 'Cage, roll'
  },
  {
    id: 'CX',
    name: 'Can, cylindical'
  },
  {
    id: 'CY',
    name: 'Cylinder'
  },
  {
    id: 'CZ',
    name: 'Canvas'
  },
  {
    id: 'DA',
    name: 'Crate, multiple layer, plastic'
  },
  {
    id: 'DB',
    name: 'Crate, multiple layer, wooden'
  },
  {
    id: 'DC',
    name: 'Crate, multiple layer, cardboard'
  },
  {
    id: 'DG',
    name: 'Cage, Commonwealth Handling Equipment Pool (CHEP)'
  },
  {
    id: 'DH',
    name: 'Box,Commnwealth Hndling Equipmnt Pool/CHEP,Eurobox'
  },
  {
    id: 'DI',
    name: 'Drum, iron'
  },
  {
    id: 'DJ',
    name: 'Demijohn, non-protected'
  },
  {
    id: 'DK',
    name: 'Crate, bulk, cardboard'
  },
  {
    id: 'DL',
    name: 'Crate, bulk, plastic'
  },
  {
    id: 'DM',
    name: 'Crate, bulk, wooden'
  },
  {
    id: 'DN',
    name: 'Dispenser'
  },
  {
    id: 'DP',
    name: 'Demijohn, protected'
  },
  {
    id: 'DR',
    name: 'Drum'
  },
  {
    id: 'DS',
    name: 'Tray, one layer no cover, plastic'
  },
  {
    id: 'DT',
    name: 'Tray, one layer no cover, wooden'
  },
  {
    id: 'DU',
    name: 'Tray, one layer no cover, polystyrene'
  },
  {
    id: 'DV',
    name: 'Tray, one layer no cover, cardboard'
  },
  {
    id: 'DW',
    name: 'Tray, two layers no cover, plastic tray'
  },
  {
    id: 'DX',
    name: 'Tray, two layers no cover, wooden'
  },
  {
    id: 'DY',
    name: 'Tray, two layers no cover, cardboard'
  },
  {
    id: 'EC',
    name: 'Bag, plastic'
  },
  {
    id: 'ED',
    name: 'Case, with pallet base'
  },
  {
    id: 'EE',
    name: 'Case, with pallet base, wooden'
  },
  {
    id: 'EF',
    name: 'Case, with pallet base, cardboard'
  },
  {
    id: 'EG',
    name: 'Case, with pallet base, plastic'
  },
  {
    id: 'EH',
    name: 'Case, with pallet base, metal'
  },
  {
    id: 'EI',
    name: 'Case, isothermic'
  },
  {
    id: 'EN',
    name: 'Envelope'
  },
  {
    id: 'FB',
    name: 'Flexibag'
  },
  {
    id: 'FC',
    name: 'Fruit crate'
  },
  {
    id: 'FD',
    name: 'Framed crate'
  },
  {
    id: 'FE',
    name: 'Flexitank'
  },
  {
    id: 'FI',
    name: 'Firkin'
  },
  {
    id: 'FL',
    name: 'Flask'
  },
  {
    id: 'FO',
    name: 'Footlocker'
  },
  {
    id: 'FP',
    name: 'Filmpack'
  },
  {
    id: 'FR',
    name: 'Frame'
  },
  {
    id: 'FT',
    name: 'Foodtainer'
  },
  {
    id: 'FW',
    name: 'Cart, flatbed'
  },
  {
    id: 'FX',
    name: 'Bag, flexible container'
  },
  {
    id: 'GB',
    name: 'Gas bottle'
  },
  {
    id: 'GI',
    name: 'Girder'
  },
  {
    id: 'GL',
    name: 'Container, gallon'
  },
  {
    id: 'GR',
    name: 'Receptacle, glass'
  },
  {
    id: 'GU',
    name: 'Tray, containing horizontally stacked flat items'
  },
  {
    id: 'GY',
    name: 'Bag, gunny'
  },
  {
    id: 'GZ',
    name: 'Girders, in bundle/bunch/truss'
  },
  {
    id: 'HA',
    name: 'Basket, with handle, plastic'
  },
  {
    id: 'HB',
    name: 'Basket, with handle, wooden'
  },
  {
    id: 'HC',
    name: 'Basket, with handle, cardboard'
  },
  {
    id: 'HG',
    name: 'Hogshead'
  },
  {
    id: 'HN',
    name: 'Hanger'
  },
  {
    id: 'HR',
    name: 'Hamper'
  },
  {
    id: 'HZ',
    name: 'bukan kaleng kaleng'
  },
  {
    id: 'IA',
    name: 'Package, display, wooden'
  },
  {
    id: 'IB',
    name: 'Package, display, cardboard'
  },
  {
    id: 'IC',
    name: 'Package, display, plastic'
  },
  {
    id: 'ID',
    name: 'Package, display, metal'
  },
  {
    id: 'IE',
    name: 'Package, show'
  },
  {
    id: 'IF',
    name: 'Package, flow'
  },
  {
    id: 'IG',
    name: 'Package, paper wrapped'
  },
  {
    id: 'IH',
    name: 'Drum, plastic'
  },
  {
    id: 'IK',
    name: 'Package, cardboard, with bottle grip-holes'
  },
  {
    id: 'IL',
    name: 'Tray, rigid, lidded stackable (CEN TS 14482:2002)'
  },
  {
    id: 'IN',
    name: 'Ingot'
  },
  {
    id: 'IZ',
    name: 'ingots, in bundle/bunch/truss'
  },
  {
    id: 'JB',
    name: 'Bag, jumbo'
  },
  {
    id: 'JC',
    name: 'Jerrican, rectangular'
  },
  {
    id: 'JG',
    name: 'Jug'
  },
  {
    id: 'JR',
    name: 'Jar'
  },
  {
    id: 'JT',
    name: 'Jutebag'
  },
  {
    id: 'JY',
    name: 'Jerrican, cylindrical'
  },
  {
    id: 'KG',
    name: 'Keg'
  },
  {
    id: 'KI',
    name: 'Kit'
  },
  {
    id: 'KR',
    name: 'karung'
  },
  {
    id: 'LE',
    name: 'Luggage'
  },
  {
    id: 'LG',
    name: 'Log'
  },
  {
    id: 'LT',
    name: 'Lot'
  },
  {
    id: 'LU',
    name: 'Lug'
  },
  {
    id: 'LV',
    name: 'Liftvan'
  },
  {
    id: 'LZ',
    name: 'Logs, in bundle/bunch/truss'
  },
  {
    id: 'MA',
    name: 'Crate, metal'
  },
  {
    id: 'MB',
    name: 'Multiply bag'
  },
  {
    id: 'MC',
    name: 'milk crate'
  },
  {
    id: 'ME',
    name: 'Container, metal'
  },
  {
    id: 'MR',
    name: 'Receptacle, metal'
  },
  {
    id: 'MS',
    name: 'Multiwall sack'
  },
  {
    id: 'MT',
    name: 'Mat'
  },
  {
    id: 'MW',
    name: 'Receptacle, plastic wrapped'
  },
  {
    id: 'MX',
    name: 'Macth box'
  },
  {
    id: 'NA',
    name: 'Not available'
  },
  {
    id: 'NE',
    name: 'Unpacked or unpackaged'
  },
  {
    id: 'NF',
    name: 'Unpacked or unpackaged, single unit'
  },
  {
    id: 'NG',
    name: 'Unpacked or unpackaged, multiple units'
  },
  {
    id: 'NS',
    name: 'Nest'
  },
  {
    id: 'NT',
    name: 'Net'
  },
  {
    id: 'NU',
    name: 'Net, tube, plastic'
  },
  {
    id: 'NV',
    name: 'Net, tube, textile'
  },
  {
    id: 'OA',
    name: 'Pallet, CHEP 40 cm x 60 cm'
  },
  {
    id: 'OB',
    name: 'Pallet, CHEP 80 cm x 120 cm'
  },
  {
    id: 'OC',
    name: 'Pallet, CHEP 100 cm x 120 cm'
  },
  {
    id: 'OD',
    name: 'Pallet, AS 4068-1993'
  },
  {
    id: 'OE',
    name: 'Pallet, ISO T11'
  },
  {
    id: 'OF',
    name: 'Platform, unspecified weight or dimension'
  },
  {
    id: 'OK',
    name: 'Block'
  },
  {
    id: 'OT',
    name: 'Octabin'
  },
  {
    id: 'OU',
    name: 'Container, outer'
  },
  {
    id: 'P2',
    name: 'Pan'
  },
  {
    id: 'PA',
    name: 'Packet'
  },
  {
    id: 'PB',
    name: 'Pallet, box Combined open-ended box and pallet'
  },
  {
    id: 'PC',
    name: 'Parcel'
  },
  {
    id: 'PD',
    name: 'Pallet, modular, collars 80cms * 100cms'
  },
  {
    id: 'PE',
    name: 'Pallet, modular, collars 80cms * 120cms'
  },
  {
    id: 'PF',
    name: 'Pen'
  },
  {
    id: 'PG',
    name: 'Plate'
  },
  {
    id: 'PH',
    name: 'Pitcher'
  },
  {
    id: 'PI',
    name: 'Pipe'
  },
  {
    id: 'PJ',
    name: 'Punnet'
  },
  {
    id: 'PK',
    name: 'Package'
  },
  {
    id: 'PL',
    name: 'Pail'
  },
  {
    id: 'PN',
    name: 'Plank'
  },
  {
    id: 'PO',
    name: 'Pouch'
  },
  {
    id: 'PP',
    name: 'Piece'
  },
  {
    id: 'PR',
    name: 'Receptacle, plastic'
  },
  {
    id: 'PT',
    name: 'Pot'
  },
  {
    id: 'PU',
    name: 'Tray'
  },
  {
    id: 'PV',
    name: 'Pipes, in bundle/bunch/truss'
  },
  {
    id: 'PX',
    name: 'Pallet'
  },
  {
    id: 'PY',
    name: 'Plates, in bundle/bunch/truss'
  },
  {
    id: 'PZ',
    name: 'Pipes, in bundle/bunch/truss'
  },
  {
    id: 'QA',
    name: 'Drum, steel, non-removable head'
  },
  {
    id: 'QB',
    name: 'Drum, steel, removable head'
  },
  {
    id: 'QC',
    name: 'Drum, aluminium, non-removable head'
  },
  {
    id: 'QD',
    name: 'Drum, aluminium, removable head'
  },
  {
    id: 'QF',
    name: 'Drum, plastic, non-removable head'
  },
  {
    id: 'QG',
    name: 'Drum, plastic, removable head'
  },
  {
    id: 'QH',
    name: 'Barrel, wooden, bung type'
  },
  {
    id: 'QJ',
    name: 'Barrel, wooden, removable head'
  },
  {
    id: 'QK',
    name: 'Jerrican, steel, non-removable head'
  },
  {
    id: 'QL',
    name: 'Jerrican, steel, removable head'
  },
  {
    id: 'QM',
    name: 'Jerrican, plastic, non-removable head'
  },
  {
    id: 'QN',
    name: 'Jerrican, plastic, removable head'
  },
  {
    id: 'QP',
    name: 'Box, wooden, natural wood, ordinary'
  },
  {
    id: 'QQ',
    name: 'Box, wooden, natural wood, with sift proof walls'
  },
  {
    id: 'QR',
    name: 'Box, plastic, expanded'
  },
  {
    id: 'QS',
    name: 'Box, plastic, solid'
  },
  {
    id: 'RD',
    name: 'Rod'
  },
  {
    id: 'RG',
    name: 'Ring'
  },
  {
    id: 'RJ',
    name: 'Rack, clothing hanger'
  },
  {
    id: 'RK',
    name: 'Rack'
  },
  {
    id: 'RL',
    name: 'Reel'
  },
  {
    id: 'RO',
    name: 'Roll'
  },
  {
    id: 'RT',
    name: 'Rednet'
  },
  {
    id: 'RZ',
    name: 'Rods, in bundle/ bunch/truss'
  },
  {
    id: 'SA',
    name: 'Sack'
  },
  {
    id: 'SB',
    name: 'Slab'
  },
  {
    id: 'SC',
    name: 'Shallow crate'
  },
  {
    id: 'SD',
    name: 'Spindle'
  },
  {
    id: 'SE',
    name: 'Sea-chest'
  },
  {
    id: 'SH',
    name: 'Sachet'
  },
  {
    id: 'SI',
    name: 'Skid'
  },
  {
    id: 'SK',
    name: 'Skeleton case'
  },
  {
    id: 'SL',
    name: 'Slipsheet'
  },
  {
    id: 'SM',
    name: 'Sheetmetal'
  },
  {
    id: 'SO',
    name: 'Spool'
  },
  {
    id: 'SP',
    name: 'Sheet, plastic wrapping'
  },
  {
    id: 'SS',
    name: 'Case, steel'
  },
  {
    id: 'ST',
    name: 'Sheet'
  },
  {
    id: 'SU',
    name: 'Suitcase'
  },
  {
    id: 'SV',
    name: 'Envelope, steel'
  },
  {
    id: 'SW',
    name: 'Shrinkwrapped'
  },
  {
    id: 'SX',
    name: 'Set'
  },
  {
    id: 'SY',
    name: 'Sleeve'
  },
  {
    id: 'SZ',
    name: 'Sheets, in bundle/bunch/truss'
  },
  {
    id: 'T1',
    name: 'Tablet'
  },
  {
    id: 'TB',
    name: 'Tub'
  },
  {
    id: 'TC',
    name: 'Tea-chest'
  },
  {
    id: 'TD',
    name: 'Collapsible tube'
  },
  {
    id: 'TE',
    name: 'Tyre'
  },
  {
    id: 'TG',
    name: 'Tank container, generic'
  },
  {
    id: 'TI',
    name: 'Tierce'
  },
  {
    id: 'TK',
    name: 'Tank, rectangular'
  },
  {
    id: 'TL',
    name: 'Tub, with lid'
  },
  {
    id: 'TN',
    name: 'Tin'
  },
  {
    id: 'TO',
    name: 'Tun'
  },
  {
    id: 'TP',
    name: 'Tray'
  },
  {
    id: 'TR',
    name: 'Trunk'
  },
  {
    id: 'TS',
    name: 'Truss'
  },
  {
    id: 'TT',
    name: 'Bag, tote'
  },
  {
    id: 'TU',
    name: 'Tube'
  },
  {
    id: 'TV',
    name: 'Tube, with nozzle'
  },
  {
    id: 'TW',
    name: 'Pallet, triwall'
  },
  {
    id: 'TY',
    name: 'Tank, cylindrical'
  },
  {
    id: 'TZ',
    name: 'Tubes, in bundle/bunch/truss'
  },
  {
    id: 'UC',
    name: 'Uncaged'
  },
  {
    id: 'UN',
    name: 'Unpackage'
  },
  {
    id: 'VA',
    name: 'Vat'
  },
  {
    id: 'VG',
    name: 'Bulk, gas ( at 1031 mbar and 15C )'
  },
  {
    id: 'VI',
    name: 'Vial'
  },
  {
    id: 'VK',
    name: 'Vanpack'
  },
  {
    id: 'VL',
    name: 'Bulk, liquid'
  },
  {
    id: 'VN',
    name: 'Vehicle'
  },
  {
    id: 'VO',
    name: 'Bulk, solid, large particles ("nodules")'
  },
  {
    id: 'VP',
    name: 'Vacuumpacked'
  },
  {
    id: 'VQ',
    name: 'Bulk,liquefied gas (at abnorml temprture/pressure)'
  },
  {
    id: 'VR',
    name: 'Bulk, solid, granular particles ("grains")'
  },
  {
    id: 'VS',
    name: 'Bulk, scrap metal'
  },
  {
    id: 'VY',
    name: 'Bulk, solid, fine particles ("powders")'
  },
  {
    id: 'WA',
    name: 'Intermediate bulk container'
  },
  {
    id: 'WB',
    name: 'Wickerbottle'
  },
  {
    id: 'WC',
    name: 'Intermediate bulk container, steel'
  },
  {
    id: 'WD',
    name: 'Intermediate bulk container, aluminium'
  },
  {
    id: 'WF',
    name: 'Intermediate bulk container, metal'
  },
  {
    id: 'WG',
    name: 'Intermediate bulk cont,steel,pressurised >10 kpa'
  },
  {
    id: 'WH',
    name: 'Intermedt bulk cont,aluminium,pressurised >10 kpa'
  },
  {
    id: 'WJ',
    name: 'Intermediate bulk container,metal, pressure 10 kpa'
  },
  {
    id: 'WK',
    name: 'Intermediate bulk container, steel, liquid'
  },
  {
    id: 'WL',
    name: 'Intermediate bulk container, aluminium, liquid'
  },
  {
    id: 'WM',
    name: 'Intermediate bulk container, metal, liquid'
  },
  {
    id: 'WN',
    name: 'Intermd bulk cont,woven plastic,without coat/liner'
  },
  {
    id: 'WP',
    name: 'Intermediate bulk container, woven plastic, coated'
  },
  {
    id: 'WQ',
    name: 'Intermediate bulk cont,woven plastic,with liner'
  },
  {
    id: 'WR',
    name: 'Intermedt bulk cont,woven plastic,coated and liner'
  },
  {
    id: 'WS',
    name: 'Intermediate bulk container, plastic film'
  },
  {
    id: 'WT',
    name: 'Intermediate bulk cont,textile with out coat/liner'
  },
  {
    id: 'WU',
    name: 'Intermdte bulk cont,natural wood,with inner liner'
  },
  {
    id: 'WV',
    name: 'Intermediate bulk container, textile, coated'
  },
  {
    id: 'WW',
    name: 'Intermediate bulk container, textile, with liner'
  },
  {
    id: 'WX',
    name: 'Intermediate bulk cont,textile,coated and liner'
  },
  {
    id: 'WY',
    name: 'Intermediate bulk cont,plywood,with inner liner'
  },
  {
    id: 'WZ',
    name: 'Intermd bulk cont,reconstttd wood,with inner liner'
  },
  {
    id: 'XA',
    name: 'Bag, woven plastic, without inner coat/liner'
  },
  {
    id: 'XB',
    name: 'Bag, woven plastic, sift proof'
  },
  {
    id: 'XC',
    name: 'Bag, woven plastic, water resistant'
  },
  {
    id: 'XD',
    name: 'Bag, plastics film'
  },
  {
    id: 'XF',
    name: 'Bag, textile, without inner coat/liner'
  },
  {
    id: 'XG',
    name: 'Bag, textile, sift proof'
  },
  {
    id: 'XH',
    name: 'Bag, textile, water resistant'
  },
  {
    id: 'XJ',
    name: 'Bag, paper, multi-wall'
  },
  {
    id: 'XK',
    name: 'Bag, paper, multi-wall, water resistant'
  },
  {
    id: 'XN',
    name: 'test'
  },
  {
    id: 'YA',
    name: 'Compsite packging,plastic receptacle in steel drum'
  },
  {
    id: 'YB',
    name: 'Compste packgng,plastc recptcle in steel crate box'
  },
  {
    id: 'YC',
    name: 'Compste packgng,plastic recptcle in aluminium drum'
  },
  {
    id: 'YD',
    name: 'Compste packgng,plastic recptcle in alumnium crate'
  },
  {
    id: 'YF',
    name: 'Compsite packging,plastic receptacle in wooden box'
  },
  {
    id: 'YG',
    name: 'Compste packgng,plastic receptacle in plywood drum'
  },
  {
    id: 'YH',
    name: 'Compste packging,plastic receptacle in plywood box'
  },
  {
    id: 'YJ',
    name: 'Compsite packging,plastic receptacle in fibre drum'
  },
  {
    id: 'YK',
    name: 'Compste packgng,plastic recptcle in fibreboard box'
  },
  {
    id: 'YL',
    name: 'Compste packgng,plastic receptacle in plastic drum'
  },
  {
    id: 'YM',
    name: 'Compsite packgng,plstc recptcle in solid plstc box'
  },
  {
    id: 'YN',
    name: 'Composite packaging,glass receptacle in steel drum'
  },
  {
    id: 'YP',
    name: 'Compste packgng,glass recptacle in steel crate box'
  },
  {
    id: 'YQ',
    name: 'Compste packgng,glass receptacle in aluminium drum'
  },
  {
    id: 'YR',
    name: 'Compste packgng,glass recptacle in aluminium crate'
  },
  {
    id: 'YS',
    name: 'Composite packaging,glass receptacle in wooden box'
  },
  {
    id: 'YT',
    name: 'Compsite packging,glass receptacle in plywood drum'
  },
  {
    id: 'YV',
    name: 'Compste packgng,glass recptcle in wickrwork hamper'
  },
  {
    id: 'YW',
    name: 'Composite packaging,glass receptacle in fibre drum'
  },
  {
    id: 'YX',
    name: 'Compste packgng,glass receptacle in fibreboard box'
  },
  {
    id: 'YY',
    name: 'Compste pckgng,glss recptcl in expndbl plastc pack'
  },
  {
    id: 'YZ',
    name: 'Compsite packgng,glass recptcle in solid plstc pck'
  },
  {
    id: 'ZA',
    name: 'Intermediate bulk container, paper, multi-wall'
  },
  {
    id: 'ZB',
    name: 'Bag, large'
  },
  {
    id: 'ZC',
    name: 'Intermd bulk cont,paper,multi-wall,water resistant'
  },
  {
    id: 'ZD',
    name: 'Intermd bulk cont,rgd plstc,w/strctrl equipm,solid'
  },
  {
    id: 'ZF',
    name: 'Intermd bulk cont,rgid plstc,freestandng,solds'
  },
  {
    id: 'ZG',
    name: 'Intermdbulk cnt,rgd plstc,w/strctrl equipm,pressrd'
  },
  {
    id: 'ZH',
    name: 'Intermd bulk cont,rgd plstc,freestnd,pressurised'
  },
  {
    id: 'ZJ',
    name: 'Intermd bulk cont,rgd plstc,w/strctrl equipm,lquid'
  },
  {
    id: 'ZK',
    name: 'Intermd bulk cont,rgid plstc,freestanding,liquids'
  },
  {
    id: 'ZL',
    name: 'Intermd bulk cont,composite,rigid plastic,solids'
  },
  {
    id: 'ZM',
    name: 'Intermd bulk cont,compste,flexbl plastic, solids'
  },
  {
    id: 'ZN',
    name: 'Intermd bulk cont,compsit,rgid plstc,pressurised'
  },
  {
    id: 'ZP',
    name: 'Intermd bulk cont,compsit,flexbl plstc,pressurised'
  },
  {
    id: 'ZQ',
    name: 'Intermd bulk cont,composite,rigid plastic,liquids'
  },
  {
    id: 'ZR',
    name: 'Intermd bulk cont,compsite,flexible plastc,liquids'
  },
  {
    id: 'ZS',
    name: 'Intermediate bulk container, composite'
  },
  {
    id: 'ZT',
    name: 'Intermediate bulk container, fibreboard'
  },
  {
    id: 'ZU',
    name: 'Intermediate bulk container, flexible'
  },
  {
    id: 'ZV',
    name: 'Intermediate bulk container,metal,other than steel'
  },
  {
    id: 'ZW',
    name: 'Intermediate bulk container, natural wood'
  },
  {
    id: 'ZX',
    name: 'Intermediate bulk container, plywood'
  },
  {
    id: 'ZY',
    name: 'Intermediate bulk container, reconstituted wood'
  },
  {
    id: 'ZZ',
    name: 'Mutually defined'
  }
]

const kodeValuta: any = [
  {
    id: 'ADP',
    name: 'Andorran Peseta'
  },
  {
    id: 'AED',
    name: 'UAE Dirham'
  },
  {
    id: 'AFA',
    name: 'Afghani'
  },
  {
    id: 'AFN',
    name: 'Afghani'
  },
  {
    id: 'ALL',
    name: 'Lek'
  },
  {
    id: 'AMD',
    name: 'Armenian Dram'
  },
  {
    id: 'ANG',
    name: 'Netherlands Antillian Guilder'
  },
  {
    id: 'AOA',
    name: 'Kwanza'
  },
  {
    id: 'AON',
    name: 'New Kwanza'
  },
  {
    id: 'ARS',
    name: 'Argentina Peso'
  },
  {
    id: 'ATS',
    name: 'Schilling'
  },
  {
    id: 'AUD',
    name: 'Australian Dollar'
  },
  {
    id: 'AWG',
    name: 'Aruban Guilder'
  },
  {
    id: 'AZM',
    name: 'Azerbaijanian Manat'
  },
  {
    id: 'AZN',
    name: 'Azerbaijanian Manat'
  },
  {
    id: 'BAM',
    name: 'Convertible Marks'
  },
  {
    id: 'BBD',
    name: 'Barbados Dollar'
  },
  {
    id: 'BDT',
    name: 'Taka'
  },
  {
    id: 'BEF',
    name: 'Belgian Franc'
  },
  {
    id: 'BGL',
    name: 'Lev'
  },
  {
    id: 'BGN',
    name: 'Bulgarian Lev'
  },
  {
    id: 'BHD',
    name: 'Bahraini Dinar'
  },
  {
    id: 'BIF',
    name: 'Burundi Franc'
  },
  {
    id: 'BMD',
    name: 'Bermudian Dollar'
  },
  {
    id: 'BND',
    name: 'Brunei Dollar'
  },
  {
    id: 'BOB',
    name: 'Boliaiano'
  },
  {
    id: 'BOV',
    name: 'Mvdol'
  },
  {
    id: 'BRL',
    name: 'Brazilian Real'
  },
  {
    id: 'BSD',
    name: 'Bahamian Dollar'
  },
  {
    id: 'BTN',
    name: 'Ngultrum'
  },
  {
    id: 'BWP',
    name: 'Pula'
  },
  {
    id: 'BYB',
    name: 'Belarussian Ruble'
  },
  {
    id: 'BYR',
    name: 'Belarussian Ruble'
  },
  {
    id: 'BZD',
    name: 'Belize Dollar'
  },
  {
    id: 'CAD',
    name: 'Canadian Dollar'
  },
  {
    id: 'CDF',
    name: 'Congolese Franc'
  },
  {
    id: 'CHE',
    name: 'WIR Euro'
  },
  {
    id: 'CHF',
    name: 'Swiss Franc'
  },
  {
    id: 'CHW',
    name: 'WIR Franc'
  },
  {
    id: 'CLF',
    name: 'Unidades de fomento'
  },
  {
    id: 'CLP',
    name: 'Chilean Peso'
  },
  {
    id: 'CNY',
    name: 'Yuan Renminbi'
  },
  {
    id: 'COP',
    name: 'Colombian Peso'
  },
  {
    id: 'COU',
    name: 'Unidad de Valor Real'
  },
  {
    id: 'CRC',
    name: 'Costa Rican Colon'
  },
  {
    id: 'CUC',
    name: 'Peso Convertible'
  },
  {
    id: 'CUP',
    name: 'Cuban Peso'
  },
  {
    id: 'CVE',
    name: 'Cape Verde Escudo'
  },
  {
    id: 'CYP',
    name: 'Cyprus Pound'
  },
  {
    id: 'CZK',
    name: 'Czech Koruna'
  },
  {
    id: 'DEM',
    name: 'Deustche Mark'
  },
  {
    id: 'DJF',
    name: 'Djibouti Franc'
  },
  {
    id: 'DKK',
    name: 'Danish Krone'
  },
  {
    id: 'DOP',
    name: 'Domincan Peso'
  },
  {
    id: 'DZD',
    name: 'Algerian Dinar'
  },
  {
    id: 'ECS',
    name: 'Sucre'
  },
  {
    id: 'EEK',
    name: 'Kroon'
  },
  {
    id: 'EGP',
    name: 'Egyptian Pound'
  },
  {
    id: 'ERN',
    name: 'Nakfa'
  },
  {
    id: 'ESP',
    name: 'Spainish peseta'
  },
  {
    id: 'ETB',
    name: 'Ethiopian Birr'
  },
  {
    id: 'FIM',
    name: 'Markka'
  },
  {
    id: 'FJD',
    name: 'Fiji Dollar'
  },
  {
    id: 'FKP',
    name: 'Falkland Islands Pound'
  },
  {
    id: 'FRF',
    name: 'Franch Franc'
  },
  {
    id: 'GBP',
    name: 'Pound Sterling'
  },
  {
    id: 'GEK',
    name: 'Georgian Coupon'
  },
  {
    id: 'GEL',
    name: 'Lari'
  },
  {
    id: 'GHC',
    name: 'Cedi'
  },
  {
    id: 'GHS',
    name: 'Cedi'
  },
  {
    id: 'GIP',
    name: 'Gibraltar Pound'
  },
  {
    id: 'GMD',
    name: 'Dalasi'
  },
  {
    id: 'GNF',
    name: 'Guinea Franc'
  },
  {
    id: 'GRD',
    name: 'Drachma'
  },
  {
    id: 'GTQ',
    name: 'Quetzal'
  },
  {
    id: 'GWP',
    name: 'Guinea-Bissau Peso'
  },
  {
    id: 'GYD',
    name: 'Guyana Dollar'
  },
  {
    id: 'HKD',
    name: 'Hong Kong Dollar'
  },
  {
    id: 'HNL',
    name: 'Lempira'
  },
  {
    id: 'HRD',
    name: 'Croatian Dinar'
  },
  {
    id: 'HRK',
    name: 'Kuna'
  },
  {
    id: 'HTG',
    name: 'Gourde'
  },
  {
    id: 'HUF',
    name: 'Forint'
  },
  {
    id: 'IDR',
    name: 'Rupiah'
  },
  {
    id: 'IEP',
    name: 'Irish Pound'
  },
  {
    id: 'ILS',
    name: 'Shekel'
  },
  {
    id: 'INR',
    name: 'Indian Rupee'
  },
  {
    id: 'IQD',
    name: 'Iraqi Dinar'
  },
  {
    id: 'IRR',
    name: 'Iranian Rial'
  },
  {
    id: 'ISK',
    name: 'Iceland Krona'
  },
  {
    id: 'ITL',
    name: 'Italian Lira'
  },
  {
    id: 'JMD',
    name: 'Jamaican Dollar'
  },
  {
    id: 'JOD',
    name: 'Jordanian Dinar'
  },
  {
    id: 'JPY',
    name: 'Yen'
  },
  {
    id: 'KES',
    name: 'Kenyan Shilling'
  },
  {
    id: 'KGS',
    name: 'Som'
  },
  {
    id: 'KHR',
    name: 'Riel'
  },
  {
    id: 'KMF',
    name: 'Comoro Franc'
  },
  {
    id: 'KPW',
    name: 'North Korean Won'
  },
  {
    id: 'KRW',
    name: 'Won'
  },
  {
    id: 'KWD',
    name: 'Kuwauti Dinar'
  },
  {
    id: 'KYD',
    name: 'Cayman Islands Dollar'
  },
  {
    id: 'KZT',
    name: 'Tenge'
  },
  {
    id: 'LAK',
    name: 'Kip'
  },
  {
    id: 'LBP',
    name: 'Lebanese Pound'
  },
  {
    id: 'LKR',
    name: 'Sri Langka Rupee'
  },
  {
    id: 'LRD',
    name: 'Liberian Dollar'
  },
  {
    id: 'LSL',
    name: 'Loli'
  },
  {
    id: 'LTL',
    name: 'Lithuanian Litas'
  },
  {
    id: 'LUF',
    name: 'Luxembourg Franc'
  },
  {
    id: 'LVL',
    name: 'Latvian Lats#'
  },
  {
    id: 'LVR',
    name: 'Latvian Ruble'
  },
  {
    id: 'LYD',
    name: 'Libyan Dinar'
  },
  {
    id: 'MAD',
    name: 'Moroccoan Dirham'
  },
  {
    id: 'MDL',
    name: 'Moldovan Leu'
  },
  {
    id: 'MGA',
    name: 'Malagasy Ariary'
  },
  {
    id: 'MGF',
    name: 'Malagasy Franc'
  },
  {
    id: 'MKD',
    name: 'Denar'
  },
  {
    id: 'MMK',
    name: 'Kyat'
  },
  {
    id: 'MNT',
    name: 'Tugrik'
  },
  {
    id: 'MOP',
    name: 'Pataca'
  },
  {
    id: 'MRO',
    name: 'Ouguiya'
  },
  {
    id: 'MTL',
    name: 'Mallese Lira'
  },
  {
    id: 'MUR',
    name: 'Mauritius Pupee'
  },
  {
    id: 'MVR',
    name: 'Rufiyaa'
  },
  {
    id: 'MWK',
    name: 'Kwacha'
  },
  {
    id: 'MXN',
    name: 'Mexican Nuevo Peso'
  },
  {
    id: 'MXV',
    name: 'Mexican Unidad de Inversion (UDI)'
  },
  {
    id: 'MYR',
    name: 'Malaysian Ringgit'
  },
  {
    id: 'MZM',
    name: 'Metical'
  },
  {
    id: 'MZN',
    name: 'Metical'
  },
  {
    id: 'NAD',
    name: 'Namibia Dollar'
  },
  {
    id: 'NGN',
    name: 'Naira'
  },
  {
    id: 'NIO',
    name: 'Cordoba Oro'
  },
  {
    id: 'NLG',
    name: 'Netherlands Guilder'
  },
  {
    id: 'NOK',
    name: 'Norwegian Krone'
  },
  {
    id: 'NPR',
    name: 'Nepalese Rupee'
  },
  {
    id: 'NZD',
    name: 'New Zealand Dollar'
  },
  {
    id: 'OMR',
    name: 'Rial Omani'
  },
  {
    id: 'PAB',
    name: 'Balboa/US Dollar'
  },
  {
    id: 'PEN',
    name: 'Nuevo Sol'
  },
  {
    id: 'PGK',
    name: 'Kina'
  },
  {
    id: 'PHP',
    name: 'Philippines Peso'
  },
  {
    id: 'PKR',
    name: 'Pakistan Rupee'
  },
  {
    id: 'PLN',
    name: 'Zloty'
  },
  {
    id: 'PLZ',
    name: 'Zloty'
  },
  {
    id: 'PTE',
    name: 'Portuguese Escudo'
  },
  {
    id: 'PYG',
    name: 'Guarani'
  },
  {
    id: 'QAR',
    name: 'Qatari Rial'
  },
  {
    id: 'ROL',
    name: 'Leu'
  },
  {
    id: 'RON',
    name: 'New Leu'
  },
  {
    id: 'RSD',
    name: 'Serbian Dinar'
  },
  {
    id: 'RUB',
    name: 'Russian Ruble'
  },
  {
    id: 'RUR',
    name: 'Russian Ruble'
  },
  {
    id: 'RWF',
    name: 'Rwanda Franc'
  },
  {
    id: 'SAR',
    name: 'Saudi Riyal'
  },
  {
    id: 'SBD',
    name: 'Solomon Islands Dollar'
  },
  {
    id: 'SCR',
    name: 'Seychelles Rupee'
  },
  {
    id: 'SDD',
    name: 'Sudanase Dinar'
  },
  {
    id: 'SDG',
    name: 'Sudanese Pound'
  },
  {
    id: 'SDP',
    name: 'Sudanese Pound'
  },
  {
    id: 'SEK',
    name: 'Swedish Krone'
  },
  {
    id: 'SGD',
    name: 'Singapore Dollar'
  },
  {
    id: 'SHP',
    name: 'St. Helena Pound'
  },
  {
    id: 'SIT',
    name: 'Tolar'
  },
  {
    id: 'SKK',
    name: 'Slovak Koruna'
  },
  {
    id: 'SLL',
    name: 'Leone'
  },
  {
    id: 'SOS',
    name: 'Somalia shilling'
  },
  {
    id: 'SRD',
    name: 'Surinam Dollar'
  },
  {
    id: 'SRG',
    name: 'Surinam Guilder'
  },
  {
    id: 'STD',
    name: 'Dobra'
  },
  {
    id: 'SVC',
    name: 'El Salvador Colon'
  },
  {
    id: 'SYP',
    name: 'Syrian Pound'
  },
  {
    id: 'SZL',
    name: 'Lilangeni'
  },
  {
    id: 'THB',
    name: 'Baht'
  },
  {
    id: 'TJS',
    name: 'Somoni'
  },
  {
    id: 'TMM',
    name: 'Manat'
  },
  {
    id: 'TMT',
    name: 'Manat'
  },
  {
    id: 'TND',
    name: 'Tunisian Dinar'
  },
  {
    id: 'TOP',
    name: "Pa'anga"
  },
  {
    id: 'TRL',
    name: 'Turkish Lira'
  },
  {
    id: 'TRY',
    name: 'Turkish Lira'
  },
  {
    id: 'TTD',
    name: 'Trinidad and Tobago Dollar'
  },
  {
    id: 'TWD',
    name: 'New Taiwan Dollar'
  },
  {
    id: 'TZS',
    name: 'Tanzania Shilling'
  },
  {
    id: 'UAH',
    name: 'Hryvnia'
  },
  {
    id: 'UAK',
    name: 'Karbovanet'
  },
  {
    id: 'UGX',
    name: 'Uganda Shilling'
  },
  {
    id: 'USD',
    name: 'US Dollar'
  },
  {
    id: 'UYI',
    name: 'Uruguay Peso en Unidades Indexadas'
  },
  {
    id: 'UYU',
    name: 'Peso Uruguayo'
  },
  {
    id: 'UZS',
    name: 'Ubekistan Sum'
  },
  {
    id: 'VEB',
    name: 'Bolivar'
  },
  {
    id: 'VEF',
    name: 'Bolivar Fuerte'
  },
  {
    id: 'VND',
    name: 'Dong'
  },
  {
    id: 'VUV',
    name: 'Vatu'
  },
  {
    id: 'WST',
    name: 'Tala'
  },
  {
    id: 'YER',
    name: 'Yemeni Rial'
  },
  {
    id: 'YUN',
    name: 'New Yugosslavian'
  },
  {
    id: 'ZAL',
    name: 'Financial Rand'
  },
  {
    id: 'ZAR',
    name: 'Rand'
  },
  {
    id: 'ZMK',
    name: 'Kwacha'
  },
  {
    id: 'ZWD',
    name: 'Zimbabwe Dollar'
  },
  {
    id: 'ZWL',
    name: 'Zimbabwe Dollar'
  }
]

const kodeJenisNilai: any = [
  {
    id: 'IMB',
    name: 'Transaksi Perdagangan Dengan Imbal Dagang'
  },
  {
    id: 'IOA',
    name: 'Pembayaran Dilakukan Dengan Interoffice Account'
  },
  {
    id: 'KMD',
    name: 'Pembayaran Kemudian'
  },
  {
    id: 'KON',
    name: 'Pembayaran Dilakukan Dengan Konsinyasi'
  },
  {
    id: 'LAI',
    name: 'Transaksi Perdagangan Atau Cara Pembayaran Lainnya'
  },
  {
    id: 'PMK',
    name: 'Pembayaran Dilakukan Dimuka'
  },
  {
    id: 'RLC',
    name: 'Pembayaran Dengan Red Clause Letter Of Credit'
  },
  {
    id: 'SLC',
    name: 'Pembayaran Dengan Sight Letter Of Credit'
  },
  {
    id: 'ULC',
    name: 'Pembayaran Dengan Usance Letter Of Credit'
  },
  {
    id: 'WSI',
    name: 'Pembayaran Dilakukan Dengan Wesel Inkaso'
  }
]

const kodeIncoterm: any = [
  {
    id: 'CFR',
    name: 'Cost and Freight'
  },
  {
    id: 'CIF',
    name: 'Cost, Insurance and Freight'
  },
  {
    id: 'CIP',
    name: 'Carriage and Insurance Paid to'
  },
  {
    id: 'CPT',
    name: 'Carriage Paid To'
  },
  {
    id: 'DAF',
    name: 'Delivered At Frontier'
  },
  {
    id: 'DAP',
    name: 'Delivered At Place'
  },
  {
    id: 'DAT',
    name: 'Delivered At Terminal'
  },
  {
    id: 'DDP',
    name: 'Delivered Duty Paid'
  },
  {
    id: 'DDU',
    name: 'Delivered Duty Unpaid'
  },
  {
    id: 'DEQ',
    name: 'Delivered Ex Quay'
  },
  {
    id: 'DES',
    name: 'Delivered Ex Ship'
  },
  {
    id: 'EXW',
    name: 'Ex Works'
  },
  {
    id: 'FAS',
    name: 'Free Alongside Ship'
  },
  {
    id: 'FCA',
    name: 'Free Carrier'
  },
  {
    id: 'FOB',
    name: 'Free on Board'
  },
  {
    id: 'LAN',
    name: 'LAINNYA'
  }
]

const kodeAsuransi: any = [
  {
    id: 'LN',
    name: 'Luar Negeri'
  },
  {
    id: 'DN',
    name: 'Dalam Negeri'
  }
]

const kodeFasilitas: any = [
  {
    id: '1',
    name: 'PMA'
  },
  {
    id: '2',
    name: 'PMDN'
  },
  {
    id: '3',
    name: 'KITE/Kemudahan Impor Tujuan Ekspor - KITE PEMBEBASAN'
  },
  {
    id: '4',
    name: 'Insentif Otomotif'
  },
  {
    id: '5',
    name: 'PTNI'
  },
  {
    id: '6',
    name: 'ATIGA'
  },
  {
    id: '7',
    name: 'Keperluan Pertahanan dan Keamanan'
  },
  {
    id: '8',
    name: 'Industri Strategis'
  },
  {
    id: '9',
    name: 'Proyek pemerintah yang dibiayai dengan hibah atau dana pinjaman luar negeri'
  },
  {
    id: '10',
    name: 'Perwakilan Negara Asing dan Pejabatnya'
  },
  {
    id: '11',
    name: 'Badan Internasional dan Pejabatnya'
  },
  {
    id: '12',
    name: '--'
  },
  {
    id: '13',
    name: 'Hadiah untuk ibadah umum, amal,sosial/kebudayaan'
  },
  {
    id: '14',
    name: 'Keperluan museum, kebun binatang dan tempat lain yang semacam itu'
  },
  {
    id: '15',
    name: 'Keperluan khusus tuna netra dan penyandang cacat'
  },
  {
    id: '16',
    name: 'Penelitian dan Pengembangan Ilmu Pengetahuan'
  },
  {
    id: '17',
    name: 'Barang contoh tidak untuk diperdagangkan'
  },
  {
    id: '18',
    name: 'Barang re-impor yang mendapat fasilitas KITE'
  },
  {
    id: '19',
    name: 'Pencegahan Pencemaran Lingkungan'
  },
  {
    id: '20',
    name: 'Bibit atau benih untuk pengembangan pertanian, peternakan dan perikanan'
  },
  {
    id: '21',
    name: 'Hasil laut'
  },
  {
    id: '22',
    name: 'Barang yang semula diekspor untuk perbaikan, pengerjaan dan pengujian'
  },
  {
    id: '23',
    name: 'Bahan terapi manusia, pengelompokan darah, dan bahan penjenisan jaringan'
  },
  {
    id: '24',
    name: 'Diimpor pleh pemerintah pusat/ daerah untuk kepentingan umum'
  },
  {
    id: '25',
    name: 'Berasal dari Kawasan Berikat'
  },
  {
    id: '26',
    name: 'Berasal dari Gudang Berikat'
  },
  {
    id: '28',
    name: 'Keputusan lainnya (selain 01-26 dan 29-36)'
  },
  {
    id: '29',
    name: 'Pertamina'
  },
  {
    id: '30',
    name: 'Pembangunan atau pengembangan Industri non PMA/PMDN'
  },
  {
    id: '31',
    name: 'Barang reimpor yang tidak mendapatkan fasilitas KITE'
  },
  {
    id: '32',
    name: 'Barang yang semula diekspor untuk pengerjaan proyek, pameran dan pengemasan'
  },
  {
    id: '33',
    name: 'Berasal dari Toko Bebas Bea'
  },
  {
    id: '34',
    name: 'Berasal dari Entreport Tujuan Pameran'
  },
  {
    id: '35',
    name: 'Impor Sementara'
  },
  {
    id: '36',
    name: 'AIDA'
  },
  {
    id: '37',
    name: 'BKPM'
  },
  {
    id: '38',
    name: 'Pertambangan'
  },
  {
    id: '39',
    name: 'Penundaan Bea Masuk, Cukai dan/atau Pajak'
  },
  {
    id: '40',
    name: 'KITE Pengembalian'
  },
  {
    id: '41',
    name: 'KITE IKM'
  },
  {
    id: '44',
    name: 'test'
  },
  {
    id: '50',
    name: 'Keterangan Karantina'
  },
  {
    id: '51',
    name: 'Keterangan Kesehatan / POM'
  },
  {
    id: '52',
    name: 'Keterangan Pajak'
  },
  {
    id: '53',
    name: 'Keterangan lainnya (selain 50 s.d 52)'
  },
  {
    id: '54',
    name: 'Preferensi Tarif Importasi Asean-China (ACFTA)'
  },
  {
    id: '55',
    name: 'Preferensi Tarif Importasi Asean-Korea (AKFTA)'
  },
  {
    id: '56',
    name: 'Preferensi Tarif Indonesia-Japan (IJ-EPA)'
  },
  {
    id: '57',
    name: 'Preferensi Tarif Importasi Asean-India (AIFTA)'
  },
  {
    id: '58',
    name: 'Preferensi Tarif Asean-Australia-New Zealand (AANZFTA)'
  },
  {
    id: '59',
    name: 'Preferensi Tarif Indonesia Pakistan FTA'
  },
  {
    id: '60',
    name: 'USDFS'
  },
  {
    id: '61',
    name: 'AJCEP'
  },
  {
    id: '62',
    name: 'Preferensi Tarif Indonesia - Palestina'
  },
  {
    id: '63',
    name: 'Preferensi Tarif Indonesia - Chili (ICCEPA)'
  },
  {
    id: '64',
    name: 'Preferensi Tarif ASEAN - Hongkong, China FTA'
  },
  {
    id: '65',
    name: 'Preferensi Tarif Indonesia Australia (IACEPA)'
  },
  {
    id: '70',
    name: 'Pembebasan Bea Masuk barang dan bahan untuk pembangunan dan pengembangan industri dalam rangka penanaman modal'
  },
  {
    id: '71',
    name: 'Pembebasan Bea Masuk barang dan bahan dalam rangka pembangunan dan pengembangan industri untuk jangka waktu tertentu'
  },
  {
    id: '99',
    name: 'Terdapat beberapa fasilitas/ pemenuhan peryaratan impor untuk 1 dokumen'
  }
]

const kodeUkuranKontainer: any = [
  {
    id: '20',
    name: '20 FEET'
  },
  {
    id: '40',
    name: '40 FEET'
  },
  {
    id: '45',
    name: '45 FEET'
  },
  {
    id: '60',
    name: '60 FEET'
  }
]

const kodeStatusProses: any = {
  draft: '001',
  validasi: '110'
}

const kodeJenisNilaiTransaksi = [
  { id: '1', name: 'BTR' },
  { id: '2', name: 'CAM' },
  { id: '3', name: 'CMA' },
  { id: '4', name: 'FTR' },
  { id: '5', name: 'HBH' },
  { id: '6', name: 'ITM' },
  { id: '7', name: 'LES' },
  { id: '8', name: 'PRO' },
  { id: '9', name: 'ROY' },
  { id: '10', name: 'TIP' },
  { id: '11', name: 'KON' },
  { id: '12', name: 'NTR' }
]

const kodeJenisVd = [
  { id: 'BTR', name: 'BUKAN TRANSAKSI JUAL BELI LAINNYA' },
  {
    id: 'CAM',
    name: 'Barang terdiri dari barang-barang yang merupakan obyek transaksi gabungan dari dua atau lebih jenis transaksi 1 sampai dengan 10'
  },
  {
    id: 'CMA',
    name: 'BUKAN TRANSAKSI JUAL BELI BERUPA BARANG HADIAH/PROMOSI/CONTOH'
  },
  {
    id: 'FTR',
    name: 'TRANSAKSI JUAL BELI BERDASARKAN HARGA FUTURES (FUTURE PRICE), YAITU HARGA YANG BARU DAPAT DITENTUKAN SETELAH PIB DISAMPAIKAN'
  },
  { id: 'HBH', name: 'BUKAN TRANSAKSI JUAL BELI BERUPA BARANG BANTUAN/HIBAH' },
  {
    id: 'ITM',
    name: 'BUKAN TRANSAKSI JUAL BELI BERUPA BARANG YANG DIIMPOR OLEH INTERMEDIARY YANG TIDAK MEMBELI BARANG'
  },
  { id: 'KON', name: 'BUKAN TRANSAKSI JUAL BELI BERUPA BARANG KONSINYASI' },
  { id: 'LES', name: 'BUKAN TRANSAKSI JUAL BELI BERUPA BARANG SEWA (LEASING)' },
  { id: 'NTR', name: 'TRANSAKSI JUAL BELI' },
  {
    id: 'PRO',
    name: 'TRANSAKSI JUAL BELI MENGANDUNG PROCEEDS YANG NILAINYA BELUM DAPAT DITENTUKAN'
  },
  {
    id: 'ROY',
    name: 'TRANSAKSI JUAL BELI MENGANDUNG ROYALTI YANG NILAINYA BELUM DAPAT DITENTUKAN'
  },
  { id: 'TIP', name: 'TITIPAN' }
]

const kodeJenisBarang = [
  { id: '1', name: 'AST' },
  { id: '2', name: 'BTR' },
  { id: '3', name: 'CAM' },
  { id: '4', name: 'CMA' },
  { id: '5', name: 'FRE' },
  { id: '6', name: 'FTR' },
  { id: '7', name: 'HBH' },
  { id: '8', name: 'INS' },
  { id: '9', name: 'ITM' }
]

const kodeKondisiBarang = [
  {
    id: '1',
    name: 'Baru'
  },
  { id: '2', name: 'Bekas' }
]

const kodeJenisPungutanBM = [
  { id: 'BM', name: 'Bea Masuk' },
  { id: 'BMKITE', name: 'Bea Masuk KITE' }
]

const kodeJenisPungutanCukai = [
  { id: 'CEA', name: 'Cukai Etil Alkohol' },
  { id: 'CMEA', name: 'Cukai Minuman Mengandung Etil Alkohol' },
  { id: 'CTEM', name: 'Cukai Tembakau' }
]

const kodeJenisPungutanAll = [
  { id: 'BK', name: 'Bea Keluar' },
  { id: 'BM', name: 'Bea Masuk' },
  { id: 'BMAD', name: 'Bea Masuk Anti Dumping' },
  { id: 'BMI', name: 'Bea Masuk Imbalan' },
  { id: 'BMKITE', name: 'Bea Masuk KITE' },
  { id: 'BMP', name: 'Bea Masuk Pembalasan' },
  { id: 'BMTP', name: 'Bea Masuk Tindakan Pengamanan' },
  { id: 'CEA', name: 'Cukai Etil Alkohol' },
  { id: 'CMEA', name: 'Cukai Minuman Mengandung Etil Alkohol' },
  { id: 'CTEM', name: 'Cukai Tembakau' },
  { id: 'DENDA', name: 'Denda Administrasi Pabean' },
  { id: 'DS', name: 'Dana Sawit' },
  { id: 'PNBP', name: 'Penerimaan Negara Bukan Pajak' },
  { id: 'PPH', name: 'PPh Impor' },
  { id: 'PPHEKSPOR', name: 'PPh Ekspor' },
  { id: 'PPN', name: 'PPN Impor' },
  { id: 'PPNBM', name: 'PPnBM Impor' },
  { id: 'PPNLOKAL', name: 'PPN Dalam Negeri / Hasil Tembakau' }
]

const kodeJenisTarif = [
  {
    id: '1',
    name: 'Advalorum'
  },
  { id: '2', name: 'Spesifik' }
]

const kodeFasilitasTarif = [
  { id: '1', name: 'DIBAYAR' },
  { id: '2', name: 'DITANGGUNG PEMERINTAH' },
  { id: '3', name: 'DITANGGUHKAN' },
  { id: '4', name: 'BERKALA' },
  { id: '5', name: 'DIBEBASKAN' },
  { id: '6', name: 'TDIAK DIPUNGUT' },
  { id: '7', name: 'SUDAH DILUNASI' },
  { id: '8', name: 'DIJAMINKAN' },
  { id: '9', name: 'DITUNDA' }
]

const optionPersen = [
  { id: 2.5, name: '2.5%' },
  { id: 5, name: '5%' },
  { id: 7.5, name: '7.5%' },
  { id: 10, name: '10%' }
]

const kodeTipeKontainer: any = [
  {
    id: '1',
    name: 'General / Dry Cargo'
  },
  {
    id: '2',
    name: 'Tunne Type'
  },
  {
    id: '3',
    name: 'Open Top Steel'
  },
  {
    id: '4',
    name: 'Flat Rack'
  },
  {
    id: '5',
    name: 'Reefer/Refregete'
  },
  {
    id: '6',
    name: 'Barge Container'
  },
  {
    id: '7',
    name: 'Bulk Container'
  },
  {
    id: '8',
    name: 'Isotank'
  },
  {
    id: '99',
    name: 'Lain-lain'
  }
]

const kodeKomoditi = [
  { id: '1', name: 'HASIL TEMBAKAU' },
  { id: '2', name: 'MMEA' },
  { id: '3', name: 'EA' }
]

export const usePabeanReferences = {
  kodeKantor,
  kodeJenisImpor,
  kodeCaraBayar,
  kodeJenisProsedur,
  kodeJenisIdentitas,
  kodeJenisApi,
  kodeStatus,
  kodeJenisDokumen,
  kodeNegara,
  kodeTutupPu,
  kodeCaraAngkut,
  kodeJenisKemasan,
  kodeValuta,
  kodeJenisNilai,
  kodeIncoterm,
  kodeAsuransi,
  kodeFasilitas,
  kodeUkuranKontainer,
  kodeTipeKontainer,
  kodeStatusProses,
  listBC,
  kodeJenisNilaiTransaksi,
  kodeJenisBarang,
  kodeKondisiBarang,
  kodeJenisPungutanBM,
  kodeJenisPungutanCukai,
  kodeJenisTarif,
  kodeFasilitasTarif,
  optionPersen,
  kodeJenisVd,
  kodeKomoditi
}
