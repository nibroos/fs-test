<script setup lang="ts">
import type { VAutocomplete } from 'vuetify/components'
import type {
  Field,
  GeneratedFields,
  GeneratedField,
  GeneratedMethodsType,
  MethodAttributeType,
  ModelFormType,
  ModelFormInputType
} from '~/types/DatatableClientType'

import type { FormType, FormTypeOptionsType } from '~/types/FormType'

type Density = VAutocomplete['$props']['density']

const defaultProps: FormType = {
  title: '',
  type: 'create',
  fields: [],
  actions: {
    confirmText: 'Create',
    cancelText: 'Cancel',
    contentClass: 'w-full',
    confirmClass: 'w-2/3',
    cancelClass: 'w-1/3',
    confirmTextClass: 'text-white text-lg',
    cancelTextClass: 'text-rose-700 text-lg'
  }
} as unknown as FormType

const props = defineProps<FormType>()

const deepMerge = (target: any, source: any): FormType => {
  if (typeof target !== 'object' || typeof source !== 'object') return source
  Object.keys(source).forEach((key) => {
    const targetValue = target[key]
    const sourceValue = source[key]
    if (Array.isArray(targetValue) && Array.isArray(sourceValue)) {
      target[key] = [...targetValue, ...sourceValue]
    } else if (
      typeof targetValue === 'object' &&
      typeof sourceValue === 'object'
    ) {
      target[key] = deepMerge(Object.assign({}, targetValue), sourceValue)
    } else {
      target[key] = sourceValue
    }
  })
  return target
}

const mergedConfig = ref<FormType>(deepMerge(defaultProps, props))

const title = ref(mergedConfig.value.title)
const slots = useSlots()

const emits = defineEmits(['click:submit', 'click:cancel'] as {
  [key: string]: any
})

const guardObjectType = (value: any): value is object => {
  return value && typeof value === 'object'
}

// const displayColumn = (header: Field, value: any): any => {
//   let display = ''
//   let inputType = header.methods[mergedConfig.value.type].

//   if (value === null || value === undefined || value === '') {
//     return '-'
//   }

//   if (inputType == 'reference') {
//     // console.log('displayColumn', header, value, type)

//     display = value

//     if (
//       guardObjectType(header.methods?.index) &&
//       (guardObjectType(header.methods?.index?.reference) ||
//         !!header.methods?.index?.reference)
//     ) {
//       let refOptions = header.methods?.index.reference.options as Record<
//         string,
//         any
//       >
//       let refLabel = header.methods?.index.reference.label ?? 'name'
//       let refKey = header.methods?.index.reference.key ?? 'id'

//       let refSelected = refOptions.find(
//         (option: any) => option[refKey] == value
//       )

//       // console.log('refSelected', refSelected, refLabel, value)

//       // display = refSelected ? refSelected[refLabel] : value
//       display = splitLabelComplex(refSelected, refLabel)
//     }
//   } else {
//     display = value
//   }

//   return display
// }

const handleSubmit = (actions: FormType['actions'], type: FormType['type']) => {
  emits('click:submit', { actions, type, fields: mergedConfig.value.fields })
}

const handleBack = (actions: FormType['actions']) => {
  emits('click:cancel', { actions })
}

watchEffect(() => {
  mergedConfig.value = deepMerge(defaultProps, props)
})
</script>
<template>
  <form
    @submit.prevent="handleSubmit(mergedConfig.actions, mergedConfig.type)"
    :class="['flex flex-col gap-5', mergedConfig?.class ?? '']"
  >
    <slot :name="`content`" v-bind="{ actions: mergedConfig.actions }">
      <!-- <div
        v-for="(modelForm, keyModelForm, iModelForm) in filteredModalForms"
        :key="keyModelForm"
      >
        <div
          v-if="
            isColumnDisplay(modelForm.headerOptions, 'text', mergedConfig.type)
          "
        >
          <d-text-input
            v-model="modelForm.payload"
            :label="modelForm.headerOptions.title"
          />
        </div>
        <div
          v-if="
            isColumnDisplay(modelForm.headerOptions, 'view', mergedConfig.type)
          "
        >
          {{ modelForm.headerOptions.title }}
        </div>
        <div
          v-if="
            isColumnDisplay(
              modelForm.headerOptions,
              'disabled',
              mergedConfig.type
            )
          "
        >
          <d-text-input
            v-model="modelForm.payload"
            :label="modelForm.headerOptions.title"
            :disabled="true"
          />
        </div>
        <div
          v-if="
            isColumnDisplay(
              modelForm.headerOptions,
              'autocomplete-client',
              mergedConfig.type
            )
          "
        >
          <d-autocomplete-client
            v-model="modelForm.payload"
            :label="modelForm.headerOptions.title"
            :items="modelForm.headerOptions.methods[key]?.others?.items"
            :item-title="
              modelForm.headerOptions.methods[key]?.others?.itemTitle ?? 'name'
            "
            :item-value="
              modelForm.headerOptions.methods[key]?.others?.itemValue ?? 'id'
            "
          />
        </div>
        <div
          v-if="
            isColumnDisplay(modelForm.headerOptions, 'date', mergedConfig.type)
          "
        >
          <d-date-picker-light
            v-model="modelForm.payload"
            :label="modelForm.headerOptions.title"
            :dp-class="modelForm.headerOptions.methods[key]?.others?.dpClass"
            :clearable="modelForm.headerOptions.methods[key]?.others?.clearable"
            :placeholder="modelForm.headerOptions.placeholder"
            :density="modelForm.headerOptions.methods[key]?.others?.density"
            :variant="modelForm.headerOptions.methods[key]?.others?.variant"
          ></d-date-picker-light>
        </div>
        <div
          v-if="
            isColumnDisplay(
              modelForm.headerOptions,
              'datetime',
              mergedConfig.type
            )
          "
        >
          {{ modelForm.headerOptions.title }}
        </div>
        <div
          v-if="
            isColumnDisplay(
              modelForm.headerOptions,
              'currency',
              mergedConfig.type
            )
          "
        >
          {{ modelForm.headerOptions.title }}
        </div>
        <div
          v-if="
            isColumnDisplay(
              modelForm.headerOptions,
              'number',
              mergedConfig.type
            )
          "
        >
          {{ modelForm.headerOptions.title }}
        </div>
        <div
          v-if="
            isColumnDisplay(
              modelForm.headerOptions,
              'boolean',
              mergedConfig.type
            )
          "
        >
          {{ modelForm.headerOptions.title }}
        </div>
        <div
          v-if="
            isColumnDisplay(modelForm.headerOptions, 'image', mergedConfig.type)
          "
        >
          {{ modelForm.headerOptions.title }}
        </div>
      </div> -->
    </slot>

    <slot :name="`footer`" v-bind="{ actions: mergedConfig.actions }">
      <div class="flex w-full items-center gap-3 pt-3">
        <d-button
          v-if="!slots[`cancel`]"
          @click="handleBack(mergedConfig.actions)"
          :class="[
            'grow justify-center rounded-lg !border !border-solid !border-rose-700 py-2 !text-rose-700 transition-all ease-in-out hover:!bg-rose-50',
            mergedConfig.actions?.cancelClass ?? ''
          ]"
          :text-class="[
            mergedConfig.actions?.cancelTextClass ?? 'text-rose-700 text-lg'
          ]"
          :cta="mergedConfig.actions?.cancelText"
          type="submit"
          :no-icon="true"
        ></d-button>

        <slot
          v-else
          :name="`cancel`"
          v-bind="{ actions: mergedConfig.actions }"
          class="grow"
        ></slot>

        <d-button
          v-if="!slots[`confirm`]"
          :class="[
            ' w-2/3 justify-center rounded-lg !bg-[#4094D4] py-2 text-white transition-all ease-in-out hover:!bg-[#3882ba]',
            mergedConfig.actions?.confirmClass ?? ''
          ]"
          :text-class="[
            mergedConfig.actions?.confirmTextClass ?? 'text-white text-lg'
          ]"
          :cta="mergedConfig.actions?.confirmText"
          @click="handleSubmit(mergedConfig.actions, mergedConfig.type)"
          type="submit"
          :no-icon="true"
        ></d-button>
        <slot
          v-else
          :name="`confirm`"
          v-bind="{ actions: mergedConfig.actions }"
        ></slot>
      </div>
    </slot>
  </form>
</template>
