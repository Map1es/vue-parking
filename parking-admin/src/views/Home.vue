<template>
  <div class="home">
    <Layout>
      <Layout>
        <Sider hide-trigger class="layout-sider">
          <div class="layout-logo">AI planning</div>
          <Menu
            ref="menu"
            :active-name="menu"
            :v-model="menu"
            theme="dark"
            width="auto"
            @on-select="routeTo"
          >
            <MenuItem name="index">
              <Icon type="md-home"/>首页
            </MenuItem>
            <MenuGroup title="车场管理">
              <MenuItem name="parking">
                <Icon type="md-browsers"/>车场信息
              </MenuItem>
              <MenuItem name="updateParking">
                <Icon type="md-pricetags"/>信息修改
              </MenuItem>
            </MenuGroup>
            <MenuGroup title="停车管理">
              <MenuItem name="car">
                <Icon type="md-car"/>停车记录
              </MenuItem>
            </MenuGroup>
            <MenuGroup title="报修系统">
              <MenuItem name="addFix">
                <Icon type="md-build"/>上报功能
              </MenuItem>
              <MenuItem name="fix">
                <Icon type="md-hammer"/>报修信息
              </MenuItem>
            </MenuGroup>
            <MenuGroup title="流程模拟">
             <MenuItem name="upload">
              <Icon type="md-hammer"/>车牌识别
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
export default {
  data() {
    return {
      menu: "index"
    };
  },
  methods: {
    routeTo(e) {
      this.$router.push(e);
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.menu = this.$route.path.slice(1);
      this.$refs.menu.updateActiveName();
    });
  }
};
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