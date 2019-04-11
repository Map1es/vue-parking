<template>
  <div class="addFix">
    <div class="addFix-content">
      <Form label-position="right" :label-width="80">
        <FormItem label="报修名称：">
          <Input v-model="fix.reportTitle" style="width:500px"></Input>
        </FormItem>
        <FormItem label="报修人：">
          <Input v-model="fix.reportUser" style="width:500px"></Input>
        </FormItem>
        <FormItem  label="报修类型：">
          <Select v-model="fix.reportType" style="width:200px">
            <Option v-for="item in fixType" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>
        </FormItem>
         <FormItem label="设备编号：">
          <Input v-model="fix.deviceNo" style="width:500px"></Input>
        </FormItem>
        <FormItem label="报修详情：">
          <Input
            v-model="fix.reportDesc"
            style="width:500px"
            type="textarea"
            :autosize="{minRows: 3,maxRows: 3}"
            placeholder="详情..."
          ></Input>
        </FormItem>
        <FormItem>
          <Button type="primary" class="fix-sumbit" @click="sumbit">提交</Button>
        </FormItem>
      </Form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      url: this.$store.state.url,
      fixType: [
        {
          value: "报错",
          label: "报错"
        },
        {
          value: "警告",
          label: "警告"
        },
        {
          value: "消息",
          label: "消息"
        }
      ],
      fix: {
        deviceNo: "",
        reportTitle: "",
        reportType: "",
        reportUser: "",
        reportDesc: ""
      }
    };
  },
  created() {},
  methods: {
    sumbit() {
      let _this = this;
      this.axios({
        method: "post",
        url: _this.url + "repair/info",
        data: {
          garageId: 137,
          deviceNo: _this.fix.deviceNo,
          reportTitle: _this.fix.reportTitle,
          reportType: _this.fix.reportType,
          reportUser: _this.fix.reportUser,
          reportDesc: _this.fix.reportDesc
        }
      })
        .then(function(res) {
          if (res.status == 201) {
            _this.$Message.success("上传成功！");
            _this.fix = null;
          } else if (res.status == 400) {
            _this.$Message.error("请填写完整");
          } else {
            _this.$Message.error("服务器出错，请稍后再试");
          }
        })
        .catch(function(err) {
          console.log(err);
        });
    }
  }
};
</script>

<style scoped>
.addFix-content {
  width: 800px;
  margin: 0 auto;
}
</style>
