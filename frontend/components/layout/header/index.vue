<script setup lang="ts">
import { useUnitStore } from '~/stores/UnitStore';

const unitStore = useUnitStore()
const { unitInput } = storeToRefs(unitStore)
</script>

<template>
  <v-menu :close-on-content-click="false">
    <template v-slot:activator="{ props }">
      <div class="mr-5 flex items-center gap-2 grow">

        <d-autocomplete v-model="unitInput.selected" api="/units/list" single-api="/units/show" inner-search-key="name"
          :query="{
            per_page: 10
          }" page-end-prop="meta.next_page" item-title="name" :initial-value="null" item-value="uuid" uid="uuid"
          label="Unit" method-api="post" items-prop="data" mapping-detail="data"
          max-length-display="70"></d-autocomplete>

      </div>
    </template>
  </v-menu>
</template>
