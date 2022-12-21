<template>
  <div data-widget="m-connect" v-bind="propsAsDataAttributes"></div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { ConnectProps } from './shared/types';
import { camelCaseToHyphenCase, loadConnectWidget } from './shared/utils';

@Component
export default class ConnectWidget extends Vue {
  mounted() {
    loadConnectWidget();
  }

  get propsAsDataAttributes() {
    return Object.keys(this.$props).reduce((acc: Partial<ConnectProps>, key) => {
      // @ts-ignore
      acc[`data-${camelCaseToHyphenCase(key)}`] = props[key];
      return acc;
    }, {} as Partial<ConnectProps>);
  }
}
</script>
