<template>
  <div class="fix">
    <Input
      @on-change="queryItems(queryvalue)"
      v-model="queryvalue"
      search
      placeholder="搜索报修名称"
      class="paking-search"
    />
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
          @click="sumbit(row.id)"
          style="margin-right:10px"
        >完成</Button>
        <Button type="error">删除</Button>
      </template>
    </Table>

    <Modal v-model="modal1" title="修改报修信息" @on-ok="ok" @on-cancel="cancel">
      <Form label-position="right" :label-width="80">
        <FormItem label="修理人：">
          <Input v-model="fix.fixUser"></Input>
        </FormItem>
        <FormItem label="修理描述：">
          <Input
            v-model="fix.fixDesc"
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
      finish: "finish",
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
        { title: "报修停车场", key: "garageName" },
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
      fix: {
        fixUser: "",
        fixDesc: "",
        id: null
      },
      modal1: false
    };
  },
  created: function() {
    let _this = this;
    this.axios({
      method: "get",
      url: _this.url + "repair/info/queryList"
    })
      .then(function(res) {
        console.log(res);
        _this.carData = res.data.rows;
        for (let i = 0; i < _this.carData.length; i++) {
          if (_this.carData[i].state == true) {
            _this.carData[i].state = "是";
          } else {
            _this.carData[i].state = "否";
          }
          if (_this.carData[i].fixTime) {
            _this.carData[i].fixTime = _this.gettime(_this.carData[i].fixTime);
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
          if (this.carData[i].garageName.includes(value)) {
            this.searchCar.push(this.carData[i]);
          }
        }
      } else {
        this.searchCar = this.carData;
      }
    },
    sumbit(id) {
      this.modal1 = true;
      this.fix.id = id;
    },
    ok() {
      let _this = this;
      this.axios({
        method: "PUT",
        url: _this.url + "repair/info/complete",
        data: {
          id: _this.fix.id,
          fixUser: _this.fix.fixUser,
          fixDesc: _this.fix.fixDesc
        }
      })
        .then(function(res) {
          if (res.status == 204) {
            _this.$Message.success("修改成功！");
            _this.fix.fixUser = "";
            _this.fix.fixDesc = "";
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
      this.fix.fixUser = "";
      this.fix.fixDesc = "";
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
.fix {
  text-align: center;
}
.paking-search {
  width: 280px;
  margin-bottom: 5px;
}
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

