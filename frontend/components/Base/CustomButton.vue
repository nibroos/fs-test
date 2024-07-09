<script setup>
const props = defineProps({
  btnSave: { type: Boolean, default: false },
  class: { type: String, default: '' }
})
</script>

<template>
  <button
    :class="`${
      btnSave
        ? ' flex w-fit items-center rounded-md  border-none bg-[#4094D4] px-3 py-[7px]  text-base font-normal text-white transition-all duration-200 hover:bg-[#3476a8]  lg:text-sm'
        : 'w-fit rounded-md bg-[#15328A] p-2 text-sm text-white hover:shadow-md lg:text-base'
    } `"
  >
    <slot />
  </button>
</template>
