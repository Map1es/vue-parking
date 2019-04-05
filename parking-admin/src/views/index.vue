<template>
  <div class="index">
    <h1 class="index-title">大信二期停车场</h1>
    <div class="index-content">
      <div class="msg-card">
        <div class="card-content">
          <div class="msg-icon blue">
            <Icon type="md-person-add" size="50"/>
          </div>
          <div class="msg-content">
            <div class="msg-number">132</div>
            <div class="msg-title">新增用户</div>
          </div>
        </div>
      </div>
      <div class="msg-card">
        <div class="card-content">
          <div class="msg-icon green">
            <Icon type="md-car" size="50"/>
          </div>
          <div class="msg-content">
            <div class="msg-number">132</div>
            <div class="msg-title">总流量</div>
          </div>
        </div>
      </div>
      <div class="msg-card">
        <div class="card-content">
          <div class="msg-icon pink">
            <Icon type="md-share" size="50"/>
          </div>
          <div class="msg-content">
            <div class="msg-number">132</div>
            <div class="msg-title">分享统计</div>
          </div>
        </div>
      </div>
      <div class="msg-card">
        <div class="card-content">
          <div class="msg-icon">
            <Icon type="md-build" size="50"/>
          </div>
          <div class="msg-content">
            <div class="msg-number">132</div>
            <div class="msg-title">报修数量</div>
          </div>
        </div>
      </div>
    </div>

    <!-- <Card class="parking-card">
      <div class="parking-title">车位实时信息</div>
      <div class="parking-msg">
        <div class="msg-content">
          <span class="msg-number info">1231</span>
          <h4 class="msg-title">总车位数</h4>
        </div>
        <div class="msg-content">
          <span class="msg-number success">831</span>
          <h4 class="msg-title">剩余车位</h4>
        </div>
        <div class="msg-content">
          <span class="msg-number error">431</span>
          <h4 class="msg-title">已停车位</h4>
        </div>
      </div>
    </Card>-->
    <Card class="echarts-pie" shadow>
      <h1 class="pie-title">车位实时信息</h1>
      <div id="pie" style="width: 500px;height:300px;"></div>
    </Card>

    <Card class="echarts-bar" shadow>
      <div id="bar" style="width: 800px;height:300px;"></div>
    </Card>
  </div>
</template>

<script>
import echarts from "echarts";
export default {
  data() {
    return {
      url: this.$store.state.url,
      charts: "",
      opinion: ["已停车位", "剩余车位"],
      opinionData: [
        { value: 0, name: "已停车位" },
        { value: 0, name: "剩余车位" }
      ],
      carFlow: [1022, 5244, 2020, 3334, 4390, 5330, 2220],
      parking: null
    };
  },
  created: function() {
    let _this = this;
    this.axios({
      method: "get",
      url: _this.url + "garage/info/137"
    })
      .then(function(res) {
        _this.parking = res.data;
        _this.opinionData[0].value = _this.parking.sumSapce - _this.parking.realSpace;
        _this.opinionData[1].value = _this.parking.realSpace;
        _this.drawPie("pie");
        _this.drawBar("bar");
      })
      .catch(function(err) {
        console.log(err);
      });
    this.axios({
      method: "get",
      url: _this.url + "bill/count/garage/lastweek/137"
    })
      .then(function(res) {
        _this.carFlow = res.data;
      })
      .catch(function(err) {
        console.log(err);
      });
    // this.axios({
    //   method: "post",
    //   url: _this.url + "garage/info",
    //   data: {
    //     garageName: "大信",
    //     latitudeAndLongitude: "123123123",
    //     details: "大信",
    //     attribute: "地面免费",
    //     sumSapce: 1
    //   }
    // })
    //   .then(function(res) {
    //     console.log(res);
    //   })
    //   .catch(function(err) {
    //     console.log(err);
    //   });
  },
  methods: {
    drawPie(id) {
      this.charts = echarts.init(document.getElementById(id));
      this.charts.setOption({
        title: {
          text: "车位总数",
          subtext: this.parking.sumSapce,
          textStyle: {
            color: "#515a6e",
            fontSize: 25
          },
          subtextStyle: {
            fontSize: 20,
            color: ["#ff9d19"]
          },
          x: "center",
          y: "center"
        },
        tooltip: {
          trigger: "item",
          formatter: "{a}<br/>{b}:{c} ({d}%)"
        },
        legend: {
          padding: [30, 5, 5, 35],
          orient: "vertical",
          x: "left",
          data: this.opinion
        },
        series: [
          {
            name: "停车场信息",
            type: "pie",
            radius: ["50%", "70%"],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: true
              },
              emphasis: {
                show: false,
                textStyle: {
                  fontSize: "30",
                  fontWeight: "blod"
                }
              }
            },
            labelLine: {
              normal: {
                show: true
              }
            },
            data: this.opinionData
          }
        ]
      });
    },
    drawBar(id) {
      this.charts = echarts.init(document.getElementById(id));
      this.charts.setOption({
        title: {
          text: "上周停车场流量",
          left: "center",
          textStyle: {
            align: "center",
            fontSize: "24",
            fontWeight: "bolder",
            color: "#515a6e"
          }
        },
        color: ["#3398DB"],
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow"
          }
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: [
          {
            type: "category",
            data: [
              "星期一",
              "星期二",
              "星期三",
              "星期四",
              "星期五",
              "星期六",
              "星期日"
            ],
            axisTick: {
              alignWithLabel: true
            }
          }
        ],
        yAxis: [
          {
            type: "value"
          }
        ],
        series: [
          {
            name: "车流量",
            type: "bar",
            barWidth: "60%",
            data: this.carFlow
          }
        ]
      });
    }
  },
  //调用
  mounted: function() {
  }
};
</script>

<style scoped>
.index-title {
  text-align: center;
  font-size: 26px;
  font-weight: bold;
}
.parking-card {
  width: 360px;
  height: 200px;
  margin: 10px 20px;
  text-align: center;
}
.parking-title {
  font-size: 20px;
  font-weight: 600;
  margin: 5px 10px;
}
.parking-msg {
  display: flex;
}
.msg-content {
  width: 30%;
  text-align: center;
  margin: 10px;
}
.msg-title {
  font-size: 16px;
}
.msg-number {
  font-size: 38px;
  font-weight: 900;
}

.index-content {
  display: flex;
  margin: 30px auto;
}
.msg-card {
  width: 310px;
  height: 140px;
  border: 1px solid #f1f1f1;
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
  margin: 0 20px;
}
.card-content {
  display: flex;
  height: 100%;
  width: 100%;
}
.msg-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  background: rgb(237, 63, 20);
  padding: 15px;
}
.msg-content {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.pie-title {
  text-align: center;
  font-size: 22px;
  font-weight: 600;
}
.echarts-pie {
  width: 480px;
  height: 340px;
  margin: 40px 20px;
  float: left;
}
.echarts-bar {
  height: 340px;
  float: left;
  margin: 40px 30px;
}
.blue {
  background: #2db7f5;
}
.green {
  background: #19be6b;
}
.red {
  background: #ed4014;
}
.pink {
  background: rgb(228, 108, 187);
}
</style>