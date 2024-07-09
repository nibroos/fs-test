<script setup lang="ts">
const props = defineProps(['value', 'customClass'])
</script>

<template>
  <div class="whitespace-nowrap text-right" :class="props.customClass">
    <slot name="prefix" v-bind="props"></slot>
    {{ props.value }}
  </div>
</template>
