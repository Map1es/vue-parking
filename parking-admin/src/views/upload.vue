<template>
  <div class="upload">
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
    <div>识别车牌号：{{carnum}}</div>
    <img :src="inImg">
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
      carId:null
    };
  },
  methods: {
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
              if (res.status == 201) {
                _this.$Message.success("识别成功！");
              } else {
                _this.$Message.error("识别失败！");
              }
            })
            .catch(err => {
              console.log(err);
            });
        })
        .catch(err => {
          console.log(err);
        });


      this.axios({
        url: _this.url + "parking/space/free/137",
        method: "get"
      })
        .then(res => {
          _this.carId = res.data.id;
          console.log(res)
          _this
            .axios({
              url: _this.url + "parking/space",
              method: "put",
              data: {
                id: _this.carId,
                garageId: 137,
                state:0
              }
            })
            .then(res => {
              if (res.status == 201) {
                _this.$Message.success("识别成功！");
              } else {
                _this.$Message.error("识别失败！");
              }
            })
            .catch(err => {
              console.log(err);
            });
        })
        .catch(err => {
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
              console.log(res);
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
</style>
