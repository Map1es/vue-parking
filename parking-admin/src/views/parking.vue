<template>
  <div class="Parking">
    <Form :label-width="100" class="parkingFrom">
      <FormItem label="停车场名称：">{{parking.name}}</FormItem>
      <FormItem label="车位总数量：">{{parking.number}}</FormItem>
      <FormItem label="车位空闲数量：">{{parking.realnum}}</FormItem>
      <FormItem label="停车场经纬度：">{{parking.map}}</FormItem>
      <FormItem label="详情：">{{parking.details}}</FormItem>
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
        realnum: 0,
        map: "",
        details: "",
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
        console.log(res);
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
.parkingFrom {
  margin: 20px auto;
  width: 60%;
}
</style>


