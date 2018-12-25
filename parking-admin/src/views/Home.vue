<!-- home.vue -->
<template>
  <div class="home">
    <div class="home-layout">
      <Menu :theme="theme" active-name="1">
        <div class="logo">后台管理系统</div>
        <MenuGroup title="基本信息">
          <MenuItem name="1">
            <Icon type="md-document"/>首页
          </MenuItem>
          <MenuItem name="2">
            <Icon type="md-chatbubbles"/>实时数据
          </MenuItem>
        </MenuGroup>
        <MenuGroup title="车辆信息">
          <MenuItem name="3">
            <Icon type="md-heart"/>车牌查询
          </MenuItem>
          <MenuItem name="4">
            <Icon type="md-leaf"/>车位信息
          </MenuItem>
        </MenuGroup>
        <MenuGroup title="用户信息">
          <MenuItem name="5">
            <Icon type="md-heart"/>管理员信息
          </MenuItem>
          <MenuItem name="6">
            <Icon type="md-leaf"/>用户管理
          </MenuItem>
        </MenuGroup>
      </Menu>
    </div>
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
}
.logo {
  width: 100%;
  height: 60px;
  background: #17233d;
  color: white;
  font-weight: 900;
  font-size: 28px;
  text-align: center;
  line-height: 60px;
}
.ivu-menu {
  height: 100%;
  margin-right: -18px;
  overflow-y: scroll;
  position: fixed;
  left: 0;
  width: 200px;
}
.ivu-menu::-webkit-scrollbar {
  display: none;
}
</style>