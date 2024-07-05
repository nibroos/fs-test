<script setup lang="ts">
interface IProps {
  class?: string
  isLoading?: boolean
}
const props = withDefaults(defineProps<IProps>(), {
  class: '',
  isLoading: false
})

const dynamicClass = computed(() => ({
  [props.class]: true
}))

const emits = defineEmits(['click', 'update:loading'])

const slots = useSlots()

const handleClick = () => {
  emits('click')
}
</script>

<template>
  <div class="flex flex-row items-center">
    <slot name="loading" v-if="props.isLoading && slots.loading" />
    <div
      v-else-if="props.isLoading && !slots.loading"
      :class="[
        'mr-2 inline-block h-4 w-4 animate-spin rounded-full border-b-2 border-l-2 border-r-2 border-t-2 border-b-white border-l-emerald-600 border-r-white border-t-white',
        dynamicClass
      ]"
    ></div>
  </div>
</template>
