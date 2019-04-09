<template>
  <div id="login">
    <van-nav-bar title="用户登录"/>
    <div class="login-content">
      <van-cell-group label-align="right">
        <van-field v-model="user.name" clearable label="用户名" placeholder="请输入用户名"/>
        <van-field v-model="user.password" type="password" label="密码" placeholder="请输入密码"/>
      </van-cell-group>
      <router-link to="registered" class="regist">新用户注册</router-link>
      <van-button type="info" to="home">登录</van-button>
    </div>
  </div>
</template>

<script>
import { NavBar, Field, CellGroup, Button } from "vant";
export default {
  components: {
    [NavBar.name]: NavBar,
    [Field.name]: Field,
    [CellGroup.name]: CellGroup,
    [Button.name]: Button
  },
  data() {
    return {
      user: {
        name: "",
        password: ""
      }
    };
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
$blue: #2d8cf0;
.van-nav-bar {
  background: $blue;
}
.van-nav-bar__title {
  color: white !important;
}
.login-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
}
.van-cell-group {
  width: 100%;
}
.regist{
  align-self: flex-end;
  font-size: .24rem;
  color: $blue;
  margin-right: .2rem;
  margin-top: .2rem;
}
.van-button {
  margin-top: 0.3rem;
  width: 90%;
}
</style>
