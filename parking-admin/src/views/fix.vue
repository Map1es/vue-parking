<template>
  <div class="fix">
    <div class="fix-form">
      <Input @on-change="queryItems(queryvalue)" v-model="queryvalue" search placeholder="请输入报修名称"></Input>
    </div>
    <Divider>
      <span class="fix-divider">报修记录</span>
    </Divider>
    <Table height="500" small :columns="carTitle" :data="searchCar">
      <template slot-scope="{ row }" slot="fixName">
        <strong>{{ row.fixName }}</strong>
      </template>
      <template slot-scope="{ row, index }" slot="action">
        <Button
          type="primary"
          :disabled="row.state=='是'"
          @click="updateModal(row)"
          style="margin-right:10px"
        >修改</Button>
        <Button type="error">删除</Button>
      </template>
    </Table>

    <Modal v-model="modal1" title="修改报修信息" @on-ok="ok" @on-cancel="cancel">
      <Form label-position="right" :label-width="80">
        <FormItem label="报修名称：">
          <Input v-model="fix.reportTitle"></Input>
        </FormItem>
        <FormItem label="报修人：">
          <Input v-model="fix.reportUser"></Input>
        </FormItem>
        <FormItem label="报修类型：">
          <Select v-model="fix.reportType" style="width:200px">
            <Option v-for="item in fixType" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>
        </FormItem>
        <FormItem label="设备编号：">
          <Input v-model="fix.deviceNo"></Input>
        </FormItem>
        <FormItem label="报修详情：">
          <Input
            v-model="fix.reportDesc"
            type="textarea"
            :autosize="{minRows: 3,maxRows: 3}"
            placeholder="详情..."
          ></Input>
        </FormItem>
      </Form>
    </Modal>
  </div>
</template>

<script>
import fixDesc from "../components/fix-desc.vue";
export default {
  components: { fixDesc },
  data() {
    return {
      url: this.$store.state.url,
      finish: "finish",
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
      carTitle: [
        {
          type: "expand",
          width: 50,
          render: (h, params) => {
            return h(fixDesc, {
              props: {
                row: params.row
              }
            });
          }
        },
        { title: "报修名称", key: "reportTitle" },
        { title: "报修人", key: "reportUser" },
        { title: "报修类型", key: "reportType" },
        { title: "报修日期", key: "reportTime", sortable: true },
        {
          title: "是否完成",
          key: "state",
          sortable: true
        },
        {
          title: "操作",
          slot: "action",
          width: 180,
          align: "center"
        }
      ],
      carData: [],
      searchCar: [],
      queryvalue: "",
      modal1: false,
      id: null,
      fix: {
        deviceNo: "",
        reportTitle: "",
        reportType: "",
        reportUser: "",
        reportDesc: ""
      }
    };
  },
  created() {
    let _this = this;
    this.axios({
      method: "get",
      url: _this.url + "repair/info/queryList"
    })
      .then(function(res) {
        _this.carData = res.data.rows;
        for (let i = 0; i < _this.carData.length; i++) {
          if (_this.carData[i].state == true) {
            _this.carData[i].state = "是";
          } else {
            _this.carData[i].state = "否";
          }
          if (_this.carData[i].fixTime) {
            _this.carData[i].fixTime = _this.gettime(
              _this.carData[i].fixTime
            );
          }
           if (_this.carData[i].reportTime) {
              _this.carData[i].reportTime = _this.gettime(
                _this.carData[i].reportTime
              );
            }
        }
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
        for (let i = 0; i < this.carData.length; i++) {
          setTimeout(() => {});
          if (this.carData[i].reportTitle.includes(value)) {
            this.searchCar.push(this.carData[i]);
          }
        }
      } else {
        this.searchCar = this.carData;
      }
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
    },
    updateModal(fix) {
      this.modal1 = true;
      this.fix.id = fix.id;
      this.fix.deviceNo = fix.deviceNo;
      this.fix.reportTitle = fix.reportTitle;
      this.fix.reportType = fix.reportType;
      this.fix.reportUser = fix.reportUser;
      this.fix.reportDesc = fix.reportDesc;
    },
    ok() {
      let _this = this;
      this.axios({
        method: "PUT",
        url: _this.url + "repair/info/update",
        data: {
          id: _this.fix.id,
          deviceNo: _this.fix.deviceNo,
          reportTitle: _this.fix.reportTitle,
          reportType: _this.fix.reportType,
          reportUser: _this.fix.reportUser,
          reportDesc: _this.fix.reportDesc
        }
      })
        .then(function(res) {
          if (res.status == 204) {
            _this.$Message.success("修改成功！");
          } else if (res.status == 400) {
            _this.$Message.error("请填写完整");
          } else {
            _this.$Message.error("服务器出错，请稍后再试");
          }
        })
        .catch(function(err) {
          _this.$Message.error("服务器出错，请稍后再试");
          console.log(err);
        });

      this.axios({
        method: "get",
        url: _this.url + "repair/info/queryList"
      })
        .then(function(res) {
          _this.carData = res.data.rows;
          for (let i = 0; i < _this.carData.length; i++) {
            if (_this.carData[i].state == true) {
              _this.carData[i].state = "是";
            } else {
              _this.carData[i].state = "否";
            }
            if (_this.carData[i].fixTime) {
              _this.carData[i].fixTime = _this.gettime(
                _this.carData[i].fixTime
              );
            }
             if (_this.carData[i].reportTime) {
              _this.carData[i].reportTime = _this.gettime(
                _this.carData[i].reportTime
              );
            }
          }
          _this.searchCar = _this.carData;
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    cancel() {
      this.$Message.info("取消修改");
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
.fix-form {
  width: 300px;
  margin: 0 auto;
}
.fix-sumbit {
  margin-left: 80px;
  margin-right: 30px;
}
.fix-divider {
  font-size: 14px;
}
.fix-list {
  display: flex;
  flex-wrap: wrap;
  overflow-y: scroll;
  height: 500px;
  margin: 0 auto;
}
.fix-list::-webkit-scrollbar {
  display: none;
}
.fix-card {
  width: 400px;
  cursor: pointer;
  margin: 10px 40px;
}
.fix-card-flex {
  display: flex;
}
.fix-content {
  width: 300px;
}
.fix-content div {
  font-size: 18px;
}
.fix-icon {
  width: 100px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  margin-right: 30px;
}
.unfinish {
  color: rgb(179, 55, 38);
}
.finish {
  color: rgb(51, 206, 51);
}
</style>