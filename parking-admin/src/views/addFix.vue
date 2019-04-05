<template>
  <div class="addFix">
    <div class="addFix-content">
      <Form label-position="right" :label-width="80">
        <FormItem label="报修名称：">
          <Input></Input>
        </FormItem>
        <FormItem label="报修人：">
          <Input></Input>
        </FormItem>
        <FormItem label="报修类型：">
          <Select style="width:200px">
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
        <FormItem>
          <Button type="primary" class="fix-sumbit">提交</Button>
        </FormItem>
      </Form>
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
      ]
    };
  }
};
</script>

<style scoped>
.addFix-content {
  width: 800px;
  margin: 0 auto;
}
</style>
