<template>
  <div id="userInfo">
    <van-nav-bar
      title="基本信息"
      left-arrow
      @click-left="onClickLeft"
      @click-right="update"
      right-text="修改"
      fixed
    />
    <div class="userInfo-content">
      <van-cell title="账户名" value-class="cell-value" :value="user.name"/>
      <van-cell title="车牌号" value-class="cell-value" :value="user.platenum"/>
      <van-cell title="手机号" value-class="cell-value" :value="user.phone"/>
      <van-cell title="邮箱" value-class="cell-value" :value="user.email"/>
    </div>
  </div>
</template>

<script>
import { NavBar, Panel, Button, cell } from "vant";
export default {
  components: {
    [NavBar.name]: NavBar,
    [Panel.name]: Panel,
    [Button.name]: Button,
    [cell.name]: cell
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
    update(){
        this.$router.push('updateUser');
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
