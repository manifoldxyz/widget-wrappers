<script setup lang="ts">
import { computed, onMounted } from 'vue';
import Widget from './Widget.vue';
import { MarketplaceWidgetDataAttributes } from './shared/types'

interface Props extends MarketplaceWidgetDataAttributes {
  version?: string,
}

const { version, ...dataAttributes} = defineProps<Props>();
</script>
<template>
  <Widget :version="version" :dataAttributes="dataAttributes"></Widget>
</template>
 