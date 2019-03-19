<template>
  <div class="fix">
    <div class="fix-content" >
      <Card class="fix-card">
        <div style="height:100%">
        <h2>停车场名称
          <span class="fix-type">上报类型：</span>
        </h2>
        <div class="fix-msg">
          <span>上报人：</span>
          <span>上报日期：</span>
          <span>是否处理：</span>
        </div>
        <div class="fix-opera">
          <Button>查看详情</Button>
          <Button type="primary">处理</Button>
        </div>
        </div>
      </Card>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.fix-content{
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow-y: scroll;
  height: 700px;
}
.fix-card {
  width: 600px;
  height: 100px;
  border-radius: 15px;
  margin-bottom: 13px;
}
.fix-type{
  font-size: 14px;
  margin-left: 10px;
}
.fix-msg{
  margin-top: 10px;
  height: 40px;
  float: left;
}
.fix-msg span{
  margin-right: 10px;
}
.fix-opera{
 float: right;
 
}
.fix-opera Button{
  margin-right: 12px;
}
</style>
