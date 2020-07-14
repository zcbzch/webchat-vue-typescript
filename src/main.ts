import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import https from './utils/https';
import socket from './utils/socket';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
Vue.config.productionTip = false;

Vue.prototype.$http = https;
Vue.prototype.$socket = socket;
// console.log(https());
// console.log(socket());
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
