<template>
  <div id="cost">
    <van-nav-bar title="钱包" left-arrow @click-left="onClickLeft" fixed/>
    <div class="cost-content">
      <van-cell title="余额" icon="gold-coin" is-link value="0.00元"/>
      <van-cell title="积分" icon="card" is-link value="1000分"/>
      <van-cell title="优惠劵" icon="coupon" is-link value="无优惠券"/>
      <van-cell title="支付方式" icon="bill" is-link value="未开通"/>
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
    return {};
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
#cost {
  font-size: 0.24rem;
  background: #ebedf0;
}
.cost-content {
  margin-top: 0.84rem;
  .van-cell:last-child{
      margin-top: .2rem;
  }
}
</style>
