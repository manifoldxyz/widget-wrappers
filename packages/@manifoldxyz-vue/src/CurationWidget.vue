<script setup lang="ts">
import { computed } from 'vue';
import { CurationWidgetDataAttributes } from './shared/types';
import Widget from './Widget.vue';

interface Props extends CurationWidgetDataAttributes {
  version: string;
}
const props = defineProps<Props>();
const dataAttributes = computed(() => {
  const { version, ...rest } = props;

  return { ...rest, widget: 'm-curation', };
});
</script>
<template>
  <Widget :version="props.version" :data-attributes="dataAttributes"></Widget>
</template>
