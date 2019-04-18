<template>
  <div class="index">
    <div class="index-title">当前停车场上报信息</div>
    <div class="index-content">
      <div class="msg-card">
        <div class="card-content">
          <div class="msg-icon">
            <Icon type="md-close-circle" size="60"/>
          </div>
          <div class="msg-content">
            <div class="msg-number">{{opinionData[0].value}}</div>
            <div class="msg-title">报错数量</div>
          </div>
        </div>
      </div>
      <div class="msg-card">
        <div class="card-content">
          <div class="msg-icon yellow">
            <Icon type="md-alert" size="60"/>
          </div>
          <div class="msg-content">
            <div class="msg-number">{{opinionData[1].value}}</div>
            <div class="msg-title">警告数量</div>
          </div>
        </div>
      </div>
      <div class="msg-card">
        <div class="card-content">
          <div class="msg-icon green">
            <Icon type="md-chatbubbles" size="60"/>
          </div>
          <div class="msg-content">
            <div class="msg-number">{{opinionData[2].value}}</div>
            <div class="msg-title">消息数量</div>
          </div>
        </div>
      </div>
    </div>

    <Card class="echarts-pie" shadow>
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
      opinion: ["报错", "警告", "信息"],
      opinionData: [
        { value: 0, name: "报错" },
        { value: 0, name: "警告" },
        { value: 0, name: "信息" }
      ],
      carFlow: [1022, 5244, 2020, 3334, 4390, 5330, 2220]
    };
  },
  created() {
    let _this = this;
    this.axios({
      method: "get",
      url: _this.url + "repair/count/garage"
    })
      .then(res => {
        let data = res.data;
        for (let i = 0; i < data.length; i++) {
          if (data[i].reportType == "消息") {
            _this.opinionData[2].value = data[i].num;
          } else if (data[i].reportType == "警告") {
            _this.opinionData[1].value = data[i].num;
          } else if (data[i].reportType == "报错") {
            _this.opinionData[0].value = data[i].num;
          }
        }
        _this.drawPie("pie");
      })
      .catch(err => {
        console.log(err);
      });
      this.axios({
      method: "get",
      url: _this.url + "bill/count/garage/lastweek/137",
    })
      .then(function(res) {
        _this.carFlow = res.data;
        _this.drawBar("bar");
      })
      .catch(function(err) {
        console.log(err);
      });
  },
  methods: {
    drawPie(id) {
      this.charts = echarts.init(document.getElementById(id));
      this.charts.setOption({
        title: {
          text: "上周停车场上报信息",
          left: "center",
          textStyle: {
            align: "center",
            fontSize: "24",
            fontWeight: "bolder",
            color: "#515a6e"
          }
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

            avoidLabelOverlap: false,
            label: {
              normal: {
                show: false,
                position: "center"
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
                show: false
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
            name: "直接访问",
            type: "bar",
            barWidth: "60%",
            data: this.carFlow
          }
        ]
      });
    }
  },
  //调用
  mounted() {
  }
};
</script>

<style scoped>
.index-title {
  margin-top: 20px;
  text-align: center;
  font-size: 28px;
  font-weight: 600;
}
.index-content {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}
.msg-card {
  width: 400px;
  height: 150px;
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
.msg-number {
  font-size: 50px;
  font-weight: 900;
  margin-bottom: 10px;
}
.msg-title {
  font-size: 18px;
  font-weight: 600;
}

.echarts-pie {
  width: 500px;
  height: 320px;
  margin: 50px 80px;
  float: left;
}
.echarts-bar {
  height: 320px;
  float: left;
  margin: 50px;
}
.yellow {
  background: rgb(255, 153, 0);
}
.green {
  background: rgb(25, 190, 107);
}
</style>