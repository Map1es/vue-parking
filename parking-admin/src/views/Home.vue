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
                <Icon type="ios-paper"/>内容管理
              </template>
              <MenuItem name="1-1">文章管理</MenuItem>
              <MenuItem name="1-2">评论管理</MenuItem>
              <MenuItem name="1-3">举报管理</MenuItem>
            </Submenu>
            <Submenu name="2">
              <template slot="title">
                <Icon type="ios-people"/>用户管理
              </template>
              <MenuItem name="2-1">新增用户</MenuItem>
              <MenuItem name="2-2">活跃用户</MenuItem>
            </Submenu>
            <Submenu name="3">
              <template slot="title">
                <Icon type="ios-stats"/>统计分析
              </template>
              <MenuGroup title="使用">
                <MenuItem name="3-1">新增和启动</MenuItem>
                <MenuItem name="3-2">活跃分析</MenuItem>
                <MenuItem name="3-3">时段分析</MenuItem>
              </MenuGroup>
              <MenuGroup title="留存">
                <MenuItem name="3-4">用户留存</MenuItem>
                <MenuItem name="3-5">流失用户</MenuItem>
              </MenuGroup>
            </Submenu>
          </Menu>
        </div>
      </Sider>

      <Layout>
        <Header>
          <div class="home-user">
            <div class="home-user-img"></div>
            <i class="tri-down"></i>
          </div>
        </Header>
        <Content>Content</Content>
        <Footer>Footer</Footer>
      </Layout>
    </Layout>
  </div>
</template>

<script>
export default {
  data() {
    return {
      theme: "dark"
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
.ivu-layout-header {
  background: white;
  height: 50px;
}
.home-user {
  float: right;
  height: 50px;
  width: 40px;
  position: relative;
}
.home-user-img {
  width: 25px;
  height: 25px;
  background: #17233d;
  border-radius: 15px;
  position: relative;
  top: 13px;
}
.tri-down {
  width: 0;
  height: 0;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 4px solid black;
  float: right;
}
</style>