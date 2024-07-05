<template>
  <VueFinalModal
    v-model="isOpenParent"
    :name="props.name"
    :classes="['flex justify-center items-center']"
    :content-class="[
      'relative flex flex-col border dark:border-zinc-800 rounded-lg bg-white dark:bg-zinc-900 p-4 max-h-[52rem] overflow-hidden',
      props.customClass,
      size
    ]"
    :esc-to-close="props.escToClose"
    :focus-trap="props.focusTrap"
    :resize="props.resize"
    :resize-directions="['r', 'l']"
  >
    <div class="flex flex-col gap-3">
      <slot name="header">
        <div class="flex flex-row items-center justify-between">
          <h1
            class="text-lg font-semibold text-zinc-900"
            :class="[props.headerTextClass]"
          >
            <slot name="label">
              {{ props.label }}
            </slot>
          </h1>

          <div
            @click="onClickClose"
            class="cursor-pointer rounded-full p-1 transition-all duration-300 ease-in-out hover:bg-gray-200"
          >
            <Icon name="material-symbols:close-rounded" size="25" />
          </div>
        </div>
      </slot>

      <slot name="top"></slot>

      <div class="max-h-[35rem] overflow-y-auto">
        <slot></slot>
      </div>

      <slot name="footer"></slot>
    </div>
  </VueFinalModal>
</template>

<script setup lang="ts">
interface IProps {
  modelValue?: boolean
  isOpen?: boolean
  size?: string
  customClass?: string | string[]
  focusTrap?: boolean
  escToClose?: boolean
  resize?: boolean
  label?: string
  headerTextClass?: string | string[]
  name?: string
}
const props = withDefaults(defineProps<IProps>(), {
  modelValue: false,
  isOpen: false,
  size: 'w-max',
  customClass: '',
  focusTrap: true,
  escToClose: true,
  resize: true,
  label: '',
  headerTextClass: '',
  name: 'modal'
})

const emit = defineEmits(['update:isOpen', 'update:modelValue'])

const isOpenParent = ref(props.isOpen)

const size = ref('w-11/12')
if (props.size) {
  if (props.size == 'xl') {
    size.value = 'w-11/12'
  } else if (props.size == 'md') {
    size.value = 'lg:w-9/12 w-full'
  } else if (props.size == 'sm') {
    size.value = ' lg:w-8/12 w-full'
  } else if (props.size == 'xs') {
    size.value = 'lg:w-5/12 md:w-11/12 w-full'
  } else {
    size.value = props.size
  }
}

const slots = defineSlots()

const onClickClose = () => {
  isOpenParent.value = false

  emit('update:modelValue', false)
  emit('update:isOpen', false)
}

onMounted(() => {
  isOpenParent.value = props.isOpen
})

watch(
  () => props.isOpen,
  (newValue, oldValue) => {
    isOpenParent.value = newValue
  }
)

watch(
  () => isOpenParent.value,
  (newValue, oldValue) => {
    emit('update:modelValue', newValue)
    emit('update:isOpen', newValue)
  }
)
</script>
