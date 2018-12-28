<template>
  <div class="home">
    <Layout>
      <Header>Header</Header>
      <Content>Content</Content>
      <Row type="flex">
        <Col class="footer-item" span="8" order="1">
          <a>
            <Icon type="md-home" :size="26"/>
            <span class="item-span">首页</span>
          </a>
        </Col>
        <Col class="footer-item" span="8" order="2">
          <a>
            <Icon type="md-compass" :size="26"/>
            <span class="item-span">发现</span>
          </a>
        </Col>
        <Col class="footer-item" span="8" order="3">
          <a>
            <Icon type="md-person" :size="26"/>
            <span class="item-span">个人</span>
          </a>
        </Col>
      </Row>
    </Layout>
  </div>
</template>

<script>
export default {
  name: "home"
};
</script>
<style scoped>
.home {
  height: 100%;
}
.ivu-layout-footer {
  position: fixed;
  zoom: 1;
  bottom: 0;
  width: 100%;
}
.ivu-row-flex {
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
  line-height: 20px;
  border-right: 1px solid #f1f1f1;
  display: flex;
  justify-content: center;
  align-items: center;
}
.footer-item a:hover{
  text-decoration: none;
}
.item-span {
  font-size: 14px;
  line-height: 30px;
  display: block;
}
</style>

