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
        <div class="content-item">
          <van-icon name="gold-coin" color="#FFC125"/>
          <span>缴费查询</span>
        </div>
      </van-col>
      <van-col span="6">
        <div class="content-item">
          <van-icon name="map-marked"/>
          <span>停车场查询</span>
        </div>
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
  </div>
</template>

<script>
import { Search, Row, Col, Icon, Swipe, SwipeItem,Lazyload  } from "vant";
export default {
  components: {
    [Search.name]: Search,
    [Row.name]: Row,
    [Col.name]: Col,
    [Icon.name]: Icon,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [Lazyload.name]: Lazyload ,
  },
  data() {
    return {
      value: "",
      images: [
        '../img/car1.jpg',
        '../img/car2.jpg'
      ]
    };
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
  img{
    width: 100%;
    height: 100%;
  }
}
</style>
