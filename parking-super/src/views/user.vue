<template>
  <div class="user">
    <div class="car-form">
      <Form label-position="right" inline :label-width="80">
        <FormItem>
          <Select v-model="type" style="width:100px">
            <Option
              v-for="item in searchType"
              :value="item.value"
              :key="item.value"
            >{{ item.label }}</Option>
          </Select>
        </FormItem>
        <FormItem>
          <Input
            @on-change="queryItems(queryvalue)"
            v-model="queryvalue"
            search
            style="width:290px"
          ></Input>
        </FormItem>
      </Form>
    </div>
    <Divider>
      <span class="car-divider">停车记录</span>
    </Divider>
    <Table height="500" small :columns="carTitle" :data="searchCar">
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
import userDesc from "../components/user-desc.vue";
export default {
  data() {
    return {
      url: this.$store.state.url1,
      searchType: [
        { label: "车牌号", value: "车牌号" },
        { label: "用户名", value: "用户名" }
      ],
      carTitle: [
        {
          type: "expand",
          width: 50,
          render: (h, params) => {
            return h(userDesc, {
              props: {
                row: params.row
              }
            });
          }
        },
        { title: "用户名", key: "name" },
        { title: "车牌号", key: "platenum" },
        { title: "联系电话", key: "phone", sortable: true },
        { title: "邮箱", key: "email" },
        {
          title: "操作",
          slot: "action",
          width: 150,
          align: "center"
        }
      ],
      searchCar: [],
      queryvalue: "",
      carData: [],
      type: "用户名"
    };
  },
  created: function() {
    let _this = this;
    this.axios({
      method: "get",
      url: _this.url + "user/getlist"
    })
      .then(function(res) {
        console.log(res);
        _this.carData = res.data;
        _this.searchCar = _this.carData;
      })
      .catch(function(err) {
        console.log(err);
      });
  },
  methods: {
    queryItems: function(value) {
      this.searchCar = [];
      if (value != "") {
        if (this.type == "用户名") {
          for (let i = 0; i < this.carData.length; i++) {
            setTimeout(() => {});
            if (this.carData[i].name.includes(value)) {
              this.searchCar.push(this.carData[i]);
            }
          }
        } else if (this.type == "车牌号") {
          for (let i = 0; i < this.carData.length; i++) {
            setTimeout(() => {});
            if (this.carData[i].platenum.includes(value)) {
              this.searchCar.push(this.carData[i]);
            }
          }
        }
      } else {
        this.searchCar = this.carData;
      }
    }
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