<template>
  <el-dialog 
    title="登录" 
    class="login" 
    :visible.sync="dialogVisible">
  </el-dialog>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
// import ChartBox from './ChatBox.vue';
@Component({
  components: {
    // TheHeader,
    // ChatBox,
  },
})
export default class Home extends Vue {
  private dialogVisible: boolean = true;
  private mounted(): void {
    // this.$store.state.date = new Date();
    // console.log(this.$route, this.$router.push, this.$store)
  }
}
</script>

<style lang="less" scoped>
  .login {
    width: 500px;
    // height: 400px;
  }
</style>