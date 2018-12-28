<template>
  <div class="home">
    <Header>
      <Input size="large" placeholder="搜索停车场">
        <Icon type="ios-search" size="20" slot="suffix"/>
      </Input>
      <Icon style="margin-top:10px;margin-left:15px;" type="md-qr-scanner" size="26"/>
    </Header>

    <Card shadow class="home-card">
      <p>Content of card</p>
      <p>Content of card</p>
      <p>Content of card</p>
    </Card>
    
    <Card shadow class="home-card">
      <Row type="flex">
        <Col span="6">
          <router-link to='/' class="home-button">
            <Icon type="md-qr-scanner" size="50"/><br/>
            <span class="button-name">停车场查询</span>
          </router-link>
        </Col>
        <Col span="6">
          <router-link to='/' class="home-button">
            <Icon type="md-qr-scanner" size="50"/><br/>
            <span class="button-name">停车场查询</span>
          </router-link>
        </Col>
        <Col span="6">
          <router-link to='/' class="home-button">
            <Icon type="md-qr-scanner" size="50"/><br/>
            <span class="button-name">停车场查询</span>
          </router-link>
        </Col>
        <Col span="6">
          <router-link to='/' class="home-button">
            <Icon type="md-qr-scanner" size="50"/><br/>
            <span class="button-name">停车场查询</span>
          </router-link>
        </Col>
      </Row>
    </Card>

  </div>
</template>

<script>
export default {

};
</script>
<style scoped>
.home {
  height: 100%;
}
.ivu-layout-header {
  height: 90px;
  background: white;
  border-bottom: 1px solid #f1f1f1;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.2);
}
.home-card {
  margin: 20px;
  padding: 16px;
}
.ivu-input-wrapper {
  margin-top: 16px;
  width: 85%;
  position: relative;
}
.home-button{
  display: block;
  width: 100%;
  height: 100%;
  text-align: center;
}
.button-name{
  font-size: 24px;
  font-weight: 600;
  line-height: 60px;
}
</style>

