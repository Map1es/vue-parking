<template>
  <div class="Parking">
    <div class="parking-form">
      <div class="form-item">
        <div class="item-name">停车场名称：</div>
        <span class="item-content">{{parking.name}}</span>
      </div>
      <div class="form-item">
        <div class="item-name">车位总数量：</div>
        <div class="item-content">{{parking.number}}</div>
      </div>
      <div class="form-item">
        <div class="item-name">车位空闲数量：</div>
        <div class="item-content">{{parking.realnum}}</div>
      </div>
      <div class="form-item">
        <div class="item-name">收费标准：</div>
        <div class="item-content">{{parking.fee}} 元/小时</div>
      </div>
      <div class="form-item">
        <div class="item-name">停车场位置：</div>
        <div class="item-content">{{parking.map}}</div>
      </div>
      <div class="form-item">
        <div class="item-name">详情：</div>
        <div class="item-content">{{parking.details}}</div>
      </div>
    </div>
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
        realnum: 0,
        map: "",
        details: "",
        fee: 0
      }
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
        _this.parking.realnum = res.data.realSpace;
      })
      .catch(err => {
        console.log(err);
      });
    this.axios({
      method: "get",
      url: _this.url + "fee/scale/garageId/137"
    })
      .then(res => {
        _this.parking.fee = res.data.price;
      })
      .catch(err => {
        console.log(err);
      });
  },
  methods: {
    goback() {
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped>
.parking-form {
  margin: 20px auto;
  width: 60%;
}
.form-item {
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 16px;
  display: flex;
}
.item-name {
  text-align: end;
  display: inline-block;
  width: 160px;
}
.item-content {
  margin-left: 10px;
  display: inline-block;
  width: 65%;
}
</style>


