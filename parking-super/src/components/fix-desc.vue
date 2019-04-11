<style scoped>
.expand-row {
  margin-bottom: 16px;
}
</style>
<template>
  <div>
    <Row class="expand-row">
      <div class="expand-item">
        <div class="expand-key">上报详情：</div>
        <div class="expand-value">{{ row.reportDesc }}</div>
      </div>
      <div class="expand-item">
        <div class="expand-key">修理人名称：</div>
        <div class="expand-value">{{ row.fixUser }}</div>
      </div>
      <div class="expand-item">
        <div class="expand-key">修理时间：</div>
        <div class="expand-value">{{ row.fixTime }}</div>
      </div>
      <div class="expand-item">
        <div class="expand-key">修理描述：</div>
        <div class="expand-value">{{ row.fixDesc }}</div>
      </div>
    </Row>
  </div>
</template>
<script>
export default {
  props: {
    row: Object
  }
};
</script>

<style scoped>
.expand-item {
  margin: 10px 0px;
  display: flex;
}
.expand-value{
  width: 90%;
  white-space: normal;
  word-break: break-all;
  word-wrap: break-word;
}
</style>
