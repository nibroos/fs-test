<script setup lang="ts">
import useLayoutsStore from '~/stores/configs/LayoutsStore';

definePageMeta({
  layout: 'authenticated' as any
})

const layoutStore = useLayoutsStore()
const { titlePath, subTitlePath, lastPathSegment, parentTitle, topTitle } =
  storeToRefs(layoutStore)

const isDark = usePreferredDark()
</script>

<template>
  <div>
    Welkam Nibros
  </div>
</template>