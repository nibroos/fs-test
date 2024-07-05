<script setup lang="ts">
// import {normalizeClass}
interface IProps {
  cta?: string
  noIcon?: boolean
  class?: string
  textClass?: string
  type?: 'button' | 'submit'
  icon?: string
  iconSize?: number | string
  disabled?: boolean
  loading?: boolean | undefined
  disabledTextClass?: string
  activateLoading?: boolean
  isLoadingDefault?: boolean
}

const props = withDefaults(defineProps<IProps>(), {
  cta: 'Back',
  noIcon: false,
  class: '',
  textClass: 'text-black',
  type: 'button',
  icon: 'mdi-keyboard-backspace',
  iconSize: 25,
  disabled: false,
  loading: false,
  disabledTextClass: '',
  activateLoading: false,
  isLoadingDefault: true
})

const mergedConfig = computed(() => {
  return props
})

const emits = defineEmits(['click', 'click:loading'])

const localLoadingState = ref<boolean | undefined>(false)
const localDisabled = ref<boolean>(false)
const localDisabledTextClass = ref<string>(props.disabledTextClass)
const handleClick = () => {
  if (localDisabled.value) return
  emits('click')
  emits('click:loading', true)

  if (!!props.activateLoading) {
    localLoadingState.value = true
    localDisabled.value = true

    if (props.isLoadingDefault) {
      setTimeout(() => {
        localLoadingState.value = false
        localDisabled.value = false
      }, 2000)
    }
  }

  // if (props.activateLoading) {
  // localLoadingState.value = true
  // localDisabled.value = true
  // console.log('localLoadingState.value', localLoadingState.value)
  // console.log('localDisabled.value', localDisabled.value)
  // }
}

watch(
  () => mergedConfig.value.loading,
  (newVal, oldVal) => {
    localLoadingState.value = newVal
    // if (newVal !== oldVal && typeof newVal === 'boolean') {
    //   localDisabled.value = newVal
    // }
    console.log('oldVal', oldVal, 'newVal mergedConfig', newVal)
  },
  { deep: true, immediate: true }
)

// watch(
//   () => props.loading,
//   (newVal, oldVal) => {
//     if (newVal !== oldVal) {
//       localLoadingState.value = props.loading
//       console.log('oldVal', oldVal, 'newVal', newVal)
//       console.log(props.loading, 'props.loading')
//     }
//   },
//   { deep: true, immediate: true }
// )

// watch(
//   () => localLoadingState.value,
//   (newVal, oldVal) => {
//     if (newVal !== oldVal) {
//       localDisabled.value = newVal !== undefined ? newVal : false

//       console.log('localLoadingsState.value watch', newVal)

//       emits('click:loading', newVal)
//     }
//   }
// )

watch(
  () => props.disabled,
  (newVal, oldVal) => {
    if (newVal !== oldVal) {
      localDisabled.value = newVal
    }
  }
)

watchEffect(() => {
  localLoadingState.value = mergedConfig.value.loading
})

onMounted(() => {})
</script>

<template>
  <button
    v-if="type == 'submit'"
    :class="
      classMerge(
        'cursor-pointer items-center p-3 transition-all ease-in-out hover:bg-zinc-100 sm:gap-x-1',
        props.class,
        `${localDisabled ? 'cursor-not-allowed' : ''}`
      )
    "
    @click="handleClick"
    :type="type"
    :disabled="localDisabled"
  >
    <v-icon :icon="props.icon" :size="iconSize" v-if="!props.noIcon" />

    <span
      :class="
        classMerge(
          'flex items-center justify-center font-medium transition-all ease-in-out',
          props.textClass,
          `${localDisabled && !!localDisabledTextClass ? localDisabledTextClass ?? 'text-zinc-400' : ''}`,
          `${localLoadingState ? 'flex-row gap-3' : ''}`
        )
      "
    >
      <v-progress-circular
        indeterminate
        size="20"
        v-if="localLoadingState"
      ></v-progress-circular>
      <span>
        {{ props.cta }}
      </span>
    </span>
  </button>
  <div
    v-else
    :class="
      classMerge(
        props.class,
        'cursor-pointer items-center p-2 transition-all ease-in-out hover:bg-zinc-100',
        `${localDisabled ? 'cursor-not-allowed' : ''}`
      )
    "
    @click="handleClick"
    :type="type"
    :disabled="localDisabled"
  >
    <v-icon :icon="props.icon" :size="iconSize" v-if="!props.noIcon" />
    <span
      :class="
        classMerge(
          'flex items-center justify-center font-medium transition-all ease-in-out',
          props.textClass,
          `${localDisabled && !!localDisabledTextClass ? localDisabledTextClass ?? 'text-zinc-400' : ''}`,
          `${localLoadingState ? 'flex-row gap-3' : ''}`
        )
      "
    >
      <v-progress-circular
        indeterminate
        size="20"
        v-if="localLoadingState"
      ></v-progress-circular>
      <span>
        {{ props.cta }}
      </span>
    </span>
  </div>
</template>
