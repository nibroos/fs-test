<script setup lang="ts">
interface IProps {
  label?: string
  isLabel?: boolean
  class?: string | string[]
  textClass?: string | string[]
  isCheckBox?: boolean
  modelValue?: any
}
const props = withDefaults(defineProps<IProps>(), {
  label: 'Menu',
  class: '',
  isLabel: true,
  textClass: 'text-black',
  isCheckBox: false
})
const emit = defineEmits(['update:modelValue'])
const emitUpdateModelValue = (value: any) => {
  // Emit update:modelValue event with the new value
  emit('update:modelValue', value)
}
</script>
<template>
  <div :class="props.class">
    <div class="rounded-md border border-gray-600">
      <div class="bf-white  flex flex-col gap-3 rounded-md">
        <div class="flex  flex-row justify-between rounded-m"  :class="props.isLabel ? 'bg-gray-200 p-3' : ''">
          <div v-if="props.isLabel" class="text-overline">{{ props.label }}</div>
          <v-checkbox-btn
            v-if="props.isCheckBox"
            :model-value="props.modelValue"
            @update:model-value="emitUpdateModelValue"
            class="flex justify-end"
          />
        </div>
        <div class="p-4">
          <slot name="content" />
        </div>
      </div>
    </div>
  </div>
</template>
