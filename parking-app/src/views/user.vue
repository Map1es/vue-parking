<!-- user.vue -->
<template>
  <div class="user">
    <Card class="user-card">
      <div class="card-header">
        <span>个人信息</span>
        <Badge dot class="fr" style="margin-top:-3px">
          <Icon type="ios-notifications-outline" size="26"></Icon>
        </Badge>
      </div>
      <div class="user-info clearfix">
        <span class="user-info-avatar">
          <span>user</span>
        </span>
        <div class="user-info-message">
          <div class="user-info-name">user-name</div>
          <div class="user-info-carId">粤A 123456</div>
        </div>
        <div class="fr user-forward">
          <Icon type="ios-arrow-forward" size='35' />
        </div>
      </div>
    </Card>
    <Card dis-hover>
      <Row type="flex">
        <Col class="user-item" span="8" order="1">
          <router-link to="/home">
            <span class="user-item-money blue">0.00<span class="user-item-util">元</span></span>
            <span class="user-item-span">余额</span>
          </router-link>
        </Col>
        <Col class="user-item" span="8" order="1">
          <router-link to="/home">
            <span class="user-item-money red">9<span class="user-item-util">个</span></span>
            <span class="user-item-span">红包</span>
          </router-link>
        </Col>
        <Col class="user-item" span="8" order="1">
          <router-link to="/home">
            <span class="user-item-money yellow">1000<span class="user-item-util">分</span></span>
            <span class="user-item-span">积分</span>
          </router-link>
        </Col>
      </Row>
    </Card>

    <div>
      我的订单
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang='scss' scoped>
.user-card {
  background: #2d8cf0;
}
.card-header {
  padding: 10px 8px;
}
.card-header > span {
  line-height: 48px;
  font-size: 32px;
  font-weight: 600;
  color: white;
}
.user-info {
  margin: 70px 30px;
 
}
.user-info-avatar {
  display: block;
  width: 120px;
  height: 120px;
  border-radius: 120px;
  line-height: 120px;
  background: white;
  text-align: center;
  float: left;
}
.user-info-message{
  margin-left: 30px;
  float: left;
}
.user-info-message>div{
  font-size: 32px;
  font-weight: 600;
  color: white;
  font-family: "微软雅黑";
}
.user-info-carId{
  margin-top:20px;
}
.user-forward{
  float: right;
  color: white;
  margin-top: 20px;
}
.user-item{
  text-align: center;
  font-size: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}
.user-item-money{
  font-size: 38px;
  display: block;
}
.user-item-util{
  font-size: 24px;
}
.blue{
  color: #2d8cf0;
}
.red{
  color:#ed4014;
}
.yellow{
  color: #ff9900;
}
</style>