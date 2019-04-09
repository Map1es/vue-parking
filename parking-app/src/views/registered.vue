<template>
  <div id="login">
    <van-nav-bar left-arrow @click-left="onClickLeft" title="用户注册"/>
    <div class="login-content">
      <van-cell-group label-align="right">
        <van-field v-model="user.name" clearable label="用户名" placeholder="请输入用户名"/>
        <van-field v-model="user.password" type="password" label="密码" placeholder="请输入密码"/>
        <van-field v-model="user.tel"  label="手机号" placeholder="请输入手机号"/>
      </van-cell-group>
      <van-button type="info" to="login">确认</van-button>
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
        password: "",
        tel:""
      }
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="scss" scoped>
$blue: #2d8cf0;
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
.regist {
  align-self: flex-end;
  font-size: 0.24rem;
  color: $blue;
  margin-right: 0.2rem;
  margin-top: 0.2rem;
}
.van-button {
  margin-top: 0.3rem;
  width: 90%;
}
</style>
