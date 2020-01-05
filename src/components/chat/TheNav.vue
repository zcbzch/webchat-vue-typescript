<template>
  <div class="the-nav">
    <div class="nav_top">
      <el-image 
        class="nav-icon"
        fit="cover"
        :src="icon ?
          icon :
          require('../../assets/icon_default.jpg')"></el-image>
      <div class="nav-item" :class="{'nav_active': true}">
        <i class="el-icon-chat-line-round" />
      </div>
      <div class="nav-item" :class="{'nav_active': active}">
        <i class="el-icon-s-check" />
      </div>
      <div class="nav-item" :class="{'nav_active': active}">
        <i class="el-icon-star-off" />
      </div>
      <div class="nav-item" :class="{'nav_active': active}">
        <i class="el-icon-folder-remove" />
      </div>
    </div>
    <div class="nav_bottom">
      <div class="nav-item nav-item_bottom">
        <i class="el-icon-mobile" />
      </div>
      <div class="nav-item nav-item_bottom">
        <i class="el-icon-more" />
      </div>
    </div>
      <!-- <div></div> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';
// import { MessageItem } from '../../types/index';
@Component({})
export default class ChatBox extends Vue {
  private active: boolean = false;
  // @Prop({ default: {} }) message!: MessageItem
  private username: string = '';
  private nickname: string = '';
  // private icon: string = 'https://upload.wikimedia.org/wikipedia/zh/a/af/WeChat_logo.svg';
  private icon: string = '';
  private user_id: number = 0;
  // @Watch('active')
  private getUserInfo(): void {

  }
  private mounted(): void {
    // console.log(MessageItem);
  }
}
</script>

<style lang="less" scoped>
  .the-nav {
    height: 100%;
    position: relative;
    .nav_top {

    }
    .nav_bottom {
      position: absolute;
      bottom: 0;
    }

    .nav-icon {
      width: 34px;
      height: 34px;
      margin: auto;
      margin-bottom: 20px;
      border-radius: 2px;
      // background-color: transparent;
    }
    .nav-item {
      width: 50px;
      height: 40px;
      margin: 9px 0;
      padding: 0 5px;
      // background-color: red;
      background-color: transparent;
      cursor: pointer;
      line-height: 40px;
      font-size: 26px;
      color: grey;
      &:hover {
        color: #eee;
      }
      &.nav_active {
        color: green;
      }
      &.nav-item_bottom {
        height: 32px;
        margin: 5px auto;
        font-size: 20px;
      }
    }
  }
</style>