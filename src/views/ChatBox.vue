<template>
  <div class="chat-box">
    <div class="nav-container">
      <the-nav />
    </div>
    <div class="chat-message-container">
      <div class="chat-message--header">
        <el-input v-model="input" placeholder="搜索">
            <template slot="prepend">
              <i class="el-icon-search icon-style"/>
            </template>
        </el-input>
        <div class="create-groupchat">
          <i class="el-icon-plus icon-style" />
        </div>
      </div>
      <div class="chat-message--list">
        <div
            v-for="(item, index) in messageList" 
            :key="index"
            @click="toActive(index)">
          <message :message="item" />
        </div>
      </div>
    </div>
    <div class="chat-content-container">
      <div class="chat-content--header">
        <div class="tool-bar">
          <div class="tool-bar--item"><i class="el-icon-close" /></div>
          <div class="tool-bar--item"><i class="el-icon-full-screen" /></div>
          <div class="tool-bar--item"><i class="el-icon-minus" /></div>
        </div>
        <div class="title">腾讯新闻</div>
      </div>
      <div class="chat-content--content"></div>
      <div class="chat-content--input"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Message from '../components/chat/message.vue';
import TheNav from '../components/chat/TheNav.vue';
import { MessageItem } from '../types/index';
@Component({
  components: {
    Message,
    TheNav,
  },
})
export default class ChatBox extends Vue {
  // 消息列表
  private messageList: MessageItem[] = [
    {
      id: 1,
      name: '腾讯新闻',
      text: '习近平主持中央政治...',
      time: '00:00',
      active: false,
      icon: '',
    },
    {
      id: 2,
      name: '公司群',
      text: 'XXX：今天加班',
      time: '08:10',
      active: false,
      icon: '',
    },
    {
      id: 3,
      name: '微信运动',
      text: '[不支持类型消息]',
      time: '12:20',
      active: false,
      icon: '',
    },
    {
      id: 4,
      name: '文件传输助手',
      text: '[链接]',
      time: '02:55',
      active: false,
      icon: '',
    },
  ];

  private input: string = '';
  private mounted(): void {
  }
  public print(item: any): void {
    console.log(item);
    // console.log(types);

  }
  private toActive(index: number): void {
    console.log(this.messageList[index])
    this.messageList.forEach(item => item.active = false);
    this.messageList[index].active = true;
  }
}
</script>

<style lang="less">
  @search_height: 25px; 
  @search_color: #dbd9d8;
  @content_input_height: 180px;
  .chat-box {
    width: 820px;
    height: 600px;
    display: flex;
    border: 1px solid #eee;
    .nav-container {
      width: 60px;
      height: 100%;
      padding: 20px 5px 8px 5px;
      background-color: rgb(37,40,43);
    }
    .chat-message-container {
      width: 250px;
      height: 100%;
      background-color: rgb(237, 234, 232);
      .chat-message--header {
        .chat-header;
        padding-right: 13px;
        display: flex;
        .icon-style {
          font-size: 12px;
        }
        .el-input {
          width: calc(100% - 13px);
          padding: 0 11px 0 13px;
          &:focus-within {
            .el-input__inner {
              border: 1px solid @search_color;
              border-left: 0;
              background-color: #fff;
              &::placeholder {
                color: transparent;
              }
            }
            .el-input-group__prepend {
              background-color: #fff;
            }
          }
          .el-input__inner {
            height: @search_height;
            line-height: @search_height;
            background-color: @search_color;
            border: 1px solid @search_color;
            border-left: 0;
            padding: 0 5px 0 1px;
            font-size: 10px;
            &::placeholder {
              color: rgb(129,129,129);
            }
            &:hover {
              border: 1px solid @search_color;
              border-left: 0;
            }
          }
          .el-input-group__prepend {
            padding: 0 5px;
            background-color: @search_color;
            color: rgb(129,129,129);
          }
        }
        .create-groupchat {
          width: @search_height;
          height: @search_height;
          line-height: @search_height;
          border-radius: 3px;
          background-color: @search_color;
          text-align: center;
          background-color: rgb(220,217,216);
          &:hover {
            background-color: rgb(209,209,209);
          }
          .icon-style {
            font-size: 14px;
            color: #000;
          }
        }
      }
      .chat-message--list {
        width: 100%;
        height: calc(100% - 62px);
        .list-item {
          width: 100%;
          height: 64px;
          // &:focus {
          //   background-color: blue;
          // }
          &:hover {
            background-color: rgb(200,200,200);
          }
        }
      }
    }
    .chat-content-container {
      width: calc(100% - 60px - 250px);
      height: 100%;
      background-color: #fff;
      position: relative;
      .chat-content--header {
        border-bottom: 1px solid #eee;
        .chat-header;
        padding-top: 0;
        .tool-bar {
          width: 100%;
          height: 26px;
          // margin-bottom: 2px;
          display: flex;
          flex-direction: row-reverse;
          .tool-bar--item {
            .flex-center-center;
            width: 34px;
            height: 100%;
            font-size: 10px;
            &:hover {
              background-color: rgb(227,227,227);
            }
          }
        }
        .title {
          line-height: 22px;
          text-align: left;
          font-size: 18px;
          font-weight: 500;
          padding-left: 30px;
        }
      }
      .chat-content--content {
        width: 100%;
        height: calc(100% - 62px - @content_input_height);
        padding: 0 30px;
        background-color: yellow;
      }
      .chat-content--input {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: @content_input_height;
        background-color: green;
      }
    }
    .chat-header {
      height: 62px;
      padding-top: 25px;
      border-bottom: 1px solid #eee;
    }
  }

  .flex-center-center {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>