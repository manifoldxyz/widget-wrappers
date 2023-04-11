<script setup lang="ts">
import { computed } from 'vue';
import { RestrictedTokenWidgetDataAttributes } from './shared/types';
import Widget from './Widget.vue';

interface Props extends RestrictedTokenWidgetDataAttributes {
  version: string;
}
const props = defineProps<Props>();
const dataAttributes = computed(() => {
  return {
    ...props,
  };
});
</script>
<template>
  <Widget :version="props.version" :data-attributes="dataAttributes"></Widget>
</template>
