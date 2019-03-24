<template>
  <div id="index">
    <Layout>
      <router-view></router-view>
      <Row type="flex" class="index-footer">
        <Col class="footer-item" span="8" order="1">
          <router-link to="/home">
            <Icon type="md-home" :size="26"/>
            <span class="item-span">首页</span>
          </router-link>
        </Col>
        <Col class="footer-item" span="8" order="2">
          <router-link to="/search">
            <Icon type="md-compass" :size="26"/>
            <span class="item-span">发现</span>
          </router-link>
        </Col>
        <Col class="footer-item" span="8" order="3">
          <router-link to="/user">
            <Icon type="md-person" :size="26"/>
            <span class="item-span">个人</span>
          </router-link>
        </Col>
      </Row>
    </Layout>
  </div>
</template>

<script>

export default {
};
</script>

<style>
#index {
  width: 100%;
  height: 100%;
}
.ivu-layout{
  height: 100%;
  width: 100%;;
}
.index-footer {
  height: 100px;
  position: fixed;
  zoom: 1;
  bottom: 0;
  width: 100%;
  background: #fff;
  border-top: 1px solid #f1f1f1;
}

.footer-item {
  text-align: center;
  font-size: 16px;
  line-height: 72px;
  border-right: 1px solid #f1f1f1;
  display: flex;
  justify-content: center;
  align-items: center;
}
.footer-item a {
  display: block;
  height: 100%;
  width: 100%;

}
.footer-item a:hover {
  text-decoration: none;
}
.item-span {
  font-size: 14px;
  line-height: 20px;
  display: block;
}
</style>
