<template>
  <div class="updateParking">
    <Form label-position="right" :label-width="120">
      <FormItem label="停车场名称：">
        <Input></Input>
      </FormItem>
      <FormItem label="停车场坐标：">
        <Input></Input>
      </FormItem>
      <FormItem label="总车位数：">
        <Input></Input>
      </FormItem>
      <FormItem label="收费金额：">
        <Input></Input>
      </FormItem>
      <FormItem label="详情：">
        <Input></Input>
      </FormItem>
      <FormItem>
          <Button type="primary">提交</Button>
      </FormItem>
    </Form>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
</style>