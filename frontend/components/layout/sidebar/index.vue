<script setup lang="ts">
import { useMasterUser } from '~/stores/MasterData/AccountSetting'
import useLayouts from '~/stores/configs/layouts'

const User = useMasterUser()
const { data } = storeToRefs(User)
const { $permission } = useNuxtApp()

const token = localStorage.getItem('_token')
const config = useRuntimeConfig()
const BASE_URL = config.public.BASE_URL_IMAGE
const layoutState = useLayouts()
const { isCloseSidebar } = storeToRefs(layoutState)
loginStore().getAbilities()
loginStore().getCompanyProfile()

const itemShippings = [
  {
    title: 'Shipping Order',
    icon: 'mdi-truck-delivery-outline',
    link: '/shipping-order',
    permissions: ['SHIPPING_READ']
  }
]
const itemOrders = [
  {
    title: 'Sales Order',
    icon: 'mdi-cart-outline',
    link: '/orders/sales-order',
    permissions: ['ORDER_READ']
  },
  {
    title: 'Proforma & OCS',
    icon: 'mdi-cart-outline',
    link: '/orders/proforma',
    permissions: ['ORDER_CREATE', 'PROFORMA_READ']
  }
]

const itemSales = [
  {
    title: 'Sales Invoices',
    icon: 'mdi-credit-card-outline',
    link: '/sales-invoice',
    permissions: ['SALES_INVOICE_READ']
  },
  {
    title: 'Sales Adjustment',
    icon: 'mdi-printer-pos-sync-outline',
    link: '/sales-adjustment',
    permissions: ['SALES_ADJUSTMENT_READ']
  }
]
const itemPurchase = [
  {
    title: 'Request Order',
    icon: 'mdi-credit-card-outline',
    link: '/purchase/request-order',
    permissions: ['PURCHASE_READ']
  },
  {
    title: 'Purchase Order',
    icon: 'mdi-credit-card-outline',
    link: '/purchase/purchase-order',
    permissions: ['PURCHASE_READ']
  },
  {
    title: 'Purchase Invoice',
    icon: 'mdi-credit-card-outline',
    link: '/purchase/purchase-invoice',
    permissions: ['PURCHASE_INVOICE_READ']
  },
  {
    title: 'Purchase Adjustment',
    icon: 'mdi-credit-card-outline',
    link: '/purchase/purchase-adjustment',
    permissions: ['PURCHASE_ADJUSTMENT_READ']
  }
]

const itemInventory = [
  {
    title: 'Inventory IN',
    icon: 'mdi-credit-card-outline',
    link: '/inventory/inventory-in',
    permissions: ['INVENTORY_READ']
  },
  {
    title: 'Inventory OUT',
    icon: 'mdi-credit-card-outline',
    link: '/inventory/inventory-out',
    permissions: ['INVENTORY_READ']
  },
  {
    title: 'Card Stock',
    icon: '',
    link: '/inventory/stock',
    permissions: ['INVENTORY_READ']
  },
  {
    title: 'BC Tracking',
    icon: '',
    link: '/inventory/bc-tracking',
    permissions: ['INVENTORY_READ']
  },
  {
    title: 'Pabean Document',
    icon: 'mdi-file-sign',
    link: '/inventory/pabean-document',
    permissions: ['INVENTORY_READ']
  }
]

const itemExim = [
  {
    title: 'Lp. Pemasukan Barang',
    icon: 'mdi-credit-card-outline',
    link: '/inventory/exim/bc1',
    permissions: ['INVENTORY_READ']
  },
  {
    title: 'Lp. Pengeluaran Barang',
    icon: 'mdi-credit-card-outline',
    link: '/inventory/exim/bc2',
    permissions: ['INVENTORY_READ']
  },
  {
    title: 'Lp. Posisi Barang',
    icon: 'mdi-credit-card-outline',
    link: '/inventory/exim/bc3',
    permissions: ['INVENTORY_READ']
  },
  {
    title: 'Lp. Pertanggungjawaban Mutasi Barang',
    icon: 'mdi-credit-card-outline',
    link: '/inventory/exim/bc4',
    permissions: ['INVENTORY_READ']
  },
  {
    title: 'Lp. Pertanggungjawaban Mutasi Barang Jadi',
    icon: 'mdi-credit-card-outline',
    link: '/inventory/exim/bc5',
    permissions: ['INVENTORY_READ']
  },
  {
    title: 'Lp. Pertanggungjawaban Mutasi Barang dan Sisa Scrap',
    icon: 'mdi-credit-card-outline',
    link: '/inventory/exim/bc6',
    permissions: ['INVENTORY_READ']
  },
  {
    title:
      'Lp. Pertanggungjawaban Mutasi Mesin dan Peralatan Perkantoran Kawasan Berikat',
    icon: 'mdi-credit-card-outline',
    link: '/inventory/exim/bc7',
    permissions: ['INVENTORY_READ']
  }
]

const itemProduction = [
  {
    title: 'Production Plan',
    icon: '',
    link: '/production/production-plan',
    permissions: ['PRODUCTION_READ']
  },
  // {
  //   title: "Work Order",
  //   icon: "",
  //   link: "/#",
  // permissions: ['PRODUCTION_READ']
  // },
  {
    title: 'Work In Progress',
    icon: '',
    link: '/production/work-in-progress',
    permissions: ['PRODUCTION_READ']
  }
]

const itemMaster = [
  {
    title: 'Master User',
    icon: 'mdi-account-outline',
    link: '/master-data/master-color-method',
    permissions: ['MASTER_DATA_READ']
  },
  {
    title: 'Master Style',
    icon: 'mdi-square-edit-outline',
    link: '/master-style',
    permissions: ['MASTER_STYLE_READ']
  }
]

const itemDashboard = [
  {
    title: 'Dashboard',
    icon: 'mdi-view-dashboard-outline',
    link: '/dashboard',
    permissions: ['REPORT_READ']
  }
]

const isPermissionAllChildExists = (parentName: string) => {
  let joinPermissions = []

  let dashboard = ['dashboard']
  let management = [
    'orders',
    'sales',
    'purchase',
    'inventory',
    'production',
    'shipping'
  ]
  let master = ['master', 'style']

  switch (parentName) {
    case 'management':
      // get all permissions from management
      joinPermissions = itemOrders
        .concat(itemSales)
        .concat(itemPurchase)
        .concat(itemInventory)
        .concat(itemProduction)
        .map((item) => item.permissions.join())
      return useAuth.permit(joinPermissions)
    case 'master':
      // get all permissions from master
      joinPermissions = itemMaster.map((item) => item.permissions.join())
      return useAuth.permit(joinPermissions)
    case 'dashboard':
      // get all permissions from dashboard
      joinPermissions = itemDashboard.map((item) => item.permissions.join())
      return useAuth.permit(joinPermissions)
    default:
      return false
  }
}

const isPermissionOnChildExists = (parentName: string) => {
  let childPermissions = []

  switch (parentName) {
    case 'orders':
      // itemOrders
      childPermissions = itemOrders.map((item) => item.permissions.join())
      return useAuth.permit(childPermissions)
    case 'sales':
      // itemOrders
      childPermissions = itemSales.map((item) => item.permissions.join())
      return useAuth.permit(childPermissions)
    case 'master':
      // itemPurchase
      childPermissions = itemMaster.map((item) => item.permissions.join())
      return useAuth.permit(childPermissions)
    case 'purchase':
      // itemPurchase
      childPermissions = itemPurchase.map((item) => item.permissions.join())
      return useAuth.permit(childPermissions)
    case 'inventory':
      // itemInventory
      childPermissions = itemInventory.map((item) => item.permissions.join())
      return useAuth.permit(childPermissions)
    case 'production':
      // itemProduction
      childPermissions = itemProduction.map((item) => item.permissions.join())
      return useAuth.permit(childPermissions)
    default:
      return false
  }
}

const isExpanded = ref(false)

const handleExpanded = (value: boolean) => {
  isExpanded.value = value
}
const handleMouseHover = () => {
  if (isCloseSidebar.value == true) {
    if (!isExpanded.value) {
      useDebouncedRef(handleExpanded(true), 1000)
    } else {
      useDebouncedRef(handleExpanded(false), 1000)
    }
  }
}

watch(isCloseSidebar, (newValue) => {
  if (!newValue) {
    isExpanded.value = true
  } else {
    isExpanded.value = false
  }
})

onMounted(async () => {
  if (token) {
    await Promise.all([User.getDataUser(), loginStore().getAbilities()])
  }
})
</script>

<template>
  <div
    @mouseenter="handleMouseHover"
    @mouseleave="handleMouseHover"
    class="flex h-full flex-col items-center justify-between"
  >
    <div class="flex w-full flex-col gap-y-5 py-5">
      <!-- Logo App -->
      <div class="flex w-full justify-center">
        <img
          v-if="isExpanded"
          src="/images/D-new-logo.png"
          alt="img-login"
          class="h-full w-40 object-contain"
        />
        <img
          v-else
          src="/images/D-only-new-logo.png"
          alt="img-login"
          class="w-7 object-contain"
        />
      </div>

      <!-- Menu List -->
      <div class="max-h-[80vh] w-full overflow-y-auto">
        <v-list
          v-if="useAuth.permit('REPORT_READ')"
          color="#fff"
          density="compact"
          lines="one"
        >
          <v-list-item-title
            class="mb-2 ml-4 !text-sm"
            v-if="isPermissionAllChildExists('dashboard') && isExpanded"
            style="font-size: 12px"
          >
            DASHBOARD
          </v-list-item-title>

          <v-list-item
            v-if="
              $permission.isSuperAdmin(data?.role) ||
              $permission.canAccess(`/dashboard`, data?.role)
            "
            color="#898F99"
            to="/dashboard"
            rounded="lg"
          >
            <template #prepend>
              <v-icon>mdi-view-dashboard-outline</v-icon>
            </template>

            <v-list-item-title>Dashboard</v-list-item-title>
          </v-list-item>
        </v-list>
        <v-divider></v-divider>
        <v-list
          v-if="isPermissionOnChildExists('master')"
          color="#fff"
          density="compact"
        >
          <v-list-item-title
            class="mb-2 ml-4 !text-sm"
            v-if="isPermissionAllChildExists('master') && isExpanded"
            style="font-size: 12px"
          >
            MASTER
          </v-list-item-title>

          <v-list-item
            v-if="useAuth.permit('MASTER_DATA_READ')"
            color="#898F99"
            to="/master-data/master-color-method"
            rounded="lg"
          >
            <template #prepend>
              <v-icon>mdi-wrench</v-icon>
            </template>

            <v-list-item-title>Master Data</v-list-item-title>
          </v-list-item>
        </v-list>
        <v-list color="#fff" density="compact">
          <v-list-item
            v-if="useAuth.permit('MASTER_STYLE_READ')"
            color="#898F99"
            to="/master-style"
            rounded="lg"
          >
            <template #prepend>
              <v-icon>mdi-square-edit-outline</v-icon>
            </template>

            <v-list-item-title>Master Style</v-list-item-title>
          </v-list-item>
        </v-list>
        <v-divider></v-divider>
        <!-- list Management -->
        <v-list color="#fff" density="comfortable">
          <v-list-item-title
            class="mb-2 ml-4 !text-sm"
            v-if="isPermissionAllChildExists('management') && isExpanded"
            style="font-size: 12px"
          >
            MANAGEMENT
          </v-list-item-title>

          <!-- List static -->
          <template v-for="(item, i) in itemOrders" :key="i"></template>

          <v-list-group
            v-if="isPermissionOnChildExists('orders')"
            value="Orders"
          >
            <template #activator="{ props }">
              <v-list-item
                v-bind="props"
                prepend-icon="mdi-cart-outline"
                title="Orders"
                density="compact"
                rounded="lg"
              ></v-list-item>
            </template>
            <template v-for="(item, i) in itemOrders" :key="i">
              <v-list-item
                v-if="useAuth.permit(item.permissions)"
                :to="item.link"
                :title="item.title"
                :value="item"
                variant="text"
                rounded="lg"
                density="compact"
                color="#898F99"
              ></v-list-item>
            </template>
          </v-list-group>
          <v-list-group v-if="isPermissionOnChildExists('sales')" value="Sales">
            <template #activator="{ props }">
              <v-list-item
                v-bind="props"
                prepend-icon="mdi-credit-card-outline"
                title="Sales"
                density="compact"
                rounded="lg"
              ></v-list-item>
            </template>
            <template v-for="(item, i) in itemSales" :key="i">
              <v-list-item
                v-if="useAuth.permit(item.permissions)"
                :title="item.title"
                :to="item.link"
                variant="text"
                rounded="lg"
                density="compact"
                color="#898F99"
              ></v-list-item>
            </template>
          </v-list-group>

          <v-list-group
            v-if="isPermissionOnChildExists('purchase')"
            value="Purchase"
          >
            <template #activator="{ props }">
              <v-list-item
                v-bind="props"
                rounded="lg"
                prepend-icon="mdi-cart-variant"
                title="Purchase"
                density="compact"
              ></v-list-item>
            </template>

            <template v-for="(item, i) in itemPurchase" :key="i">
              <v-list-item
                v-if="useAuth.permit(item.permissions)"
                :title="item.title"
                :to="item.link"
                variant="text"
                rounded="lg"
                density="compact"
                color="#898F99"
              ></v-list-item>
            </template>
          </v-list-group>

          <v-list-group
            v-if="isPermissionOnChildExists('inventory')"
            value="Inventory"
          >
            <template #activator="{ props }">
              <v-list-item
                v-bind="props"
                rounded="lg"
                prepend-icon="mdi-warehouse"
                title="Inventory"
                density="compact"
              ></v-list-item>
            </template>

            <template v-for="(item, i) in itemInventory" :key="i">
              <v-list-item
                v-if="useAuth.permit(item.permissions)"
                :title="item.title"
                :to="item.link"
                variant="text"
                rounded="lg"
                density="compact"
                color="#898F99"
              ></v-list-item>
            </template>
          </v-list-group>

          <v-list-group value="Exim">
            <template #activator="{ props }">
              <v-list-item
                v-bind="props"
                rounded="lg"
                prepend-icon="mdi-file-sign"
                title="Exim"
                density="compact"
              ></v-list-item>
            </template>

            <template v-for="(item, i) in itemExim" :key="i">
              <!-- <v-tooltip location="end" :text="item.title">
                <template v-slot:activator="{ props }"> -->
              <div :title="item.title" class="">
                <v-list-item
                  v-if="useAuth.permit(item.permissions)"
                  :title="item.title"
                  :to="item.link"
                  variant="text"
                  rounded="lg"
                  density="compact"
                  color="#898F99"
                ></v-list-item>
              </div>
              <!-- </template>
              </v-tooltip> -->
            </template>
          </v-list-group>

          <v-list-group
            v-if="isPermissionOnChildExists('production')"
            value="Production"
          >
            <template #activator="{ props }">
              <v-list-item
                v-bind="props"
                rounded="lg"
                prepend-icon="mdi-tune-vertical"
                title="Production"
                density="compact"
              ></v-list-item>
            </template>

            <template v-for="(item, i) in itemProduction" :key="i">
              <v-list-item
                v-if="useAuth.permit(item.permissions)"
                :title="item.title"
                :to="item.link"
                variant="text"
                rounded="lg"
                density="compact"
                color="#898F99"
              ></v-list-item>
            </template>
          </v-list-group>

          <!-- List static -->
          <template v-for="(item, i) in itemShippings" :key="i">
            <v-list-item
              v-if="useAuth.permit(item.permissions)"
              :value="item"
              color="#898F99"
              rounded="lg"
              :to="item.link"
              :title="item.title"
            >
              <template #prepend>
                <v-icon :icon="item.icon"></v-icon>
              </template>
            </v-list-item>
          </template>
        </v-list>
      </div>
    </div>

    <!-- Profile Account -->
    <div
      @click="navigateTo('/master-data/account-setting')"
      class="flex h-[77px] w-full cursor-pointer items-center justify-stretch gap-x-5 bg-slate-900 transition-all ease-in-out hover:bg-slate-900/60 lg:px-2"
    >
      <v-avatar
        :image="`${BASE_URL}/storage/app/public/master/users/${data?.photo}`"
        size="40"
      ></v-avatar>
      <div>
        <p class="text-sm font-normal">{{ data?.name }}</p>
        <span class="text-xs font-normal text-slate-300">
          {{ data?.role }}
        </span>
      </div>
    </div>
  </div>
</template>
<style scoped>
* {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: thin;
  scrollbar-color: #898f99 #121c2b;
}
</style>
