<template>
  <div class="info">
    <div class="info-title">
      <div @click="goback">
        <Icon type="ios-arrow-back" size="24"/>返回
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
.info-title {
  height: 70px;
  line-height: 70px;
  padding-left: 5px;
  background: #2d8cf0;
  color: white;
}
</style>
