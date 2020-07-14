<template>
  <div class="the-header">header
    <el-link type="primary" @click="loginVisible = true" size="mini">登录</el-link>
    
    <el-dialog 
      title="登录" 
      width="400px"
      :visible.sync="loginVisible">
      <div style="padding:0 30px;text-align:right">
        <el-input v-model="username"></el-input>
        <el-input v-model="password" show-password></el-input>
        <el-button style="margin-top:20px">登录</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({})
export default class TheHeader extends Vue {
    private loginVisible: boolean = false;
    private username: string = '';
    private password: string = '';

  // @Prop() private msg!: string;

}
</script>

<style lang="less" scoped>
  .the-header {
    width: inherit;
    height: 48px;
    line-height: 48px;
    padding: 0 10px;
    background-color: #000;
    color: #fff;
    opacity: 1;
    display: flex;
    justify-content: space-between;
  }
</style>