<script setup lang="ts">
const emits = defineEmits(['click:csv'])
const handleClickSubmit = () => {
  emits('click:csv')
  if (props.loadingState == undefined) {
    localLoadingState.value = true
    // console.log(localLoadingState.value, 'sss')
    setTimeout(() => {
      localLoadingState.value = false
    }, 1500)
  }
}
interface IProps {
  loadingState?: boolean
}

const props = withDefaults(defineProps<IProps>(), {
  loadingState: undefined
})
const localLoadingState = ref(props.loadingState)
const checkLoad = () => {
  // console.log(props.loadingState)
  // console.log(props.loadingState == undefined, 'bool')
}
watch(
  () => props.loadingState,
  (newVal, oldVal) => {
    if (!newVal && oldVal) {
      setTimeout(() => {
        localLoadingState.value = newVal
        console.log('Assigned false to localLoadingState after 1 second delay')
      }, 1000)
    } else {
      localLoadingState.value = newVal
    }
    // console.log(localLoadingState.value, 'state')
  }
)
onMounted(() => {
  // checkLoad()
})
</script>

<template>
  <div class="flex flex-row items-center gap-2">
    <v-btn variant="tonal" height="35" density="comfortable" append-icon="mdi-download" class="text-none grow"
      rounded="md" color="#1fb829" type="submit" :loading="localLoadingState" @click="handleClickSubmit()">
      CSV
    </v-btn>
  </div>
</template>
