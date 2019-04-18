<template>
  <div class="upload">
    <div class="button-group">
      <Upload
        name="uploadFile"
        multiple
        :action="url+'pic/upload'"
        :on-success="uploadSuccess"
        :on-error="uploadError"
        :format="['jpg','jpeg','png']"
        accept=".jpg, .jpeg, .png"
        ref="goIn"
      >
        <Button type="primary">进入停车场</Button>
      </Upload>
      <Button @click="test(0)">进入车位</Button>
    </div>
    <div class="button-group">
      <Upload
        ref="goOut"
        name="uploadFile"
        multiple
        :action="url+'pic/upload'"
        :on-success="getOut"
        :on-error="uploadError"
        :format="['jpg','jpeg','png']"
        accept=".jpg, .jpeg, .png"
      >
        <Button type="primary">离开停车场</Button>
      </Upload>
      <Button @click="test(1)">离开车位</Button>
    </div>
    <div>识别车牌号：{{carnum}}</div>
    <img :src="inImg">
  </div>
</template>

<script>
export default {
  data() {
    return {
      url: this.$store.state.url,
      img: "",
      carnum: "",
      inImg: null,
      outImg: null,
      carId: this.$store.state.carId
    };
  },
  beforeCreate() {
    this.$store.dispatch("reflashSet");
  },
  mounted() {
    this.carId = this.$store.state.carId;
  },
  methods: {
    test(state) {
      let _this = this;
      _this
        .axios({
          url: _this.url + "parking/space",
          method: "put",
          data: {
            id: _this.carId,
            garageId: 137,
            state: state
          }
        })
        .then(res => {
          _this.$Message.success("更改停车位状态成功！");
        })
        .catch(err => {
          _this.$Message.error("更改停车位状态失败！");
          console.log(err);
        });
    },
    uploadSuccess(response, file) {
      this.img = response.name;
      this.inImg = response.url;
      let _this = this;
      this.axios({
        url: _this.url + "plate/license",
        method: "get",
        params: {
          imgName: _this.img
        }
      })
        .then(res => {
          _this.carnum = res.data.plate;
          _this
            .axios({
              url: _this.url + "bill/info",
              method: "post",
              data: {
                userId: 848171,
                userName: "ywj",
                plateNum: _this.carnum,
                garageId: 137
              }
            })
            .then(res => {
              _this.$Message.success("识别成功！");
              _this
                .axios({
                  url: _this.url + "parking/space/free/137",
                  method: "get"
                })
                .then(res => {
                  window.localStorage.setItem("carId", res.data.id);
                  _this.$store.dispatch("reflashSet");
                })
                .catch(err => {
                  _this.$Message.error("识别失败！");
                  console.log(err);
                });
            })
            .catch(err => {
              _this.$Message.error("识别失败！");
              console.log(err);
            });
        })
        .catch(err => {
          _this.$Message.error("识别失败！");
          console.log(err);
        });
    },
    getOut(response) {
      this.img = response.name;
      let _this = this;
      this.axios({
        url: _this.url + "plate/license",
        method: "get",
        params: {
          imgName: _this.img
        }
      })
        .then(res => {
          _this.carnum = res.data.plate;
          _this
            .axios({
              url: _this.url + "bill/info/checkout",
              method: "put",
              data: {
                plateNum: _this.carnum,
                garageId: 137
              }
            })
            .then(res => {
              _this.$Message.success("识别成功！");
            })
            .catch(err => {
              console.log(err);
            });
        })
        .catch(err => {
          console.log(err);
        });
    },
    uploadError(error) {
      console.log(error);
    }
  }
};
</script>

<style scoped>
.button-group {
  margin: 20px;
}
.button-group div {
  margin-right: 20px;
}
</style>
