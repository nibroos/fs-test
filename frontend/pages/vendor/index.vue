<script setup lang="ts">
import { useVendorStore } from '@/stores/VendorStore';
import { useUnitStore } from '@/stores/UnitStore';

const vendorStore = useVendorStore()
const unitStore = useUnitStore()
const { metaModal, qBody, showModal, formData } = storeToRefs(vendorStore)
const { unitInput } = storeToRefs(unitStore)

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
  await vendorStore.getListVendor()
}

const handleDeleted = async (item: any) => {
  const isConfirmed = await useAlert.showPopupConfirmation()
  if (isConfirmed) {
    const deletedRes = await vendorStore.deletedVendor(item.uuid)

    if (deletedRes?.status === 200) {
      await vendorStore.getListVendor()
    } else {

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

watch(
  () => unitInput.value.selected,
  async () => {
    await vendorStore.getListVendor()
  }
)

// handle Submit
const submitData = async () => {
  formData.value.unit_id = unitInput.value.selected

  const isConfirmed = await useAlert.showPopupConfirmation(
    'Are you sure to save this data?',
    'Data will be saved'
  )
  if (isConfirmed) {
    useAlert.alertLoading()
    let submit
    if (showModal.value.create) {
      submit = await vendorStore.createVendor()
    } else {
      submit = await vendorStore.updateVendor()
    }

    if (submit.status !== 200) {
      let errors = ''
      await Promise.all(
        Object.keys(submit.errors).map((row: any) => {
          errors += `- ${submit.errors[row][0]} <br />`
        })
      )
      useAlert.alertError(errors + `<br /> ${submit.message}`)
    } else {
      useAlert.hideAlert()
      useAlert.alertSuccess(submit.data.message)

      handleOpenModal('create', false)
      handleOpenModal('edit', false)

      await vendorStore.getListVendor()
    }
  } else {
    useAlert.hideAlert()
  }
}

const handleOpenModal = async (mode: 'create' | 'edit' = 'create', action: boolean, item?: any) => {
  showModal.value[mode] = action

  if (action === false) return

  if (mode == 'edit') {
    formData.value = cloneObject(useInitials.formCreateEditVendor)
    let response = await vendorStore.showVendor(item.uuid)

    formData.value = response?.data.data
    formData.value.unit_id = response?.data.data['unit.uuid']
  } else {
    formData.value.id = null
    formData.value.uuid = null
  }
}
</script>

<template>
  <div class="flex flex-col">

    <d-index-layout :config="{
      title: 'Vendor',
    }">

      <template #filter>
        <div class="flex justify-between items-center px-4 py-2">
          <div class="grid sm:grid-cols-2 lg:grid-cols-6 w-3/4">
            <form class="col-span-5 grid grid-cols-6 flex-row gap-3" @submit.prevent="filterData">

              <div class="col-span-2 flex flex-row items-center gap-2">
                <v-text-field v-model="qBody.index.name" label="Search Name" density="compact" variant="outlined"
                  class="col-span-1 w-1/3" hide-details="auto"></v-text-field>
              </div>

              <d-submit-button @click:submit="filterData()" @click:clear="handleClearDataFilter()" />
            </form>
          </div>

          <d-button @click="handleOpenModal('create', true)"
            class="justify-center rounded-lg bg-[#4094D4] hover:!bg-[#3476a8]" text-class="text-white" cta="New Vendor"
            :no-icon="true"></d-button>
        </div>
      </template>

      <template #content>
        <v-data-table-server v-model:page="qBody.index.page" :items="metaModal.index.data ?? []" :headers="headAll"
          :items-per-page="qBody.index.per_page" :items-length="metaModal.index.meta.total ?? 0"
          :items-per-page-options="useInitials.perPageOptions" :loading="metaModal.index.loading" fixed-header
          :height="metaModal.index.data?.length > 10 ? '700' : ''" no-data-text="No vendor found" density="compact"
          :header-props="{
            class: '!bg-[#F4F6F8]'
          }" show-current-page hover @update:options="fetchDataServerFetch">
          <template #item.qty="{ item }: { item: any }">
            <d-num-layout :value="item.qty" />
          </template>

          <template #item.actions="{ item }">
            <div class="flex flex-row items-center gap-2 rounded-md bg-white px-2 py-1">
              <v-tooltip>
                <template #activator="{ props }">
                  <button class="transition-all hover:text-sky-600 hover:duration-300"
                    @click="handleOpenModal('edit', true, item)">
                    <!-- <Icon name="material-symbols:edit-square-outline-rounded" size="20" /> -->
                    <v-icon icon="mdi-pencil"></v-icon>
                  </button>
                </template>
              </v-tooltip>
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

    <ModalsFinalModal :is-open="showModal.create" size="w-5/12" label="New Vendor" custom-class="overflow-y-auto"
      @update:is-open="showModal.create = $event">

      <form class="py-2 flex flex-col gap-4" @submit.prevent="submitData">
        <d-text-input v-model="formData.name" label="Name" :errors="[]" />

        <d-autocomplete v-model="unitInput.selected" api="/units/list" single-api="/units/show" inner-search-key="name"
          :query="{
            per_page: 10
          }" page-end-prop="meta.next_page" item-title="name" :initial-value="null" item-value="uuid" uid="uuid"
          label="Unit" method-api="post" items-prop="data" mapping-detail="data" max-length-display="70"
          disabled></d-autocomplete>

        <d-text-area-input v-model="formData.address" label="Address" :rows="3" :errors="[]" />
      </form>
      <template #footer>
        <div class="flex h-max justify-center items-center gap-4">
          <d-button @click="submitData" class="justify-center w-7/12 rounded-lg bg-[#4094D4] hover:!bg-[#3476a8]"
            text-class="text-white" cta="Create" :no-icon="true" type="submit"></d-button>

          <d-button @click="showModal.create = false"
            class="justify-center rounded-lg  bg-blue-50 hover:!bg-blue-100 grow" text-class="text-[#4094D4]"
            cta="Cancel" :no-icon="true"></d-button>
        </div>
      </template>
    </ModalsFinalModal>


    <ModalsFinalModal :is-open="showModal.edit" size="w-5/12" label="Edit Vendor" custom-class="overflow-y-auto"
      @update:is-open="showModal.edit = $event">

      <form class="py-2 flex flex-col gap-4" @submit.prevent="submitData">
        <d-text-input v-model="formData.name" label="Name" :errors="[]" />

        <d-autocomplete v-model="unitInput.selected" api="/units/list" single-api="/units/show" inner-search-key="name"
          :query="{
            per_page: 10
          }" page-end-prop="meta.next_page" item-title="name" :initial-value="null" item-value="uuid" uid="uuid"
          label="Unit" method-api="post" items-prop="data" mapping-detail="data" max-length-display="70"
          disabled></d-autocomplete>

        <d-text-area-input v-model="formData.address" label="Address" :rows="3" :errors="[]" />
      </form>
      <template #footer>
        <div class="flex h-max justify-center items-center gap-4">
          <d-button @click="submitData" class="justify-center w-7/12 rounded-lg bg-[#4094D4] hover:!bg-[#3476a8]"
            text-class="text-white" cta="Update" :no-icon="true" type="submit"></d-button>

          <d-button @click="showModal.edit = false"
            class="justify-center rounded-lg  bg-blue-50 hover:!bg-blue-100 grow" text-class="text-[#4094D4]"
            cta="Cancel" :no-icon="true"></d-button>
        </div>
      </template>
    </ModalsFinalModal>
  </div>
</template>