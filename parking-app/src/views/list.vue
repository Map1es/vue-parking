<template>
  <div id="list">
    <van-nav-bar title="账单" left-arrow @click-left="onClickLeft" fixed/>
    <div class="list-content">
      <van-panel
        :title="item.inTime.slice(0,10)"
        :status="(item.status==0)?'未支付':'已支付'"
        v-for="(item,index) in list"
        :key="index"
      >
        <div slot="footer">
          <div class="list-item">
            <span>入场时间：{{item.inTime}}</span>
            <span>出场时间：{{item.outTime}}</span>
            <span>消费金额：{{item.payment}}</span>
          </div>
          <div class="list-button">
            <van-button
              size="small"
              v-show="item.status==0"
              @click="pay(item.serialNumber,item.payment)"
            >完成支付</van-button>
            <van-button size="small" v-show="item.status==1" type="danger">删除订单</van-button>
          </div>
        </div>
      </van-panel>
    </div>
  </div>
</template>

<script>
import { NavBar, Panel, Button, Toast } from "vant";
export default {
  components: {
    [NavBar.name]: NavBar,
    [Panel.name]: Panel,
    [Button.name]: Button,
    [Toast.name]: Toast
  },
  data() {
    return {
      url: this.$store.state.url,
      url1: this.$store.state.url1,
      userid: this.$store.state.userid,
      list: {}
    };
  },
  beforeCreate() {
    this.$store.dispatch("reflashSet");
  },
  created() {
    let _this = this;
    this.axios({
      url: _this.url + "bill/info/queryList/user/" + _this.userid,
      method: "get"
    })
      .then(res => {
        _this.list = res.data.rows;
        for (let i = 0; i < _this.list.length; i++) {
          if (_this.list[i].inTime) {
            _this.list[i].inTime = _this.gettime(_this.list[i].inTime);
          }
          if (_this.list[i].outTime) {
            _this.list[i].outTime = _this.gettime(_this.list[i].outTime);
          } else {
            _this.list.splice(i, 1);
            i--;
          }
        }
        _this.list.sort((a, b) => {
          return a.status - b.status;
        });
      })
      .catch(err => {
        console.log(err);
      });
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    pay(id, money) {
      let _this = this;
      this.axios({
        url: _this.url1 + "user/deduct",
        method: "get",
        params: {
          userid: _this.userid,
          money: money
        }
      })
        .then(res => {
          if (res.data == 1) {
            _this
              .axios({
                url: _this.url + "bill/info/complete",
                method: "put",
                data: {
                  serialNumber: id,
                  paymentId: 0
                }
              })
              .then(res => {
                Toast({
                  duration: 2000,
                  message: "支付成功"
                });
                _this.$router.go(0);
              })
              .catch(err => {
                console.log(err);
              });
          } else {
            Toast({
              duration: 2000,
              message: "余额不足"
            });
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    gettime(t) {
      var _time = new Date(t);
      var year = _time.getFullYear();
      var month = _time.getMonth() + 1;
      var date = _time.getDate();
      var hour = _time.getHours();
      var minute = _time.getMinutes();
      var second = _time.getSeconds();
      return (
        year +
        "-" +
        month +
        "-" +
        date +
        " " +
        hour +
        ":" +
        minute +
        ":" +
        second
      ); //这里自己按自己需要的格式拼接
    }
  }
};
</script>

<style lang="scss" scoped>
$blue: #2d8cf0;
#list {
  font-size: 0.24rem;
  background: #ebedf0;
}
.list-content {
  margin-top: 0.84rem;
}
.van-panel {
  margin-bottom: 0.2rem;
}
.list-item {
  display: flex;
  flex-direction: column;
  height: 1.2rem;
  border-bottom: 0.01rem solid #ebedf0;
  span {
    margin-bottom: 0.05rem;
  }
}
.list-button {
  display: flex;
  justify-content: flex-end;
  margin-top: 0.2rem;
  .van-button:last-child {
    margin-left: 0.2rem;
  }
}
</style>
