// 声明全局的 window ，不然使用 window.XX 时会报错
declare var window: Window;
declare var document: Document;
// declare var THREE: any;

// interface THREE extends Window {}

// declare module "element-ui/lib/transitions/collapse-transition";
// declare module "element-ui";

import Vue from "vue";
import VueRouter, { Route } from "vue-router";
import { Store } from "vuex";

declare module "vue/types/vue" {
  interface Vue {
    $router: VueRouter; // 这表示this下有这个东西
    $route: Route;
    $store: Store<any>;
    // $api: any;
  }
}