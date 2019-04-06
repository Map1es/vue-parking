<template>
  <div class="home">
    <Header>
      <Input size="large" placeholder="搜索停车场">
        <Icon type="ios-search" size="20" slot="suffix"/>
      </Input>
    </Header>

    <Card shadow class="home-card">
      <Row type="flex">
        <Col span="6">
          <router-link to="/" class="home-button">
            <Icon type="md-remove-circle" size="30" :style="{color: 'red'}"/>
            <br>
            <span class="button-name">违章查询</span>
          </router-link>
        </Col>
        <Col span="6">
          <router-link to="/" class="home-button">
            <Icon type="md-battery-charging" size="30" :style="{color: 'skyblue'}"/>
            <br>
            <span class="button-name">充电桩查询</span>
          </router-link>
        </Col>
        <Col span="6">
          <router-link to="/" class="home-button">
            <Icon type="md-car" size="30"/>
            <br>
            <span class="button-name">停车场查询</span>
          </router-link>
        </Col>
        <Col span="6">
          <router-link to="/" class="home-button">
            <Icon type="logo-yen" size="30"/>
            <br>
            <span class="button-name">缴费查询</span>
          </router-link>
        </Col>
      </Row>
    </Card>
  </div>
</template>

<script>
export default {};
</script>
<style scoped>
.home {
  height: 100%;
}
.ivu-layout-header {
  height: 90px;
  background: #2d8cf0;
  border-bottom: 1px #2d8cf0 solid ;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.2);
  text-align: center;
}
.home-card {
  margin: 20px 0px;
  padding: 10px 0px;
}
.ivu-input-wrapper {
  margin-top: 16px;
  width: 85%;
  position: relative;
}
.home-button {
  display: block;
  width: 100%;
  height: 100%;
  text-align: center;
}
.button-name {
  font-size: 24px;
  font-weight: 600;
  line-height: 60px;
}
</style>

