// 消息栏 

////  单个对话
export interface DialogueItem {
  dialogue_id: number;
  name: string;
  text: string;
  time: string;
  active: boolean;
  icon: string;
}
////  单个消息
export interface MessageItem {
  user_id: number;
  icon: string;
  name: string;
  text: string;
  time: string;
}

// export interface scrollDom {
//   wrap: Document
// }
// export default {
//   MessageItem,
// }