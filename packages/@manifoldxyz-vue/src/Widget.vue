<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { WidgetType } from './shared/types';
import { camelCaseToHyphenCase, loadWidget } from './shared/utils';

interface Props {
  widgetType: WidgetType;
  dataAttributes: { [key: string]: any };
  version?: string;
}

const props = defineProps<Props>();
const dataAttributesHyphenated = computed(() => {
  return Object.keys(props).reduce((acc: Partial<{ [key: string]: any }>, key) => {
    // @ts-ignore
    acc[`data-${camelCaseToHyphenCase(key)}`] = props[key];
    return acc;
  }, {} as Partial<{ [key: string]: any }>);
});

onMounted(() => {
  loadWidget(props.widgetType, props.version);
});
</script>
<template>
  <div v-bind="dataAttributesHyphenated"></div>
</template>
