<template>
  <div class="flex w-full flex-col">
    <div class="w-full">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import useLayouts from '~/stores/configs/layouts'
// const drawer = ref(undefined || true);

const layoutState = useLayouts()
const { titlePath, subTitlePath, lastPathSegment, parentTitle, topTitle } =
  storeToRefs(layoutState)

const configs = ref({
  titlePath: titlePath,
  subTitlePath: subTitlePath,
  lastPathSegment: lastPathSegment,
  parentTitle: 'Management',
  topTitle: topTitle
})

watchEffect(() => {
  layoutState.defineTitlePath(configs.value)
})

onMounted(() => {
  layoutState.defineTitlePath(configs.value)
})
// const router = useRoute()
// const routePath = router.path
// const pathArray = routePath.split('/')
// const titlePath = pathArray[1]
// const subTitlePath = pathArray[3]
// const lastPathSegment = pathArray[pathArray.length - 1].replace(/-/g, ' ')
</script>
