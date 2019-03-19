<template>
  <div class="home">
    <Layout>
      <Layout>
        <Sider hide-trigger class="layout-sider">
          <router-link to="/index" class="layout-logo"><div>AI planning</div></router-link>
          <Menu active-name="1" theme="dark" width="auto">
            <MenuItem name="1">
              <Icon type="md-home"/>首页
            </MenuItem>
            <MenuGroup title="用户管理">
              <MenuItem name="2">
                <Icon type="md-person"/>用户信息
              </MenuItem>
              <MenuItem name="3">
                <Icon type="md-apps"/>用户修改
              </MenuItem>
            </MenuGroup>
            <MenuGroup title="收费管理">
              <MenuItem name="4">
                <Icon type="logo-yen"/>收费系统
              </MenuItem>
            </MenuGroup>
            <MenuGroup title="报修系统">
              <MenuItem name="5">
                <Icon type="md-build"/>报修系统
              </MenuItem>
            </MenuGroup>
          </Menu>
        </Sider>
        <Layout>
          <Header class="layout-hearder">
            <Dropdown style="margin-left: 40px;float:right">
              <a href="javascript:void(0)">
                <Icon type="md-contact" size="26" color="#515a6e"/>
              </a>
              <DropdownMenu slot="list">
                <DropdownItem>退出登录</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </Header>
          <Content class="layout-content">
              <router-view></router-view>
          </Content>
        </Layout>
      </Layout>
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
.ivu-layout {
  height: 100%;
  background: #fff;
}
.layout-logo {
  color: #fff;
  font-size: 24px;
  background: #515a6e;
  height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.layout-logo:hover {
  text-decoration: none;
}
.layout-hearder {
  background: #fff;
  border-bottom: 1px solid #f1f1f1;
  box-shadow: 0px 2px 8px #f1f1f1;
}
.layout-content {
  margin: 30px 40px 50px;
  background: #f5f7f9;
  padding: 20px 80px;
  height: 100%;
  position: relative;
  border-radius: 15px;
}
.layout-sider {
  flex: 0 0 240px !important;
  width: 240px !important;
  min-width: 240px !important;
  max-width: 240px !important;
}
</style>