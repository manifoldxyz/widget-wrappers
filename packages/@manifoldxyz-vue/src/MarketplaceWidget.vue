<script setup lang="ts">
import { computed } from 'vue';
import { MarketplaceWidgetDataAttributes } from './shared/types';
import Widget from './Widget.vue';

interface Props extends MarketplaceWidgetDataAttributes {
  version: string;
}
const props = defineProps<Props>();
const dataAttributes = computed(() => {
  const { version, ...rest } = props;

  return { ...rest, version: 1 };
});
</script>
<template>
  <Widget :version="props.version" :data-attributes="dataAttributes"></Widget>
</template>
