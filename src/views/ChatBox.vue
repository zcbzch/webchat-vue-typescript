<template>
  <div class="chat-box">
    <div class="nav-container">
      <the-nav />
    </div>
    <div class="chat-dialogue-container">
      <div class="chat-dialogue--header">
        <el-input v-model="input" placeholder="搜索">
            <template slot="prepend">
              <i class="el-icon-search icon-style"/>
            </template>
        </el-input>
        <div class="create-groupchat">
          <i class="el-icon-plus icon-style" />
        </div>
      </div>
      <div class="chat-dialogue--list">
        <div
            v-for="(item, index) in filterDialogueList" 
            :key="index"
            @click="toActive(index)">
          <dialogue :dialogue="item" />
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

      <el-scrollbar class="chat-content--content" ref="scrollbar_chatContent">
        <div class="content-container">
          <message 
            v-for="(item, index) in messageList" 
            :key="index"
            :message="item" />
        </div>
      </el-scrollbar>

      <div class="chat-content--input">
        <the-input /> 
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Dialogue from '../components/chat/dialogue.vue';
import Message from '../components/chat/message.vue';
import TheNav from '../components/chat/TheNav.vue';
import TheInput from '../components/chat/TheInput.vue';
import { DialogueItem, MessageItem } from '../types/index';
// import { MessageItem } from '../types/index';
@Component({
  components: {
    Dialogue,
    Message,
    TheNav,
    TheInput,
  },
})
export default class ChatBox extends Vue {
  // 对话列表
  private dialogueList: DialogueItem[] = [
    {
      dialogue_id: 1,
      name: '腾讯新闻',
      text: '习近平主持中央政治...',
      time: '00:00',
      active: false,
      icon: '',
    },
    {
      dialogue_id: 2,
      name: '公司群',
      text: 'XXX：今天加班',
      time: '08:10',
      active: false,
      icon: '',
    },
    {
      dialogue_id: 3,
      name: '微信运动',
      text: '[不支持类型消息]',
      time: '12:20',
      active: false,
      icon: '',
    },
    {
      dialogue_id: 4,
      name: '文件传输助手',
      text: '[链接]',
      time: '02:55',
      active: false,
      icon: '',
    },
  ];
  // 消息
  private messageList: MessageItem[] = [
    {
      user_id: 1,
      name: '小明',
      icon: '',
      text: '12月28日习近平主持中央政治局专题民主生活会',
      time: '00:00',
    },
    {
      user_id: 2,
      name: '小刚',
      icon: '',
      text: '会议内容是',
      time: '00:10',
    },
    {
      user_id: 3,
      name: '小正',
      icon: '',
      text: '[不支持类型消息]',
      time: '1:20',
    },
    {
      user_id: 4,
      name: '小虎',
      icon: '',
      text: '中央政治局的同志要从严要求自己，时刻自重自省自警自励，做到慎独慎初慎微慎友。要从自身做起，不断自我净化，修身律己、廉洁齐家，管好亲友和身边工作人员。',
      time: '02:55',
    },
    {
      user_id: 5,
      name: '小红',
      icon: '',
      text: '习近平强调，在这次专题民主生活会上，中央政治局的同志主动找差距、找不足，就做好工作提了许多很好的意见和建议，有的涉及中央工作，有的涉及部门工作，有的涉及地方工作，会后要抓紧研究、拿出举措、改进工作，务求取得实效',
      time: '02:55',
    },
    {
      user_id: 0,
      name: '老王',
      icon: '',
      text: '大佬666',
      time: '7:35',
    },
  ];

  private input: string = '';
  get filterDialogueList(): DialogueItem[] {
    if (!this.input) return this.dialogueList;
    return this.dialogueList.filter(item => {
      return item.name.indexOf(this.input) >= 0 || item.text.indexOf(this.input) >= 0
    });
  }
  private mounted(): void {
    this.initScroll('scrollbar_chatContent', 'bottom');
  }
  public print(item: any): void {
    console.log(item);
    // console.log(types);

  }
  // 选择会话
  private toActive(index: number): void {
    console.log(this.dialogueList[index])
    this.dialogueList.forEach(item => item.active = false);
    this.dialogueList[index].active = true;
  }
  private initScroll(ref: string, position?: string): void {
    // console.log(this.$refs, this.$refs[ref]);
    if (position == 'bottom') {
      // @ts-ignore：wrap不在Vue对象上
      const element = this.$refs[ref]['wrap'];
      // const element = (<scrollDom>this.$refs[ref])['wrap'];
      this.$nextTick(() => {
        element.scrollTop = element.scrollHeight;
      })
    }
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
    .chat-dialogue-container {
      width: 250px;
      height: 100%;
      background-color: rgb(237, 234, 232);
      .chat-dialogue--header {
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
      .chat-dialogue--list {
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
      // background-color: #fff;
      background-color: rgb(245, 245, 245);
      position: relative;
      .chat-content--header {
        border-bottom: 1px solid rgb(231, 231, 231);
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
        .el-scrollbar__wrap {
          overflow-x: hidden;
        }
        .content-container {
          padding: 0 30px;
        }
      }
      .chat-content--input {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: @content_input_height;
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