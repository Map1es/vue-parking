<template>
  <div class="infoParking">
    <Form :label-width="100" class="parkingFrom">
      <FormItem label="停车场名称：">{{parking.name}}</FormItem>
      <FormItem label="车位总数量：">{{parking.number}}</FormItem>
      <FormItem label="车位空闲数量：">{{parking.realnum}}</FormItem>
      <FormItem label="停车场经纬度：">{{parking.map}}</FormItem>
      <FormItem label="详情：">{{parking.details}}</FormItem>
      <FormItem>
        <Button
          type="primary"
          :style="{marginRight:'20px'}"
          :to="{path:'/updateParking', query:{garageId:parking.garageId}}"
        >修改</Button>
        <Button @click="goback">返回</Button>
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
        garageId: this.$route.query.garageId,
        name: "",
        number: 0,
        realnum: 0,
        map: "",
        admin: "",
        details: ""
      }
    };
  },
  created() {
    let _this = this;
    this.axios({
      method: "get",
      url: _this.url + "garage/info/query/" + _this.parking.garageId
    })
      .then(res => {
        _this.parking.name = res.data.garageName;
        _this.parking.number = res.data.sumSapce;
        _this.parking.realnum = res.data.realSpace;
        _this.parking.map = res.data.latitudeAndLongitude;
        _this.parking.details = res.data.details;
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
.parkingFrom {
  margin: 20px auto;
  width: 800px;
}
</style>


