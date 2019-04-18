<template>
  <div id="login">
    <van-nav-bar title="用户登录"/>
    <div class="login-content">
      <van-cell-group label-align="right">
        <van-field v-model="user.name" clearable label="用户名" placeholder="请输入用户名"/>
        <van-field v-model="user.password" type="password" label="密码" placeholder="请输入密码"/>
      </van-cell-group>
      <router-link to="registered" class="regist">新用户注册</router-link>
      <van-button type="info" @click="login">登录</van-button>
    </div>
  </div>
</template>

<script>
import { NavBar, Field, CellGroup, Button, Toast } from "vant";
export default {
  components: {
    [NavBar.name]: NavBar,
    [Field.name]: Field,
    [CellGroup.name]: CellGroup,
    [Button.name]: Button,
    [Toast.name]: Toast
  },
  data() {
    return {
      url: this.$store.state.url1,
      user: {
        name: "",
        password: ""
      }
    };
  },
  methods: {
    login() {
      let _this = this;
      if (this.user.name == "") {
        Toast({
          duration: 2000,
          message: "用户名不能为空"
        });
      } else if (this.user.password == "") {
        Toast({
          duration: 2000,
          message: "密码不能为空"
        });
      } else {
        this.axios({
          url: _this.url + "user/login",
          method: "get",
          params: {
            username: _this.user.name,
            password: _this.user.password
          }
        })
          .then(res => {
            if (res.data == 0) {
              Toast({
                duration: 2000,
                message: "账号不存在"
              });
            } else if (res.data == -1) {
              Toast({
                duration: 2000,
                message: "密码错误"
              });
            } else {
              window.localStorage.setItem("userid", res.data);
              _this.$store.dispatch("reflashSet");
              console.log(res.data);
              _this.$router.replace("home");
            }
          })
          .catch(err => {
            console.log(err);
          });
      }
    }
  }
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
