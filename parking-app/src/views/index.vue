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
import { Tabbar, TabbarItem } from "vant";
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
