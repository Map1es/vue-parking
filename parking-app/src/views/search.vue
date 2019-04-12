<template>
  <div class="search">
    <div id="allmap"></div>
    <div id="r-result"></div>
  </div>
</template>
<script>
import { NavBar, Panel, Button } from "vant";
import { constants } from "crypto";
import { mkdir } from "fs";
export default {
  components: {
    [NavBar.name]: NavBar,
    [Panel.name]: Panel,
    [Button.name]: Button
  },
  data() {
    return {
      mapPointX: 0,
      mapPointY: 0,
      totalResults: []
    };
  },
  created() {},
  methods: {
    setMap: function() {
      let _this = this;
      var map = new BMap.Map("allmap");
      var point = new BMap.Point(222222.542351, 11123.42002);
      map.centerAndZoom(point, 16);
      map.addControl(navigationControl);
      //显示地图控件
      var navigationControl = new BMap.NavigationControl({
        anchor: BMAP_ANCHOR_TOP_RIGHT,
        type: BMAP_NAVIGATION_CONTROL_ZOOM,
        enableGeolocation: true
      });

      //获取定位
      var geolocation = new BMap.Geolocation();
      geolocation.getCurrentPosition(
        function(r) {
          if (this.getStatus() == BMAP_STATUS_SUCCESS) {
            var mk = new BMap.Marker(r.point);
            map.addOverlay(mk);
            map.panTo(r.point);
            _this.mapPointX = r.point.lng;
            _this.mapPointY = r.point.lat;
          
          } else {
            console.log("无法定位到您的当前位置" + this.getStatus());
          }
        },
        { enableHighAccuracy: true }
      );
      //检索
      var myKeys = ["停车场"];
      var local = new BMap.LocalSearch(map, {
        renderOptions: { map: map, panel: "r-result" },
        pageCapacity: 8
      });
      local.searchInBounds(myKeys, map.getBounds());
    }
  },
  mounted() {
    this.$nextTick(this.setMap);
  }
};
</script>

<style lang="scss" scoped>
.search {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
#allmap {
  width: 100%;
  height: 30%;
}
#r-result {
  font-size: 0.12rem;
}
</style>
