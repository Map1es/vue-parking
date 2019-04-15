<template>
  <div class="upload">
    <Upload
      name="uploadFile"
      multiple
      :action="url+'pic/upload'"
      :on-success="uploadSuccess"
      :on-error="uploadError"
    >
      <Button type="primary">进入停车场</Button>
    </Upload>

    <Upload
      name="uploadFile"
      multiple
      :action="url+'pic/upload'"
      :on-success="getOut"
      :on-error="uploadError"
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
      carnum: ""
    };
  },
  methods: {
    uploadSuccess(response) {
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
              console.log(res)
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
