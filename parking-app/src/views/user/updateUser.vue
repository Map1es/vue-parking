<template>
  <div id="userInfo">
    <van-nav-bar
      title="修改信息"
      left-arrow
      @click-left="onClickLeft"
      @click-right="sumbit"
      right-text="完成"
      fixed
    />
    <div class="userInfo-content">
      <van-cell-group label-align="right">
        <van-field v-model="user.name" clearable label="用户名"/>
        <van-field v-model="user.platenum" label="车牌号"/>
        <van-field v-model="user.phone" label="手机号"/>
        <van-field v-model="user.email" label="邮箱"/>
      </van-cell-group>
    </div>
  </div>
</template>

<script>
import { NavBar, Panel, Button, cell, Field, CellGroup, Toast } from "vant";
export default {
  components: {
    [NavBar.name]: NavBar,
    [Panel.name]: Panel,
    [Button.name]: Button,
    [cell.name]: cell,
    [Field.name]: Field,
    [CellGroup.name]: CellGroup,
    [Toast.name]: Toast
  },
  data() {
    return {
      url: this.$store.state.url1,
      userid: this.$store.state.userid,
      user: {}
    };
  },
   beforeCreate() {
    this.$store.dispatch("reflashSet");
  },
  created() {
    let _this = this;
    this.$store.dispatch("reflashSet");
    this.axios({
      url: _this.url + "user/getuserinfo",
      method: "get",
      params: {
        userid: _this.userid
      }
    })
      .then(res => {
        _this.user = res.data;
      })
      .catch(err => {
        console.log(err);
      });
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    sumbit() {
      let _this = this;
      this.axios({
        url: _this.url + "user/update",
        method: "get",
        params: {
          userid: _this.user.userid,
          platenum: _this.user.platenum,
          name: _this.user.name,
          phone: _this.user.phone,
          email: _this.user.email,
          username:_this.user.username,
          password:_this.user.password
        }
      })
        .then(res => {
          if (res.data == 1) {
            Toast({
              duration: 2000,
              message: "修改成功"
            });
            _this.$router.go(-1);
          }else{
              Toast({
              duration: 2000,
              message: "修改失败"
            }); 
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
$blue: #2d8cf0;
#userInfo {
  font-size: 0.24rem;
  background: #ebedf0;
}
.userInfo-content {
  margin-top: 0.84rem;
}
.cell-value {
  color: black;
}
</style>
