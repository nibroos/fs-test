<script setup lang="ts">
interface IProps {
  parentPath?: string
  cta?: string
  noIcon?: boolean
  class?: string | string[]
  textClass?: string | string[]
}

const props = withDefaults(defineProps<IProps>(), {
  parentPath: '/dashboard',
  cta: 'Back',
  noIcon: false,
  class: '',
  textClass: 'text-black'
})
</script>

<template>
  <button
    :class="
      classMerge(
        'flex cursor-pointer items-center gap-x-2 border-solid p-2 transition-all ease-in-out hover:bg-zinc-100 sm:gap-x-1 md:gap-x-2',
        props.class
      )
    "
    @click="navigateTo(props.parentPath)"
  >
    <v-icon icon="mdi-keyboard-backspace" size="25" v-if="!props.noIcon" />
    <div :class="classMerge('font-medium', props.textClass)">
      {{ props.cta }}
    </div>
  </button>
</template>
