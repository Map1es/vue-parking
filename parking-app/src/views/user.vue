<template>
  <div id="user">
    <div class="user-header">
      <router-link to="userInfo">
        <div>
          <van-icon name="manager"/>
        </div>
      </router-link>
      <span>
        <router-link to="userInfo">{{user.name}}</router-link>
      </span>
    </div>
    <div class="user-content">
      <van-cell title="账单" icon="balance-list" is-link to="list"/>
      <van-cell title="钱包" icon="card" is-link to="cost"/>
    </div>
    <div class="user-content">
      <van-cell title="退出登录" icon="setting" @click="loginOut"/>
    </div>
  </div>
</template>

<script>
import { Cell, CellGroup, Dialog, Icon } from "vant";
export default {
  components: {
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Dialog.name]: Dialog,
    [Icon.name]: Icon
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
    loginOut() {
      Dialog.confirm({
        title: "退出登录",
        message: "是否退出登录？"
      })
        .then(() => {
          this.$router.replace("login");
        })
        .catch(() => {});
    }
  }
};
</script>

<style lang="scss" scoped>
$blue: #2d8cf0;
.user-header {
  height: 4rem;
  background: $blue;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  div {
    width: 1.6rem;
    height: 1.6rem;
    line-height: 1.8rem;
    border-radius: 0.8rem;
    border: 0.02rem #f1f1f1 solid;
    color: #f1f1f1;
  }
  span {
    font-size: 0.32rem;
    margin-top: 0.3rem;
    color: white;
  }
  a:-webkit-any-link {
    color: white;
  }
}
.user-content {
  margin-bottom: 0.2rem;
}
</style>
