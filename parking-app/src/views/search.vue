<template>
  <div class="search">
    <div id="allmap"></div>
    <div id="r-result"></div>
  </div>
</template>
<script>
import { NavBar, Panel, Button } from "vant";
export default {
  components: {
    [NavBar.name]: NavBar,
    [Panel.name]: Panel,
    [Button.name]: Button
  },
  data() {
    return {
      mapPoint: {
        x: "",
        y: ""
      }
    };
  },
  created() {
    // this.axios({
    //   method: "post",
    //   url: "http://api.map.baidu.com/location/ip"
    // })
    //   .then(res => {
    //     console.log(res);
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
  },
  methods: {
    setMap: function() {
      let _this = this;
      var map = new BMap.Map("allmap");
      var point = new BMap.Point(113.42206002, 22.54517751);
      map.centerAndZoom(point, 15);
      //显示地图控件
      var navigationControl = new BMap.NavigationControl({
        anchor: BMAP_ANCHOR_BOTTOM_RIGHT,
        type: BMAP_NAVIGATION_CONTROL_LARGE,
        enableGeolocation: true
      });
      map.addControl(navigationControl);
      //获取定位
      var geolocation = new BMap.Geolocation();
      geolocation.getCurrentPosition(
        function(r) {
          if (this.getStatus() == BMAP_STATUS_SUCCESS) {
            var mk = new BMap.Marker(r.point);
            map.addOverlay(mk);
            map.panTo(r.point);
            _this.mapPoint.x = r.point.lng;
            _this.mapPoint.x = r.point.lat;
          } else {
            alert("failed" + this.getStatus());
          }
        },
        { enableHighAccuracy: true }
      );

      var myKeys = ["停车场"];
      var local = new BMap.LocalSearch(map, {
        renderOptions: { map: map, panel: "r-result" },
        pageCapacity: 8
      });
      local.searchInBounds(myKeys, map.getBounds());
    }
  },
  mounted() {
    this.setMap();
  }
};
</script>

<style lang="scss" scoped>
.search {
  width: 100%;
  height: 100%;
}
#allmap {
  width: 100%;
  height: 40%;
}
#r-result{
  width: 100%;
  height: 50%;
}
</style>
