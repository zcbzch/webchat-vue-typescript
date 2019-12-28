<template>
  <div class="home">
    <the-header />
    <!-- <el-tag>home</el-tag> -->
    <router-view />
    {{ $store.state.date }}

  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TheHeader from '../components/TheHeader.vue';
// import ChartBox from './ChatBox.vue';
@Component({
  components: {
    TheHeader,
    // ChatBox,
  },
})
export default class Home extends Vue {
  private mounted(): void {
    this.$store.state.date = new Date();
    // console.log(this.$route, this.$router.push, this.$store)
  }
}
</script>
