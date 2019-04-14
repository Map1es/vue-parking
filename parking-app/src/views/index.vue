<template>
  <div id="index">
    <router-view></router-view>
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o" to="home">首页</van-tabbar-item>
      <van-tabbar-item icon="search" to="search">发现</van-tabbar-item>
      <van-tabbar-item icon="friends-o" to="user">个人</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem, Search } from "vant";
export default {
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem
  },
  data() {
    return {
      value: "",
      active: 0
    };
  },
  mounted() {
    this.$nextTick(() => {
      let active = this.$route.path.slice(1);
      if (active == "home") {
        this.active = 0;
      } else if (active == "search") {
        this.active = 1;
      } else if (active == "user") this.active = 2;
    });
  }
};
</script>

<style lang="scss" scoped>
$blue: #2d8cf0;
#index {
  height: 100%;
  width: 100%;
}
.home-search {
  background: $blue !important;
}
</style>
