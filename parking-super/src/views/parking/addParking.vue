<template>
  <div class="addParking">
    <h1 class="addParking-title">添加停车场</h1>
    <Form ref="formValidate" :label-width="100" class="addFrom">
      <FormItem label="停车场名称：" prop="name">
        <Input placeholder="输入停车场名称"></Input>
      </FormItem>
      <FormItem label="车位数量：" prop="number">
        <InputNumber></InputNumber>
      </FormItem>
      <FormItem label="停车场位置：" prop="map">
        <Input placeholder="输入停车场位置"></Input>
      </FormItem>
      <FormItem label="停车场管理员：" prop="name">
        <Input placeholder="Enter your name"></Input>
      </FormItem>
      <FormItem label="停车场名称：" prop="name">
        <Input placeholder="Enter your name"></Input>
      </FormItem>
      <FormItem>
        <Button type="primary" :style="{marginRight:'20px'}">提交</Button>
        <Button @click="goback">返回</Button>
      </FormItem>
    </Form>
  </div>
</template>

<script>
export default {
    data(){
        return {

        }
    },
    methods:{
        goback(){
            this.$router.go(-1);
        }
    }
};
</script>

<style scoped>
.addParking-title {
  text-align: center;
}
.addFrom {
  margin: 20px auto;
  width: 800px;
}
</style>


