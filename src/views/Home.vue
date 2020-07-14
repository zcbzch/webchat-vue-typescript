<!--
 * @Author: zch
 * @Date: 2020-07-15 00:26:03
 * @LastEditors: zch
 * @LastEditTime: 2020-07-15 00:26:48
 * @Description: 
--> 
<template>
  <div class="home">
    <the-header />
    <!-- <el-tag>home</el-tag> -->
    <el-button @click="$_test">test</el-button>
    <router-view />
    <!-- {{ $store.state.date }} -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TheHeader from '../components/TheHeader.vue';
import socket from '../utils/socket';
// import ChartBox from './ChatBox.vue';
@Component({
  components: {
    TheHeader,
    // ChatBox,
  },
})
export default class Home extends Vue {
  private socket: object = {};
  private mounted(): void {
    this.$store.state.date = new Date();
    // console.log(this.$route, this.$router.push, this.$store)
  }
  private $_test(): void {
    // https://stackoverflow.com/questions/29511404/connect-to-socket-io-server-with-specific-path-and-namespace
    this.socket = socket('http://localhost:3000/join', {
      path: '/socket'
    });
    console.log(this.socket)
    // this.socket.io.nsps
    this.socket.on('connect', () => {
      console.log(this.socket.id); // '/namespace#...'
    });
    this.socket.emit("common", 'i wanna join common chatting');
  }
}
</script>
