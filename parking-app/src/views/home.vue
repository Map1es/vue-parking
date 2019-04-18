<template>
  <div id="home">
    <van-search placeholder="请输入搜索关键词" class="home-search" v-model="value"/>

    <van-row type="flex" class="home-content">
      <van-col span="6">
        <div class="content-item">
          <van-icon name="clear" color="red"/>
          <span>违章查询</span>
        </div>
      </van-col>
      <van-col span="6">
        <router-link to="list">
          <div class="content-item">
            <van-icon name="gold-coin" color="#FFC125"/>
            <span>缴费查询</span>
          </div>
        </router-link>
      </van-col>
      <van-col span="6">
        <router-link to="search">
          <div class="content-item">
            <van-icon name="map-marked" color="black"/>
            <span>停车场查询</span>
          </div>
        </router-link>
      </van-col>
      <van-col span="6">
        <div class="content-item">
          <van-icon name="bag" color="#FF7F00"/>
          <span>车品商城</span>
        </div>
      </van-col>
    </van-row>

    <van-swipe :autoplay="3000" indicator-color="white" class="home-swipe">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image">
      </van-swipe-item>
    </van-swipe>

    <div v-show="false" class="count">
      <div class="count-desc">
        <div class="desc-item">
          <div>入场时间</div>
          <div>22:27:00</div>
        </div>
        <div class="desc-item">
          <div>计费标准</div>
          <div>14元/小时</div>
        </div>
        <div class="desc-item">
          <div>推荐车位</div>
          <div>6号</div>
        </div>
      </div>
      <div class="count-money">
        已消费：
        <span>14元</span>
      </div>
    </div>

    <router-link to="list" v-if="costList">
      <van-panel class="cost" :title="costDate" :status="status">
        <div class="cost-content">
          <div class="finish-cost">
            <div>停车时长：{{longTime}}</div>
            <div>已消费：{{cost}}元</div>
          </div>
          <div class="cost-left">
            <van-icon name="arrow"/>
          </div>
        </div>
      </van-panel>
    </router-link>

    <dir v-if="!costList" class="no-cost">
      <van-icon name="completed" color="green"/>已支付所有订单
    </dir>
  </div>
</template>

<script>
import {
  Search,
  Row,
  Col,
  Icon,
  Swipe,
  SwipeItem,
  Lazyload,
  Panel,
  Cell
} from "vant";
export default {
  components: {
    [Search.name]: Search,
    [Row.name]: Row,
    [Col.name]: Col,
    [Icon.name]: Icon,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [Lazyload.name]: Lazyload,
    [Panel.name]: Panel,
    [Cell.name]: Cell
  },
  data() {
    return {
      value: "",
      userid: this.$store.state.userid,
      url: this.$store.state.url,
      url1: this.$store.state.url1,
      images: ["../img/car1.jpg", "../img/car2.jpg"],
      costList: null,
      longTime: "",
      cost: 0,
      status: "未离场",
      costDate: ""
    };
  },
  beforeCreate() {
    this.$store.dispatch("reflashSet");
  },
  created() {
    let _this = this;
    this.axios({
      url: _this.url + "bill/info/queryList/user/" + _this.userid,
      method: "get"
    })
      .then(res => {
        let list = res.data.rows;
        let chuo = Date.parse(new Date());
        for (let i = 0; i < list.length; i++) {
          if (!list[i].status) {
            if (list[i].inTime) {
              let longTime = _this.getdiff(list[i].inTime, chuo);
              let cost = _this.getCost(list[i].inTime, chuo, 14);
              _this.costDate = _this.gettime(list[i].inTime);
              _this.longTime = longTime;
              _this.cost = cost;
            }
            if (list[i].outTime) {
              _this.status = "未支付";
              _this.cost = list[i].payment;
              _this.longTime = _this.getdiff(list[i].inTime, list[i].outTime);
            }
            _this.costList = list[i];
            break;
          }
        }
      })
      .catch(err => {
        console.log(err);
      });
  },
  mounted() {},
  methods: {
    gettime(t) {
      var _time = new Date(t);
      var year = _time.getFullYear();
      var month = _time.getMonth() + 1;
      var date = _time.getDate();
      var hour = _time.getHours();
      var minute = _time.getMinutes();
      var second = _time.getSeconds();
      return (
        year +
        "-" +
        month +
        "-" +
        date +
        " " +
        hour +
        ":" +
        minute +
        ":" +
        second
      ); //这里自己按自己需要的格式拼接
    },
    getdiff(begin, end) {
      let timediff = end - begin;
      let _time = new Date(timediff);
      let beginHour = new Date(begin);
      let hour = _time.getHours();
      let minute = _time.getMinutes();
      let res = "";
      if (hour - beginHour.getHours() > 0) {
        res += (hour - beginHour.getHours()) + "小时";
      }
      if (minute != 0) {
        res += minute + "分钟";
      }
      return res;
    },
    getCost(begin, end, cost) {
      let timediff = end - begin;
      let _time = new Date(timediff);
      let beginHour = new Date(begin);
      let hour = _time.getHours();
      let minute = _time.getMinutes();
      let res = 0;
      if (hour - beginHour.getHours() > 0) {
        res = cost * (hour - beginHour.getHours());
      }
      if (minute != 0) {
        res += cost;
      }
      return res;
    }
  }
};
</script>

<style lang="scss" scoped>
$blue: #2d8cf0;
$fontColor: #323233;
#home {
  height: 100%;
  width: 100%;
  font-size: 0.28rem;
}
.home-search {
  background: $blue !important;
}
.home-content {
  height: 1.4rem;
  background: #fff;
}
.content-item {
  height: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  font-size: 0.6rem;
  span {
    font-size: 0.24rem;
    margin-top: 0.05rem;
    color: $fontColor;
  }
}
.home-swipe {
  height: 3rem;
  background: #fff;
  margin-top: 0.3rem;
  img {
    width: 100%;
    height: 100%;
  }
}
.count {
  margin-top: 0.4rem;
  width: 100%;
  background: #fff;
  height: 2.8rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-weight: 600;
  .count-money {
    width: 100%;
    height: 50%;
    font-size: 0.28rem;
    span {
      font-size: 0.6rem;
      color: rgb(245, 230, 28);
    }
  }
  .count-desc {
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    .desc-item {
      margin: 0.2rem 0.1rem;
      div {
        margin-bottom: 0.1rem;
        font-weight: 600;
        font-size: 0.28rem;
      }
      div:last-child {
        font-size: 0.18rem;
      }
    }
  }
}
.cost {
  margin-top: 0.3rem;
}
.cost-content {
  display: flex;
  justify-content: space-between;
  color: black;
}
.cost-left {
  align-self: center;
  margin-right: 0.3rem;
  font-size: 0.5rem;
}
.finish-cost {
  height: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  div {
    margin: 0.1rem 0.2rem;
  }
}
.no-cost {
  background: #fff;
  width: 100%;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  font-size: 0.3rem;
}
</style>
