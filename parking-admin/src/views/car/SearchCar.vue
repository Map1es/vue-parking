<!-- SearchCar -->
<template>
  <div class="SearchCar">
    <div class="Search-id">
      <div class="search-form">
        <Form ref="formInline" :model="car" inline>
          <FormItem>
            <span>车牌号:</span>
          </FormItem>
          <FormItem prop="user">
            <Input type="text" v-model="car.Id" placeholder></Input>
          </FormItem>
          <FormItem>
            <span>用户名:</span>
          </FormItem>
          <FormItem prop="password">
            <Input :style="{float: 'right'}" type="text" v-model="car.name" placeholder></Input>
          </FormItem>
          <FormItem>
            <Button type="primary" @click="search()">搜索</Button>
          </FormItem>
        </Form>
      </div>
      <Table border :loading="loading" :noDataText="noDataText" :columns="columns12" :data="data6">
        <template slot-scope="{ row }" slot="name">
          <strong>{{ row.name }}</strong>
        </template>
        <template slot-scope="{ row, index }" slot="action">
          <Button type="primary" size="small" style="margin-right: 5px" @click="show(index)">编辑</Button>
          <Button type="error" size="small" @click="remove(index)">删除</Button>
        </template>
      </Table>

      <div class="table-page">
        <Page :total="datatotal"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      noDataText: "没有此车牌纪录",
      datatotal: 100,
      car: {
        Id: "",
        name: " "
      },
      columns12: [
        {
          title: "用户名",
          slot: "name"
        },
        {
          title: "车牌号",
          key: "age"
        },
        {
          title: "停车时间",
          key: "address"
        },
        {
          title: "操作",
          slot: "action",
          width: 150,
          align: "center"
        }
      ],
      data6: [
        {
          name: "John Brown",
          age: 18,
          address: "New York No. 1 Lake Park"
        },
        {
          name: "Jim Green",
          age: 24,
          address: "London No. 1 Lake Park"
        },
        {
          name: "Joe Black",
          age: 30,
          address: "Sydney No. 1 Lake Park"
        },
        {
          name: "Jon Snow",
          age: 26,
          address: "Ottawa No. 2 Lake Park"
        }
      ]
    };
  },
  methods: {
    search() {},
    show(index) {
      this.$Modal.info({
        title: "User Info",
        content: `Name：${this.data6[index].name}<br>Age：${
          this.data6[index].age
        }<br>Address：${this.data6[index].address}`
      });
    },
    remove(index) {
      this.data6.splice(index, 1);
    }
  }
};
</script>

<style lang='scss' scoped>
.SearchCar {
  height: 100%;
}
.table-page {
  width: 100%;
  text-align: center;
  margin-top: 30px;
}
.search-form{
  margin: 20px 10px;
}
</style>