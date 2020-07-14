<template>
  <div class="the-input">
    <div class="input-tool">
      <div class="tool-left">
        <div class="item"><i class="el-icon-picture-outline-round" /></div>
        <div class="item"><i class="el-icon-folder" /></div>
        <div class="item"><i class="el-icon-scissors" /></div>
        <div class="item"><i class="el-icon-chat-dot-round" /></div>
      </div>
      <div class="tool-right"><i class="el-icon-phone-outline" /></div>
    </div>
    <textarea v-model="textInput" class="input-content" />
    <!-- <div v-model="textInput" class="input-content"></div> -->
    <div class="input-footer">
      <el-button size="mini" style="float:right" @click="$_send">发送(S)</el-button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';
@Component({})
export default class ChatBox extends Vue {
  private textInput: string = '';
  private $_send(): void {
    console.log(this.textInput);
  }
}
</script>

<style lang="less" scoped>
  @Padding: 0 30px;
  .the-input {
    width: 100%;
    height: 100%;
    background-color: #fff;
    .input-tool {
      height: 44px;
      padding: @Padding;
      padding-top: 16px;
      display: flex;
      justify-content: space-between;
      .icon-font {
        cursor: pointer;
        font-size: 20px;
      }
      .tool-left {
        display: flex;
        .item {
          margin-right: 12px;
          .icon-font;
        }
      }
      .tool-right {
        .icon-font;
      }
    }
    textarea {
      border: none;
      resize: none;
      &:focus {
        outline: none;
      }
    }
    .input-content {
      padding: @Padding;
      text-align: left;
      width: 100%;
      height: calc(100% - 40px - 40px);
      font-size: 14px;
      word-break: break-all;
      line-height: 20px;
      cursor: text;
      // .cursor-blink {
      //   width: 1px;
      //   height: 20px;
      //   display: inline-block;
      //   background-color: #000;
      //   position: absolute;
      //   animation: blink 1s steps(1) infinite;
      // }
    }
    .input-footer {
      height: 40px;
      padding: @Padding;
    }
  }
  @keyframes blink {
    0% { opacity: 1 }
    50% { opacity: 0 }
    100% { opacity: 1 }
  }
</style>