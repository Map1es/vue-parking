<template>
  <Upload
    :format="['jpg','jpeg','png']"
    :on-success="uploadSuccess"
    :on-error="uploadError"
    :action="url+'pic/upload'"
  >
    <Button icon="ios-cloud-upload-outline">Upload files</Button>
  </Upload>
</template>

<script>
export default {
  data() {
    return {
      url: this.$store.state.url
    };
  },
  methods: {
    uploadSuccess() {
      this.$Message.info("上传成功");
    },
    uploadError() {
      this.$Message.info("上传失败");
    }
  }
};
</script>

<style scoped>
</style>
