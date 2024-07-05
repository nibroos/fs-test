<script setup lang="ts">
type IProps = {
  config: {
    button: {
      pdf: {
        show: boolean
        cta: string
      }
      csv: {
        show: boolean
        cta: string
      }
      delete: {
        show: boolean
        cta: string
      }
      action: {
        cta: string
      }
    }
  }
}

const defaultProps: IProps = {
  config: {
    button: {
      pdf: {
        show: false,
        cta: 'Download PDF'
      },
      csv: {
        show: false,
        cta: 'Download CSV'
      },
      delete: {
        show: false,
        cta: 'Delete'
      },
      action: {
        cta: 'Action'
      }
    }
  }
}

const { config } = defineProps<IProps>()

function deepMerge(target: any, source: any) {
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

const mergedConfig = computed(() => deepMerge(defaultProps.config, config))

const emits = defineEmits(['click:pdf', 'click:csv', 'click:delete'])
const slots = useSlots()
</script>

<template>
  <v-menu transition="slide-y-transition">
    <template v-slot:activator="{ props }">
      <slot name="activator" v-bind="props" v-if="slots.activator" />

      <v-btn v-bind="props" elevation="0" variant="outlined" v-else>
        <template v-slot:prepend>
          <v-icon icon="mdi-menu-down" size="x-large"></v-icon>
        </template>
        {{ mergedConfig.button.action.cta }}
      </v-btn>
    </template>
    <v-list>
      <v-list-item
        v-if="mergedConfig.button.pdf.show"
        @click="emits('click:pdf')"
      >
        <v-list-item-title>{{ mergedConfig.button.pdf.cta }}</v-list-item-title>
      </v-list-item>
      <v-list-item
        v-if="mergedConfig.button.csv.show"
        @click="emits('click:csv')"
      >
        <v-list-item-title>{{ mergedConfig.button.csv.cta }}</v-list-item-title>
      </v-list-item>
      <v-list-item
        v-if="mergedConfig.button.delete.show"
        @click="emits('click:delete')"
      >
        <v-list-item-title>
          {{ mergedConfig.button.delete.cta }}
        </v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>
