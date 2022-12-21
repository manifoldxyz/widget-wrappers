<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { ConnectProps } from './shared/types';
import { camelCaseToHyphenCase, loadConnectWidget } from './shared/utils';

// Can't use defineProps directly imported from another file. Vue is.. interesting.
// https://github.com/vuejs/core/issues/4294
interface Props extends ConnectProps {}

const props = defineProps<Props>();

const propsAsDataAttributes = computed(() => {
  return Object.keys(props).reduce((acc: Partial<ConnectProps>, key) => {
    // @ts-ignore
    acc[`data-${camelCaseToHyphenCase(key)}`] = props[key];
    return acc;
  }, {} as Partial<ConnectProps>);
});

onMounted(() => {
  loadConnectWidget();
});
</script>
<template>
  <div data-widget="m-connect" v-bind="propsAsDataAttributes"></div>
</template>
