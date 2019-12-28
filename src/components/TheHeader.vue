<template>
  <div class="the-header">header</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({})
export default class TheHeader extends Vue {
  // @Prop() private msg!: string;

}
</script>

<style lang="less" scoped>
  .the-header {
    width: inherit;
    height: 48px;
    line-height: 48px;
    background-color: #000;
    color: #fff;
    opacity: 1;
  }
</style>