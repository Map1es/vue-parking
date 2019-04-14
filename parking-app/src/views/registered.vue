<template>
  <div id="login">
    <van-nav-bar left-arrow @click-left="onClickLeft" title="用户注册"/>
    <div class="login-content">
      <van-cell-group label-align="right">
        <van-field v-model="user.username" clearable label="账号" placeholder="请输入账号"/>
        <van-field v-model="user.password" type="password" label="密码" placeholder="请输入密码"/>
        <van-field v-model="user.name"  label="车主姓名" placeholder="请输入姓名"/>
        <van-field v-model="user.phone" label="手机号" placeholder="请输入手机号"/>
        <van-field v-model="user.platenum" label="车牌号" placeholder="请输入车牌号"/>
      </van-cell-group>
      <van-button type="info" @click="sumbit">确认</van-button>
    </div>
  </div>
</template>

<script>
import { NavBar, Field, CellGroup, Button,Toast } from "vant";
export default {
  components: {
    [NavBar.name]: NavBar,
    [Field.name]: Field,
    [CellGroup.name]: CellGroup,
    [Button.name]: Button,
    [Toast.name]: Toast,
  },
  data() {
    return {
      url: this.$store.state.url1,
      user: {
        name: "",
        password: "",
        username: "",
        phone: "",
        platenum: ""
      }
    };
  },
  methods: {
    sumbit() {
      let _this = this;
      if (this.user.userName == "") {
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
          url: _this.url + "user/register",
          method: "get",
          params: {
            username: _this.user.username,
            password: _this.user.password,
            name: _this.user.name,
            phone: _this.user.phone,
            platenum: _this.user.platenum
          }
        })
          .then(res => {
            console.log(res);
            if (res.status == 200) {
              _this.$router.replace("login");
            }else{
              Toast({
                duration: 2000,
                message: "注册失败"
              });
            }
          })
          .catch(err => {
           Toast({
                duration: 2000,
                message: "注册失败"
              });
            console.log(err);
          });
      }
    },
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
