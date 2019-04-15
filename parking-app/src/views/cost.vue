<template>
  <div id="cost">
    <van-nav-bar title="钱包" left-arrow @click-left="onClickLeft" fixed/>
    <div class="cost-content">
      <van-cell title="余额" icon="gold-coin" is-link :value="user.accountbalance+'元'"/>
      <van-cell title="积分" icon="card" is-link :value="user.bonuspoints+'分'"/>
      <van-cell title="优惠劵" icon="coupon" is-link value="无优惠券"/>
      <van-cell title="充值" icon="bill" is-link @click="show=true"/>
    </div>
    <van-popup v-model="show" position="bottom" class="popup" close-on-click-overlay>
      <van-cell-group>
        <van-field v-model="money" placeholder="充值数值"/>
        <van-radio-group v-model="radio">
          <span>支付方式：</span>
          <van-radio name="余额">余额</van-radio>
          <van-radio name="微信">微信</van-radio>
          <van-radio name="支付宝">支付宝</van-radio>
        </van-radio-group>
        <van-button type="primary" size="large" @click="payment">确认支付</van-button>
      </van-cell-group>
    </van-popup>
  </div>
</template>

<script>
import {
  NavBar,
  Panel,
  Button,
  CellGroup,
  cell,
  Toast,
  Popup,
  Field,
  RadioGroup,
  Radio,
} from "vant";
import { mapState } from "vuex";
export default {
  components: {
    [NavBar.name]: NavBar,
    [Panel.name]: Panel,
    [Button.name]: Button,
    [cell.name]: cell,
    [Toast.name]: Toast,
    [Popup.name]: Popup,
    [Field.name]: Field,
    [CellGroup.name]: CellGroup,
    [RadioGroup.name]: RadioGroup,
    [Radio.name]: Radio
  },
  data() {
    return {
      show: false,
      url: this.$store.state.url1,
      userid: this.$store.state.userid,
      user: {},
      money: null,
      radio:'余额'
    };
  },
  beforeCreate() {
    this.$store.dispatch("reflashSet");
  },
  created() {
    let _this = this;
    this.axios({
      url: _this.url + "user/getuserinfo",
      method: "get",
      params: {
        userid: _this.userid
      }
    })
      .then(res => {
        _this.user = res.data;
        if (!_this.user.accountbalance) {
          _this.user.accountbalance = 0;
        }
        if (!_this.user.bonuspoints) {
          _this.user.bonuspoints = 0;
        }
      })
      .catch(err => {
        console.log(err);
      });
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    payment() {
      let _this = this;
      this.axios({
        url: _this.url + "user/recharge",
        method: "get",
        params: {
          userid: _this.userid,
          money: _this.money
        }
      }).then(res => {
        if (res.data == 1) {
          Toast({
            duration: 2000,
            message: "充值成功"
          });
          _this.$router.go(0);
        }else{
          Toast({
            duration: 2000,
            message: "充值失败"
          });
        }
      }).catch(err=>{
        console.log(err);
        Toast({
            duration: 2000,
            message: "充值失败"
          });
      });
    }
  }
};
</script>

<style lang="scss" scoped>
$blue: #2d8cf0;
#cost {
  font-size: 0.24rem;
  background: #ebedf0;
}
.cost-content {
  margin-top: 0.84rem;
  .van-cell:last-child {
    margin-top: 0.2rem;
  }
}
.van-radio-group{
  display: flex;
  height: 1rem;
  justify-content: flex-start;
  align-items: center;
  span{
    margin-left: .3rem;
  }
}
.van-radio{
  margin-right: .3rem;
}
.popup{
  width: 100%;
  margin: auto;
}
</style>
