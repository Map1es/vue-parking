<template>
  <div class="home">
    <Layout>
      <Header :style="{position: 'fixed', width: '100%', zIndex: '999'}">
        <Menu mode="horizontal" theme="dark" active-name="index">
          <router-link to="/index" class="layout-logo">
            <div>AI Parking</div>
          </router-link>
          <div class="layout-nav">
            <MenuItem name="index" to="index">
              <Icon type="ios-navigate"></Icon>首页
            </MenuItem>
            <MenuItem name="parking" to="parking">
              <Icon type="ios-keypad"></Icon>停车场
            </MenuItem>
            <MenuItem name="fix" to="fix">
              <Icon type="ios-analytics"></Icon>报修
            </MenuItem>
          </div>
          <Dropdown style="margin-left: 40px">
            <a href="javascript:void(0)">
              <Icon type="md-contact" size="26" color="#fff"/>
            </a>
            <DropdownMenu slot="list">
              <DropdownItem>退出登录</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </Menu>
      </Header>
      <Content class="layout-content">
        <router-view/>
      </Content>
      <Footer class="layout-footer-center">2011-2016 &copy; TalkingData</Footer>
    </Layout>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.home {
  height: 100%;
}
.layout {
  border: 1px solid #d7dde4;
  background: #fff;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
.ivu-layout {
  background: #fff;
}
.layout-logo {
  color: #fff;
  border-radius: 3px;
  float: left;
  position: relative;
  font-size: 24px;
  left: 5%;
}
.layout-nav {
  width: 420px;
  margin: 0 auto;
  margin-right: 20px;
}
.layout-content {
  margin: 88px 50px 71px;
  background: #f5f7f9;
  padding: 20px 80px;
  height: 100%;
  position: relative;
  border-radius: 15px;
}
.layout-footer-center {
  text-align: center;
  position: fixed;
  bottom: 0px;
  width: 100%;
}
</style>
