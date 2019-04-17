<template>
  <div class="search">
    <div id="allmap"></div>
    <div id="r-result">
      <van-panel
        v-for="item in parking"
        :key="item.garageName"
        :title="item.garageName"
        :desc="'剩余车位：'+item.realSpace+'个'"
        :status="item.len+'m'"
        @click="goMap"
      ></van-panel>
    </div>
  </div>
</template>
<script>
import { NavBar, Panel, Button, Dialog } from "vant";
export default {
  components: {
    [NavBar.name]: NavBar,
    [Panel.name]: Panel,
    [Button.name]: Button,
    [Dialog.name]: Dialog,
  },
  data() {
    return {
      url: this.$store.state.url,
      mapPointX: 0,
      mapPointY: 0,
      totalResults: [],
      parking: []
    };
  },
  created() {
    let _this = this;
    this.axios({
      method: "get",
      url: _this.url + "garage/info/queryList"
    })
      .then(res => {
        _this.parking = res.data.rows;
        for (let i = 0; i < _this.parking.length; i++) {
          _this.parking[i].len = Math.floor(Math.random() * 1000);
          if (_this.parking[i].realSpace == 0) {
            _this.parking.splice(i, 1);
            i--;
          }
        }
        _this.parking.sort((a, b) => {
          return a.len - b.len;
        });
      })
      .catch(err => {
        console.log(err);
      });
  },
  methods: {
    setMap() {
      let _this = this;
      var map = new BMap.Map("allmap");
      var point = new BMap.Point(113.42206002, 22.54517751);
      map.centerAndZoom(point, 18);
      var top_right_navigation = new BMap.NavigationControl({
        anchor: BMAP_ANCHOR_TOP_RIGHT,
        type: BMAP_NAVIGATION_CONTROL_SMALL
      });
      map.addControl(top_right_navigation);
      var geolocation = new BMap.Geolocation();
      geolocation.getCurrentPosition(
        function(r) {
          if (this.getStatus() == BMAP_STATUS_SUCCESS) {
            var mk = new BMap.Marker(r.point);
            map.addOverlay(mk);
            map.panTo(r.point);
          } else {
            alert("failed" + this.getStatus());
          }
        },
        { enableHighAccuracy: true }
      );
      var local = new BMap.LocalSearch(map, {
        renderOptions: { map: map }
      });
      local.search("停车场");
    },
    goMap() {
      Dialog.confirm({
        title: "是否跳转",
        message: "是否跳转到百度地图页面进行导航？"
      })
        .then(() => {
          window.location.href =
            "http://api.map.baidu.com/marker?location=113.42206002,22.54517751&title=我的位置&content=我的位置&output=html&src=webapp.baidu.openAPIdemo";
        })
        .catch(() => {
          // on cancel
        });
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
  position: fixed;
  top: 0;
}
#r-result {
  font-size: 0.12rem;
  height: 3rem;
}
</style>
