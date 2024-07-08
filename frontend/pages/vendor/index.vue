<script setup lang="ts">
import { useVendorStore } from '@/stores/VendorStore';

const vendorStore = useVendorStore()
const { metaModal, qBody } = storeToRefs(vendorStore)

definePageMeta({
  layout: 'authenticated' as any
})


const headAll = [
  {
    title: 'Name',
    sortable: true,
    key: 'name',
    value: 'name'
  },
  {
    title: 'Address',
    sortable: true,
    key: 'address',
    value: 'address'
  },
  {
    title: 'Created At',
    sortable: true,
    key: 'created_at',
    value: 'created_at'
  },
  {
    title: 'Created At',
    sortable: true,
    key: 'updated_at',
    value: 'updated_at'
  },
  {
    title: 'Action',
    sortable: false,
    key: 'actions'
  }
] as any

const fetchDataServerFetch = async (item: {
  page: number
  sortBy: [
    {
      key: string
      order: string
    }
  ]
  itemsPerPage: number
}) => {
  qBody.value.index.page = item.page
  qBody.value.index.per_page = item.itemsPerPage

  if (item.sortBy.length > 0) {
    qBody.value.index.order_column = item.sortBy[0].key
    qBody.value.index.order_direction = item.sortBy[0].order
  }

  await filterData()
}

const filterData = async () => {
  await vendorStore.getAllDataVendor()
}

const handleDeleted = async (item: any) => {
  const isConfirmed = await useAlert.showPopupConfirmation()
  if (isConfirmed) {
    const deletedRes = await vendorStore.deletedVendor(item.uuid)

    if (deletedRes?.status === 200) {
      await vendorStore.getAllDataVendor()
    } else {
      console.log(deletedRes?.data);

      useAlert.alertError(deletedRes?.data?.message)
    }
  }
}

const handleClearDataFilter = async () => {
  qBody.value.index.page = 1
  qBody.value.index.per_page = 10
  qBody.value.index.order_column = ''
  qBody.value.index.order_direction = ''
  qBody.value.index.name = ''
}
</script>

<template>
  <div class="flex flex-col">

    <d-index-layout :config="{
      title: 'Vendor',
    }">

      <template #filter>
        <div class="grid px-4 py-2 sm:grid-cols-2 lg:grid-cols-6">
          <form class="col-span-5 grid grid-cols-6 flex-row gap-3" @submit.prevent="filterData">

            <div class="col-span-2 flex flex-row items-center gap-2">
              <v-text-field v-model="qBody.index.name" label="Search Name" density="compact" variant="outlined"
                class="col-span-1 w-1/3" hide-details="auto"></v-text-field>
            </div>

            <d-submit-button @click:submit="filterData()" @click:clear="handleClearDataFilter()" />
          </form>
        </div>
      </template>

      <template #content>
        <v-data-table-server v-model:page="qBody.index.page" :items="metaModal.index.data ?? []" :headers="headAll"
          :items-per-page="qBody.index.per_page" :items-length="metaModal.index.meta.total ?? 0"
          :items-per-page-options="useInitials.perPageOptions" :loading="metaModal.index.loading"
          no-data-text="No vendor found" density="compact" :header-props="{
            class: '!bg-[#F4F6F8]'
          }" show-current-page hover @update:options="fetchDataServerFetch">
          <template #item.qty="{ item }: { item: any }">
            <d-num-layout :value="item.qty" />
          </template>

          <template #item.total_amount="{ item }: { item: any }">
            <d-num-layout :symbol="item.currency_symbol" :value="item.total_amount" />
          </template>
          <template #item.status="{ item }: { item: any }">
            <d-status-text :value="item.status" />
          </template>
          <template #item.actions="{ item }">
            <div class="flex flex-row items-center gap-2 rounded-md bg-white px-2 py-1">
              <v-tooltip>
                <template #activator="{ props }">
                  <button class="transition-all hover:text-red-600 hover:duration-300" @click="handleDeleted(item)">
                    <Icon name="material-symbols:delete-outline" size="20" />
                  </button>
                </template>
              </v-tooltip>
            </div>
          </template>
        </v-data-table-server>
      </template>
    </d-index-layout>

  </div>
</template>