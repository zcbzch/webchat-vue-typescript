// 消息栏 
////  单个对话
export interface DialogueItem {
  id: number;
  name: string;
  text: string;
  time: string;
  active: boolean;
  icon: string;
}
////  单个消息
export interface MessageItem {
  id: number;
  icon: string;
  name: string;
  text: string;
  time: string;
}
// export default {
//   MessageItem,
// }