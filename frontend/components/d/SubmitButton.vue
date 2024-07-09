<script setup lang="ts">
const emits = defineEmits(['click:submit', 'click:clear'])
const handleClickSubmit = () => {
  emits('click:submit')
}

const handleClickClear = () => {
  emits('click:clear')
}
</script>

<template>
  <div class="flex flex-row items-center gap-2">
    <v-btn
      variant="tonal"
      height="35"
      density="comfortable"
      append-icon="mdi-magnify"
      class="text-none grow"
      rounded="sm"
      color="#006C9C"
      type="submit"
      @click="handleClickSubmit()"
    >
      Find
    </v-btn>
    <v-btn
      variant="tonal"
      height="35"
      density="comfortable"
      class="text-none grow"
      rounded="sm"
      append-icon="mdi-refresh"
      @click="handleClickClear()"
    >
      Clear
    </v-btn>
  </div>
</template>
