<template>
  <div class="addParking">
    <h1 class="addParking-title">修改停车场信息</h1>
    <Form ref="formValidate" :label-width="100" class="addFrom">
      <FormItem label="停车场名称：" prop="name">
        <Input v-model="parking.name" placeholder="输入停车场名称"></Input>
      </FormItem>
      <FormItem label="车位数量：" prop="number">
        <InputNumber v-model="parking.number"></InputNumber>
      </FormItem>
      <FormItem label="停车场位置：" prop="map">
        <Input v-model="parking.map" placeholder="输入地址" class="form-map"></Input>
      </FormItem>
      <FormItem label="收费标准：" prop="fee">
        <InputNumber v-model="parking.fee"></InputNumber>元/小时
      </FormItem>
      <!-- <FormItem label="管理员：" prop="admin">
        <Input v-model="parking.admin" placeholder="请输入管理员账号"></Input>
      </FormItem>-->
      <FormItem label="详情：" prop="details">
        <Input v-model="parking.details" type="textarea" :autosize="{minRows: 2,maxRows: 4}"></Input>
      </FormItem>
      <FormItem>
        <Button type="primary" :style="{marginRight:'20px'}" @click="sumbit">提交</Button>
      </FormItem>
    </Form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      url: this.$store.state.url,
      parking: {
        name: "",
        number: 0,
        map: "",
        details: "",
        fee: 0
      },
      feeId: null
    };
  },
  created() {
    let _this = this;
    this.axios({
      method: "get",
      url: _this.url + "garage/info/query/137"
    })
      .then(res => {
        _this.parking.name = res.data.garageName;
        _this.parking.details = res.data.details;
        _this.parking.attribute = res.data.attribute;
        _this.parking.number = res.data.sumSapce;
        _this.parking.map = res.data.latitudeAndLongitude;
      })
      .catch(err => {
        console.log(res);
      });
    this.axios({
      method: "get",
      url: _this.url + "fee/scale/garageId/137"
    })
      .then(res => {
        _this.parking.fee = res.data.price;
        _this.feeId = res.data.feeId;
      })
      .catch(err => {
        console.log(err);
      });
  },
  methods: {
    goback() {
      this.$router.go(-1);
    },
    sumbit() {
      let _this = this;
      this.axios({
        method: "put",
        url: _this.url + "garage/info",
        data: {
          garageId: 137,
          garageName: _this.parking.name,
          latitudeAndLongitude: _this.parking.map,
          details: _this.parking.details,
          attribute: "地下计费",
          sumSapce: _this.parking.number
        }
      })
        .then(res => {
          if (res.status == 204) {
            _this.$Message.success("修改成功");
            _this.$router.push("parking");
          } else if (res.status == 400) {
            _this.$Message.error("请填写完整");
          } else {
            _this.$Message.error("服务器出错，请稍后再试");
          }
        })
        .catch(err => {
          _this.$Message.error("服务器出错，请稍后再试");
          console.log(res);
        });

      this.axios({
        method: "put",
        url: _this.url + "fee/scale",
        data: {
          feeId: _this.feeId,
          price: _this.parking.fee
        }
      })
        .then(res => {})
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style scoped>
.addParking-title {
  text-align: center;
  font-size: 26px;
}
.addFrom {
  margin: 20px auto;
  width: 60%;
}
.form-map {
  width: 30%;
  margin-right: 20px;
}
</style>


