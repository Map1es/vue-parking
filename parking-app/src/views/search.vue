<!-- search.vue -->
<template>
  <div class="search">
    <div id="allmap"></div>
    <div class="map-list">
      <div class="map-item" v-for="item of 21">
        <div class="map-title">大信停车场</div>
        <div class="map-address">地址：广东省中山市石岐区大信二期 <span class="map-distance">距离：580m</span></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
    // 百度地图API功能
    var map = new BMap.Map("allmap");
    var point = new BMap.Point(116.331398, 39.897445);
    map.centerAndZoom(point, 12);

    function myFun(result) {
      var cityName = result.name;
      map.setCenter(cityName);
    }
    var myCity = new BMap.LocalCity();
    myCity.get(myFun);
  }
};
</script>

<style lang='scss' scoped>
.search {
  width: 100%;
  height: 100%;
}
#allmap {
  margin-top: 50px;
  height: 40%;
  width: 100%;
  border-bottom:1px  solid black;
}
.map-list{
  margin-top: 3px;
  border-top: 1px solid #cfc8c8;
  margin-bottom: 100px;
}
.map-item{
  padding: 30px 20px;
  border-bottom: 1px solid #cfc8c8;
  
}
.map-title{
  font-size: 2.3em;
  font-weight: 600;
}
.map-distance{
  float: right;
}
</style>