<template>
  <div class="list">
    <div class="list-title">
      <div @click="goback">
        <Icon type="ios-arrow-back" size="24"/>返回
      </div>
    </div>
    <div class="list-item">
      <div class="item-title">2019-3-24 15：55</div>
      <div class="item-time">时长：30分钟</div>
      <div class="item-cost">合计：5元</div>
      <div class="item-editor">
        <Button size="small" class="item-button">付款</Button>
        <Button size="small" type="error" class="item-button">删除订单</Button>
      </div>
    </div>
    <div class="list-item">
      <div class="item-title">2019-3-24 15：55</div>
      <div class="item-time">时长：30分钟</div>
      <div class="item-cost">合计：5元</div>
      <div class="item-editor">
        <Button size="small" class="item-button">付款</Button>
        <Button size="small" type="error" class="item-button">删除订单</Button>
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
.list {
  display: flex;
  flex-direction: column;
  background: #f5f7f9;
  width: 100%;
  height: 100%;
}
.list-title {
  height: 70px;
  line-height: 70px;
  padding-left: 5px;
  background: #2d8cf0;
  color: white;
}
.list-item {
  width: 100%;
  margin: 20px 0px;
  padding: 5px;
  background: #fff;
  border-top: 1px solid #f1f1f1;
  border-bottom: 1px solid #f1f1f1;
}
.item-title {
  border-bottom: 1px solid #f1f1f1;
  height: 60px;
  line-height: 60px;
  padding-left: 10px;
}
.item-time {
  margin: 10px 0px;
  padding-left: 10px;
}
.item-cost {
  padding-left: 10px;
}
.item-editor {
  display: flex;
  justify-content: flex-end;
}
.item-button {
  margin: 5px 20px;
  border-radius: 6px;
}
</style>
