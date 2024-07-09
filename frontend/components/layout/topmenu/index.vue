<script setup lang="ts">
import useLayouts from '~/stores/configs/layouts'
import { useTopMenu } from '~/stores/MasterData/TopMenu'
const router = useRouter()
const id = router.currentRoute.value.params.id

definePageMeta({
  layout: 'main-layout'
})

const layoutState = useLayouts()
const { titlePath, subTitlePath, lastPathSegment, parentTitle, topTitle } =
  storeToRefs(layoutState)
const topMenuStore = useTopMenu()
const { isActiveTabIndex } = storeToRefs(topMenuStore)

const configs = ref({
  titlePath: titlePath,
  subTitlePath: subTitlePath,
  lastPathSegment: lastPathSegment,
  parentTitle: 'Master',
  topTitle: topTitle
})

// const isActiveLink = (item: any) => {
//   if (isActiveTabIndex.value === item.number) {
//     return true
//   }
// }

const listItem = ref([
  {
    title: 'User',
    number: 0,
    icon: 'mdi-account-circle-outline',
    link: '/master-data/master-user',
    link2: '/master-data/master-user/add-user',
    link3: `/master-data/master-user/edit/${id}`,
    permissions: ['MASTER_DATA_USER_READ']
  },
  {
    title: 'Account Setting',
    number: 1,
    icon: 'mdi-account-cog-outline',
    link: '/master-data/account-setting',
    permissions: ['SUPERADMIN']
  },
  {
    title: 'Barcode',
    number: 2,
    icon: 'mdi-barcode',
    link: '/master-data/barcode',
    link2: '/master-data/barcode/create-barcode',
    link3: `/master-data/barcode/${id}`,
    permissions: ['MASTER_DATA_READ']
  },
  {
    title: 'Company Profile',
    number: 3,
    icon: 'mdi-domain',
    link: '/master-data/company-profile',
    permissions: ['MASTER_DATA_COMPANY_PROFILE_UPDATE']
  },
  {
    title: 'Customer Type',
    number: 4,
    icon: 'mdi-layers-outline',
    link: '/master-data/master-customer-type',
    link2: '/master-data/master-customer-type/add-customer-type',
    link3: `/master-data/master-customer-type/edit-customer-type/${id}`,
    permissions: ['MASTER_DATA_READ']
  },
  {
    title: 'Customer',
    number: 5,
    icon: 'mdi-book-account-outline',
    link: '/master-data/master-customer',
    link2: '/master-data/master-customer/create',
    link3: `/master-data/master-customer/edit-master-customer/${id}`,
    permissions: ['MASTER_DATA_READ']
  },
  {
    title: 'Rule',
    number: 6,
    icon: 'mdi-format-list-bulleted',
    link: '/master-data/master-rule',
    link2: `/master-data/master-rule/0`,
    link3: `/master-data/master-rule/1`,
    link4: `/master-data/master-rule/2`,
    link5: `/master-data/master-rule/edit-rule/${id}`,
    link6: `/master-data/master-rule/edit-deduction/${id}`,
    permissions: ['MASTER_DATA_READ']
  },
  {
    title: 'Item',
    number: 7,
    icon: 'mdi-treasure-chest-outline',
    link: '/master-data/master-item',
    link2: '/master-data/master-item/create-master-item',
    link3: `/master-data/master-item/edit-master-item/${id}`,
    permissions: ['ITEM_READ']
  },
  {
    title: 'Unit',
    number: 8,
    icon: 'mdi-bookshelf',
    link: '/master-data/master-unit',
    link2: '/master-data/master-unit/0',
    link3: `/master-data/master-unit/edit-unit/${id}`,
    link4: `/master-data/master-unit/edit-conversion/${id}`,
    permissions: ['MASTER_DATA_READ']
  },
  {
    title: 'Warehouse',
    number: 9,
    icon: 'mdi-warehouse',
    link: '/master-data/master-warehouse',
    link2: '/master-data/master-warehouse/add-warehouse',
    link3: `/master-data/master-warehouse/edit/${id}`,
    permissions: ['MASTER_DATA_READ']
  },
  {
    title: 'Line',
    number: 10,
    icon: 'mdi-align-vertical-distribute',
    link: '/master-data/master-line',
    link2: '/master-data/master-line/create-master-line',
    link3: `/master-data/master-line/edit-master-line/${id}`,
    permissions: ['MASTER_DATA_READ']
  },
  // {
  //   title: 'Color',
  // number: 11,
  //   icon: 'mdi-palette-outline',
  //   link: '/master-data/master-color',
  //   link2: '/master-data/master-color/create-master-color',
  //   link3: `/master-data/master-color/edit-colors/${id}`
  // },
  {
    title: 'Color Method',
    number: 12,
    icon: 'mdi-palette-swatch',
    link: '/master-data/master-color-method',
    link2: '/master-data/master-color-method/0',
    link3: `/master-data/master-color-method/edit-color-method/${id}`,
    link4: `/master-data/master-color-method/edit-color-process/${id}`,
    permissions: ['MASTER_DATA_READ']
  },
  {
    title: 'Cap',
    number: 13,
    icon: 'mdi-sitemap-outline',
    link: '/master-data/master-cap',
    link2: '/master-data/master-cap/0',
    link3: `/master-data/master-cap/edit-cap-type/${id}`,
    link4: `/master-data/master-cap/edit-cap-size/${id}`,
    link5: `/master-data/master-cap/edit-cap-color/${id}`,
    link6: `/master-data/master-cap/edit-cap-process/${id}`,
    permissions: ['MASTER_DATA_READ']
  },
  {
    title: 'Role & Permission',
    number: 14,
    icon: 'mdi-shield-check-outline',
    link: '/master-data/Role-and-Permisson',
    link2: '/master-data/Role-and-Permisson/create-role-and-permission',
    link3: `/master-data/Role-and-Permisson/edit/${id}`,
    permissions: ['MASTER_DATA_ROLE_PERMISSION_READ']
  },
  {
    title: 'Process',
    number: 15,
    icon: 'mdi-reload',
    link: '/master-data/master-process',
    link2: '/master-data/master-process/0',
    link3: `/master-data/master-process/edit-master-process-cutting-type/${id}`,
    link4: `/master-data/master-process/edit-master-process-collection/${id}`,
    permissions: ['MASTER_DATA_READ']
  },
  {
    title: 'Finishing',
    number: 16,
    icon: 'mdi-clock-check-outline',
    link: '/master-data/master-finishing',
    link2: '/master-data/master-finishing/0',
    link3: `/master-data/master-finishing/edit-finishing-type/${id}`,
    link4: `/master-data/master-finishing/edit-packing-method/${id}`,
    permissions: ['MASTER_DATA_READ']
  },
  {
    title: 'Customization',
    number: 17,
    icon: 'mdi-note-edit-outline',
    link: '/master-data/customization',
    link2: '/master-data/customization/0',
    link3: `/master-data/customization/edit-pph23/${id}`,
    link4: `/master-data/customization/edit-io-type/${id}`,
    link5: `/master-data/customization/edit-shipping-term/${id}`,
    link6: `/master-data/customization/edit-term-of-payment/${id}`,
    link7: `/master-data/customization/edit-purchase-type/${id}`,
    link8: `/master-data/customization/edit-order-type/${id}`,
    link9: `/master-data/customization/edit-group/${id}`,
    link10: `/master-data/customization/edit-sub-group/${id}`,
    link11: `/master-data/customization/edit-production-type/${id}`,
    permissions: ['MASTER_DATA_READ']
  }
])

const filterPermissions = () => {
  let newList: any = []

  listItem.value.forEach((item: any, index: any) => {
    if (item.permissions) {
      if (useAuth.permit(item.permissions)) {
        newList.push(item)
      }
    }
  })

  listItem.value = newList
}

const handleChangePage = (item: any) => {
  isActiveTabIndex.value = item.number
  navigateTo(item.link)
}

watchEffect(() => {
  layoutState.defineTitlePath(configs.value)
  filterPermissions()
})
onBeforeUnmount(() => {
  // console.log("oop", isActiveTabIndex.value);
}),
  onMounted(() => {
    layoutState.defineTitlePath(configs.value)
  })
</script>

<template>
  <div class="absolute z-10 h-screen w-full bg-white">
    <div
      class="mb-3 h-max w-full overflow-auto rounded-lg border shadow"
      v-if="listItem.length > 0"
    >
      <v-list
        shaped
        nav
        dense
        class="flex flex-row justify-between"
        item-value="number"
        color="primary"
        :items="listItem"
      >
        <v-list-item
          v-for="(item, i) in listItem"
          base-color="black"
          color="blue"
          :active="item.number===isActiveTabIndex"
          :key="item.number"
          :value="item.number"
          @click="handleChangePage(item)"
        >
          <template v-slot:default="{ isActive }">
            <div
             :class="[
                item.number === isActiveTabIndex
                  ? 'text-blue'
                  : 'text-zinc-500'
              ]" 
              class="flex flex-col items-center justify-center gap-1 rounded-lg tracking-normal "
            >
              <v-icon :icon="item.icon" size="24"></v-icon>
              <div class="text-sm capitalize">{{ item.title }}</div>
            </div>
          </template>
        </v-list-item>
      </v-list>
    </div>

    <v-responsive>
      <div class="h-fit w-full">
        <slot />
      </div>
      <!-- <v-main> </v-main> -->
    </v-responsive>
  </div>
</template>
