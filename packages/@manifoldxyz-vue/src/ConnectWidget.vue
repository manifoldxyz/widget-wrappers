<script setup lang="ts">
import { computed } from 'vue';
import { ConnectWidgetDataAttributes } from './shared/types';
import Widget from './Widget.vue';

interface Props extends ConnectWidgetDataAttributes {
  version: string;
}
const props = defineProps<Props>();
const dataAttributes = computed(() => {
  return {
    ...props,
    widget: 'm-connect',
  };
});
</script>
<template>
  <Widget :version="props.version" :data-attributes="dataAttributes"></Widget>
</template>
