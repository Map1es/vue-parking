<template>
  <div class="car">
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
    <Table ref="selection" height="522" small :columns="carTitle" :data="nowData">
      <template slot-scope="{ row }" slot="carNo">
        <strong>{{ row.carNo }}</strong>
      </template>
      <template slot-scope="{ row, index }" slot="action">
        <Button type="error">删除</Button>
      </template>
    </Table>
    <Page
      class="car-page"
      :total="dataCount"
      :page-size="pageSize"
      @on-change="changepage"
      @on-page-size-change="_nowPageSize"
      show-total
      show-elevator
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      url: this.$store.state.url,
      searchType: [
        { label: "车牌名称", value: "车牌名称" },
        { label: "用户名称", value: "用户名称" }
      ],
      carTitle: [
        { title: "车牌号", key: "plateNum" },
        { title: "用户名称", key: "userName" },
        { title: "进入时间", key: "inTime", sortable: true },
        { title: "离开时间", key: "outTime", sortable: true },
        { title: "收费金额", key: "payment" },
        { title: "支付状态", key: "status" },
        {
          title: "操作",
          slot: "action",
          width: 150,
          align: "center"
        }
      ],
      carData: [],
      nowData: [],
      pageSize: 10, //每页显示多少条
      dataCount: 0, //总条数
      pageCurrent: 1 //当前页
    };
  },
  created() {
    let _this = this;
    this.axios({
      method: "get",
      url: _this.url + "bill/info/queryList/garage/137"
    })
      .then(res => {
        _this.carData = res.data.rows;
        for (let i = 0; i < _this.carData.length; i++) {
          if (_this.carData[i].status == true) {
            _this.carData[i].status = "是";
          } else {
            _this.carData[i].status = "否";
          }
          _this.carData[i].inTime = _this.gettime(_this.carData[i].inTime);
          if (_this.carData[i].outTime) {
            _this.carData[i].outTime = _this.gettime(_this.carData[i].outTime);
          }
        }
        _this.dataCount = res.data.total;
        _this.nowData = [];
        if (_this.carData.length <= _this.pageSize) {
          _this.nowData = _this.carData;
        } else {
          for (let i = 0; i < _this.pageSize; i++) {
            _this.nowData.push(_this.carData[i]);
          }
        }
      })
      .catch(err => {
        console.log(res);
      });
  },
  methods: {
    _getData() {
      //所有数据
      //分页显示所有数据总数
      this.dataCount = this.carData.length;
      //循环展示页面刚加载时需要的数据条数
      this.nowData = [];
      for (let i = 0; i < this.pageSize; i++) {
        this.nowData.push(this.carData[i]);
      }
    },
    changepage(index) {
      let len = this.dataCount / this.pageSize;
      let last = this.dataCount % this.pageSize;
      //需要显示开始数据的index,(因为数据是从0开始的，页码是从1开始的，需要-1)
      let _start = (index - 1) * this.pageSize;
      //需要显示结束数据的index
      let _end = index * this.pageSize;
      //截取需要显示的数据
      if (index != len) {
        this.nowData = this.carData.slice(_start, _end);
      } else {
        this.nowData = this.carData.slice(_start, this.dataCount);
      }
      //储存当前页
      this.pageCurrent = index;
    },
    _nowPageSize(index) {
      //实时获取当前需要显示的条数
      this.pageSize = index;
    },
    gettime(t) {
      var _time = new Date(t);
      var year = _time.getFullYear();
      var month = _time.getMonth() + 1;
      var date = _time.getDate();
      var hour = _time.getHours();
      var minute = _time.getMinutes();
      var second = _time.getSeconds();
      return (
        year +
        "-" +
        month +
        "-" +
        date +
        " " +
        hour +
        ":" +
        minute +
        ":" +
        second
      ); //这里自己按自己需要的格式拼接
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
.car-page {
  text-align: center;
  margin-top: 20px;
}
</style>