<!-- home.vue -->
<template>
  <div class="home clearfix">
    <Sider :style="{position: 'fixed', height: '100vh', left: 0, overflow: 'auto'}">
      <Menu active-name="1-1" theme="dark" width="auto" :open-names="['1']" accordion>
        <div class="logo">后台管理系统</div>
        <Submenu name="1">
          <template slot="title">
            <Icon type="md-car"/>车辆管理
          </template>
          <MenuItem name="1-1">车牌查询</MenuItem>
          <MenuItem name="1-2">车位查询</MenuItem>
          <MenuItem name="1-3">视频回放</MenuItem>
        </Submenu>
        <Submenu name="2">
          <template slot="title">
            <Icon type="logo-octocat"/>用户管理
          </template>
          <MenuItem name="2-1">查询用户信息</MenuItem>
          <MenuItem name="2-2">修改用户信息</MenuItem>
        </Submenu>
        <Submenu name="3">
          <template slot="title">
            <Icon type="ios-folder"/>系统管理
          </template>
          <MenuItem name="3-1">收费管理</MenuItem>
          <MenuItem name="3-2">活跃分析</MenuItem>
          <MenuItem name="3-3">修改权限</MenuItem>
        </Submenu>
      </Menu>
    </Sider>

    <Layout :style="{marginLeft: '200px'}">
      <Affix>
        <Header :style="{background: '#fff', boxShadow: '0 2px 3px 2px rgba(0,0,0,.1)'}">
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
      </Affix>
      <Content :style="{padding: '0 16px 16px'}">
        <Card :style="{margin: '20px 0px'}">
          <div style="height: 40px">
            <span class="page-title">车牌查询</span>
              <Divider></Divider>
          </div>
        </Card>
        <Card>
          <div style="height: 700px"><SearchCar></SearchCar></div>
        </Card>
      </Content>
    </Layout>
  </div>
</template>

<script>
import SearchCar from './car/SearchCar.vue';

export default {
  data() {
    return {};
  },
  components:{
    SearchCar,
  }
};
</script>

<style lang='scss' scoped>
.home {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
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

// 导航条
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
.layout-header-bar {
  background: #fff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
}
.ivu-divider-horizontal{
  margin: 5px 0px;
}
.page-title {
  font-size: 24px;
  font-weight: 600;
}
</style>