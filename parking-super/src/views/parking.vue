<template>
  <div class="parking">
    <Input search placeholder="搜索停车场" class="paking-search"/>
    <div class="parking-content">
      <router-link to="/infoParking">
        <Card class="parking-card">
          <div class="parking-title">大信一期停车场</div>
          <div class="parking-msg">
            <div class="msg-content">
              <span class="msg-number info">1231</span>
              <h4 class="msg-title">总车位数</h4>
            </div>
            <div class="msg-content">
              <span class="msg-number success">831</span>
              <h4 class="msg-title">剩余车位</h4>
            </div>
            <div class="msg-content">
              <span class="msg-number error">431</span>
              <h4 class="msg-title">已停车位</h4>
            </div>
          </div>
        </Card>
      </router-link>
    </div>
    <Button type="primary" to="/addParking" class="parking-add">
      <Icon type="md-add-circle" size="26"/>新增停车场
    </Button>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.parking {
  text-align: center;
}
.paking-search {
  width: 280px;
  margin-bottom: 5px;
}
.parking-content {
  display: flex;
  align-content: flex-start;
  flex-wrap: wrap;
  overflow-y: scroll;
  height: 610px;
}
.parking-content::-webkit-scrollbar {
  display: none;
}
.parking-card {
  width: 360px;
  height: 200px;
  margin: 10px 20px;
  cursor: pointer;
  color: #515a6e;
}
.parking-title {
  font-size: 24px;
  font-weight: 600;
  margin: 5px 10px;
}
.parking-msg {
  display: flex;
}
.msg-content {
  width: 30%;
  text-align: center;
  margin: 10px;
}
.msg-title {
  font-size: 18px;
}
.msg-number {
  font-size: 38px;
  font-weight: 900;
}
.info {
  color: #2db7f5;
}
.success {
  color: #19be6b;
}
.error {
  color: #ed4014;
}
.parking-add {
  margin-top: 20px;
  font-size: 24px;
  width: 400px;
  text-align: center;
}
</style>
