<template>
  <div id="list">
    <van-nav-bar title="账单" left-arrow @click-left="onClickLeft" fixed/>
    <div class="list-content">
      <van-panel title="2019-4-9" status="未支付">
        <div slot="footer">
          <div class="list-item">
            <span>消费金额：</span>
            <span>停车时长：</span>
          </div>
          <div class="list-button">
            <van-button size="small">完成支付</van-button>
            <van-button size="small" type="danger">删除订单</van-button>
          </div>
        </div>
      </van-panel>
    </div>
  </div>
</template>

<script>
import { NavBar, Panel, Button } from "vant";
export default {
  components: {
    [NavBar.name]: NavBar,
    [Panel.name]: Panel,
    [Button.name]: Button
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
#list {
  font-size: 0.24rem;
  background: #ebedf0;
}
.list-content {
  margin-top: 0.84rem;
}
.van-panel{
    margin-bottom: .2rem
}
.list-item {
  display: flex;
  flex-direction: column;
  height: 1rem;
  border-bottom: 0.01rem solid #ebedf0;
  span:first-child {
    margin-bottom: 0.1rem;
  }
}
.list-button {
    display: flex;
    justify-content: flex-end;
    margin-top: .2rem;
  .van-button:last-child {
    margin-left: 0.2rem;
  }
}
</style>
