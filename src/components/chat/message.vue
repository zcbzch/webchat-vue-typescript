<template>
  <div class="message" :class="{self: isSelf}">
    <div class="message-icon"></div>
    <div 
      class="message-text" 
      :class="isSelf ? 
      'message-text_right' : 'message-text_left'">
      <span class="message-text_font">{{ message.text }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';
import { MessageItem } from '../../types/index';
@Component({})
export default class ChatBox extends Vue {
  @Prop({ default: {} }) message!: MessageItem
  private myId: number = 1;
  get isSelf(): boolean {
    return this.message.id === this.myId;
  }
  private mounted(): void {
    // console.log(MessageItem);
  }
}
</script>

<style lang="less" scoped>
  .message {
    width: 100%;
    min-height: 34px;
    display: flex;
    margin: 16px 0;
    .message-icon {
      width: 34px;
      height: 34px;
      border-radius: 2px;
      background-color: pink;
    }
    .message-text {
      max-width: 178px;
      margin: 0 10px;
      padding: 5px 12px 8px 12px;
      border-radius: 3px;
      text-align: left;
      word-break: break-all;
      background-color: #fff;
      position: relative;
      .message-text_font {
        font-size: 14px;
      }
      &.message-text_left::before {
        content: '';
        width: 0;
        height: 0;
        border: 5px solid transparent;
        border-right: 5px solid #fff;
        position: absolute;
        left: -10px;
        top: 10px;
      }
      &.message-text_right::before {
        content: '';
        width: 0;
        height: 0;
        border: 5px solid transparent;
        border-left: 5px solid #fff;
        position: absolute;
        right: -10px;
        top: 10px;
      }
    }
  }
  .self {
    flex-direction: row-reverse;
  }
</style>