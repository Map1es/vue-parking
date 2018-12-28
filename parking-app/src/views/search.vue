<!-- search.vue -->
<template>
  <div class="search">
    <div id="allmap"></div>
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
  height: 50%;
  width: 100%;
}
</style>