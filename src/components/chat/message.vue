<template>
  <div class="message" :class="{'message_active': message.active}">
  <!-- <div class="message" @click="print"> -->
    <div class="message-icon"></div>
    <div class="message-content">
      <div class="message-content--name">{{ message.name }}</div>
      <div class="message-content--time">{{ message.time }}</div>
      <div class="message-content--text">{{ message.text }}</div>
    </div>
    <div class="message-content">
      <!-- <div class="message-content--name">{{ active }}</div> -->
      <!-- <div class="message-content--text">{{ messageData }}</div> -->
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';
import { MessageItem } from '../../types/index';
@Component({})
export default class ChatBox extends Vue {
  // @Prop({ default: false }) active!: boolean
  // @Prop({ default: '' }) name!: string
  // @Prop({ default: '' }) text!: string
  // @Prop({ default: 0 }) id!: number
  @Prop({ default: {} }) message!: MessageItem
  @Watch('active')
  private printData1(val: boolean) {
    console.log(val);
    // console.log(this.messageData, this.active);
  }
  private mounted(): void {
    // console.log(MessageItem);
  }
}
</script>

<style lang="less" scoped>
  .message {
      width: 100%;
      height: 64px;
      padding: 0 12px;
      display: flex;
      align-items: center;
      cursor: default;
      position: relative;
      .message-icon {
        width: 40px;
        height: 40px;
        background-color: pink;
        border-radius: 1px;
      }
      .message-content {
        padding-left: 10px;
        text-align: left;
        // position: relative;
        .message-content--name {
          line-height: 22px;
          font-size: 14px;
          margin-bottom: 2px;
          color: #000;
        }
        .message-content--text {
          line-height: 16px;
          font-size: 12px;
          color: rgb(153, 161, 177);
        }
        .message-content--time {
          position: absolute;
          top: 12px;
          right: 12px;
          line-height: 22px;
          font-size: 12px;
          color: rgb(153, 161, 177);
        }
      }
      // &:focus {
        // background-color: rgb(200,200,200);
      // }
      &:hover {
        background-color: rgb(215,215,216);
      }
      &.message_active {
        background-color: rgb(200,200,200);
      }
  }
</style>