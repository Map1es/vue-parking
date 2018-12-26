<!-- home.vue -->
<template>
  <div class="home clearfix">
    <Layout>
      <Sider hide-trigger>
        <div class="home-layout clearfix">
          <Menu :theme="theme" :open-names="['1']" accordion>
            <div class="logo">后台管理系统</div>
            <Submenu name="1">
              <template slot="title">
                <Icon type="md-car" />车辆管理
              </template>
              <MenuItem name="1-1">车牌查询</MenuItem>
              <MenuItem name="1-2">车位查询</MenuItem>
              <MenuItem name="1-3">视频回放</MenuItem>
            </Submenu>
            <Submenu name="2">
              <template slot="title">
                <Icon type="logo-octocat" />用户管理
              </template>
              <MenuItem name="2-1">查询用户信息</MenuItem>
              <MenuItem name="2-2">修改用户信息</MenuItem>
            </Submenu>
            <Submenu name="3">
              <template slot="title">
                <Icon type="ios-folder" />系统管理
              </template>
              <MenuItem name="3-1">收费管理</MenuItem>
              <MenuItem name="3-2">活跃分析</MenuItem>
              <MenuItem name="3-3">修改权限</MenuItem>
            </Submenu>
          </Menu>
        </div>
      </Sider>

      <Layout>
        <Header>
          <a>
            <Icon type="ios-menu" size="25" style="margin-top:-15px;margin-left:-40px"/>
          </a>
          <Dropdown style="margin-right:-20px">
            <a href="javascript:void(0)" class="clearfix">
              <Avatar icon="ios-person" size="small"/>
              <Icon type="md-arrow-dropdown"/>
            </a>
            <DropdownMenu slot="list">
              <DropdownItem>个人中心</DropdownItem>
              <DropdownItem>退出登陆</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </Header>

        <Content>
          <router-view :key></router-view>
        </Content>

        <Footer>Footer</Footer>
      </Layout>
    </Layout>
  </div>
</template>

<script>
export default {
  data() {
    return {
      theme: "light"
    };
  }
};
</script>

<style lang='scss' scoped>
.home {
  height: 100%;
  display: flex;
}
.logo {
  width: 100%;
  height: 50px;
  background: #17233d;
  color: white;
  font-weight: 600;
  font-size: 24px;
  text-align: center;
  line-height: 50px;
}
.home-sider {
  width: 200px;
  min-width: 200px;
  max-width: 200px;
  flex: 0 0 200px;
  overflow: hidden;
}
.home-main {
  flex: auto;
}
.ivu-menu {
  height: 100%;
  margin-right: -18px;
  overflow-y: scroll;
  position: fixed;
  left: 0;
  width: 200px !important;
}
.ivu-menu::-webkit-scrollbar {
  display: none;
}

// 导航条
.nav-hide {
  float: left;
  margin-top: -8px;
}
.ivu-layout-header {
  background: white;
  height: 50px;
}
.ivu-dropdown {
  float: right;
  position: relative;
  height: 50px;
  margin-top: -8px;
}
</style>