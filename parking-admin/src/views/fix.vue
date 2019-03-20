<template>
  <div class="fix">
    <div class="fix-form">
      <Form label-position="right" inline :label-width="80">
        <FormItem label="报修名称：">
          <Input></Input>
        </FormItem>
        <FormItem label="报修人：">
          <Input></Input>
        </FormItem>
        <FormItem label="报修类型：">
          <Select v-model="model1" style="width:200px">
            <Option v-for="item in fixType" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>
        </FormItem>
        <FormItem label="报修日期：">
          <DatePicker type="date" placeholder="选择日期" style="width: 200px"></DatePicker>
        </FormItem>
        <FormItem label="报修详情：">
          <Input
            style="width:500px"
            type="textarea"
            :autosize="{minRows: 3,maxRows: 3}"
            placeholder="详情..."
          ></Input>
        </FormItem>
      </Form>
      <Button type="primary" class="fix-sumbit">提交</Button>
      <Button>取消</Button>
    </div>
    <Divider>
      <span class="fix-divider">报修记录</span>
    </Divider>
    <div class="fix-list">
      <Card class="fix-card" v-for="item of 121">
        <div class="fix-card-flex">
          <div class="fix-content">
            <div>报修名称：监控摄像头</div>
            <div>报修人：ye</div>
            <div>报修类型：报错</div>
          </div>
          <div class="fix-icon">
            <Icon type="md-checkmark-circle" :class="finish" size="40"/>
            <div>未处理</div>
          </div>
        </div>
      </Card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fixType: [
        {
          value: "报错",
          label: "报错"
        },
        {
          value: "警告",
          label: "警告"
        },
        {
          value: "消息",
          label: "消息"
        }
      ],
      finish: 'finish'
    };
  }
};
</script>

<style scoped>
.fix-form {
  width: 1200px;
  margin: 0 auto;
}
.fix-sumbit {
  margin-left: 80px;
  margin-right: 30px;
}
.fix-divider {
  font-size: 14px;
}
.fix-list{
    display: flex;
    flex-wrap: wrap;
    overflow-y: scroll;
    height: 500px;
    margin: 0 auto;
}
.fix-list::-webkit-scrollbar{
    display: none;
}
.fix-card {
  width: 400px;
  cursor: pointer;
  margin:10px 40px;
}
.fix-card-flex{
    display: flex;
}
.fix-content{
    width: 300px;
}
.fix-content div {
  font-size: 18px;
}
.fix-icon {
    width: 100px;
    display: flex;
    flex-direction: column;
    align-items:  flex-end;
    justify-content: center;
    margin-right: 30px;
}
.unfinish{
    color: rgb(179, 55, 38);
}
.finish{
    color: rgb(51, 206, 51);
}
</style>