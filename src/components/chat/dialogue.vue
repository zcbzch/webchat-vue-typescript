<template>
  <div class="dialogue" :class="{'dialogue_active': dialogue.active}">
    <div class="dialogue-icon"></div>
    <div class="dialogue-content">
      <div class="dialogue-content--name">{{ dialogue.name }}</div>
      <div class="dialogue-content--time">{{ dialogue.time }}</div>
      <div class="dialogue-content--text">{{ dialogue.text }}</div>
    </div>
    <div class="dialogue-content">

    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';
import { DialogueItem } from '../../types/index';
@Component({})
export default class ChatBox extends Vue {
  @Prop({ default: {} }) dialogue!: DialogueItem
  @Watch('active')
  private printData1(val: boolean) {
    console.log(val);
  }
  private mounted(): void {
    // console.log(MessageItem);
  }
}
</script>

<style lang="less" scoped>
  .dialogue {
      width: 100%;
      height: 64px;
      padding: 0 12px;
      display: flex;
      align-items: center;
      cursor: default;
      position: relative;
      .dialogue-icon {
        width: 40px;
        height: 40px;
        background-color: pink;
        border-radius: 1px;
      }
      .dialogue-content {
        padding-left: 10px;
        text-align: left;
        // position: relative;
        .dialogue-content--name {
          line-height: 22px;
          font-size: 14px;
          margin-bottom: 2px;
          color: #000;
        }
        .dialogue-content--text {
          line-height: 16px;
          font-size: 12px;
          color: rgb(153, 161, 177);
        }
        .dialogue-content--time {
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
      &.dialogue_active {
        background-color: rgb(200,200,200);
      }
  }
</style>