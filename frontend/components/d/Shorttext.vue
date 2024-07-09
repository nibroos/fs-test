<script setup lang="ts">
type IProps = {
  text?: string
  maxLength?: number
  startAlign?: string
}

const props = withDefaults(defineProps<IProps>(), {
  text: '',
  maxLength: 30,
  startAlign: 'left'
})

const formatString = computed(() => {
  if (props.text.length <= props.maxLength) {
    return props.text
  }

  if (props.startAlign === 'right') {
    return '...' + props.text.substring(props.text.length - props.maxLength)
  }

  return props.text.substring(0, props.maxLength) + '...'
})
</script>

<template>
  <span class="whitespace-nowrap" :title="props.text">
    {{ formatString }}
  </span>
</template>
