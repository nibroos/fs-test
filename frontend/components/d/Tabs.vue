<script setup lang="ts">
interface IProps {
  class?: string
  current?: string | number
  tabs?: string[]
}
const props = withDefaults(defineProps<IProps>(), {
  class: '',
  current: 0,
  tabs: () => []
})

const currentTab = ref(props.current)

const emits = defineEmits(['update:current'])

const handleChange = (value: any) => {
  emits('update:current', value)
}

onMounted(() => {
  currentTab.value = props.current
})

watch(
  () => currentTab.value,
  (newVal, oldVal) => {
    if (newVal !== oldVal) {
      handleChange(newVal)
    }
  }
)
</script>

<template>
  <v-tabs
    v-model="currentTab"
    bg-color="blue-grey-lighten-5 text-blue-grey-lighten-2"
    selected-class="text-grey-darken-4"
    center-active
    :class="[props.class, 'w-full']"
  >
    <v-tab
      v-for="(tab, index) in tabs"
      :key="index"
      :title="tab"
      :value="index"
      slider-color="blue-lighten-1"
    >
      {{ tab }}
    </v-tab>
  </v-tabs>
</template>
