<template>
  <div class="info">
    <div class="info-header">
      <div @click="goback" class="info-back">
        <Icon type="ios-arrow-back" size="24" :style="{textAlign:'left'}"/>
      </div>
      <span class="info-title">个人信息</span>
    </div>

    <div class="info-content">
      <span class="user-info-avatar">
        <span>user</span>
      </span>
      <div class="user-info-message">
        <div class="user-info-name">编辑头像</div>
      </div>
      <div class="info-input">
        <Input></Input>
      </div>
    </div>
  </div>
  
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    goback() {
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped>
.info {
  display: flex;
  flex-direction: column;
  background: #f5f7f9;
  width: 100%;
  height: 100%;
}
.info-header {
  height: 70px;
  line-height: 70px;
  background: #2d8cf0;
  color: white;
  text-align: center;
}
.info-back {
  line-height: 70px;
  float: left;
}
.info-content {
  background: white;
}
.user-info-avatar {
  display: block;
  width: 160px;
  height: 160px;
  border-radius: 160px;
  border: 3px #d1d1d1 solid;
  line-height: 160px;
  background: white;
  text-align: center;
  margin: 20px auto;
}
.user-info-message > div {
  font-size: 32px;
  color: #b8b8b8;
  font-family: "微软雅黑";
  margin: 20px auto;
  text-align: center;
}
</style>
