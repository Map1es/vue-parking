<template>
  <div class="user">
    <div class="car-form">
      <Form label-position="right" inline :label-width="80">
        <FormItem>
          <Select style="width:100px">
            <Option
              v-for="item in searchType"
              :value="item.value"
              :key="item.value"
            >{{ item.label }}</Option>
          </Select>
        </FormItem>
        <FormItem>
          <Input></Input>
        </FormItem>
        <FormItem>
          <Button type="primary">搜索</Button>
        </FormItem>
      </Form>
    </div>
    <Divider>
      <span class="car-divider">停车记录</span>
    </Divider>
    <Table height="500" small :columns="carTitle" :data="carData">
      <template slot-scope="{ row }" slot="carNo">
        <strong>{{ row.carNo }}</strong>
      </template>
      <template slot-scope="{ row, index }" slot="action">
        <Button type="error">删除</Button>
      </template>
    </Table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchType: [
        { label: "车牌名称", value: "车牌名称" },
        { label: "用户名称", value: "用户名称" }
      ],
      carTitle: [
        { title: "车牌号", key: "carNo" },
        { title: "用户名称", key: "carUser" },
        { title: "记录日期", key: "carDate", sortable: true },
        { title: "收费金额", key: "carCost" },
        {
          title: "操作",
          slot: "action",
          width: 150,
          align: "center"
        }
      ],
      carData: [
        {
          carNo: "粤A 12343",
          carUser: "小明",
          carDate: "2019-3-21",
          carCost: "123"
        },{
          carNo: "粤A 12343",
          carUser: "小明",
          carDate: "2019-3-21",
          carCost: "123"
        },{
          carNo: "粤A 12343",
          carUser: "小明",
          carDate: "2019-3-21",
          carCost: "123"
        },{
          carNo: "粤A 12343",
          carUser: "小明",
          carDate: "2019-3-21",
          carCost: "123"
        }
      ]
    };
  }
};
</script>

<style scoped>
.car-form {
  width: 800px;
  margin: 0 auto;
}
.car-divider {
  font-size: 14px;
}
</style>