<style scoped>
.expand-row {
  margin-bottom: 16px;
}
</style>
<template>
  <div>
    <Row class="expand-row">
      <div>
        <span class="expand-key">详情：</span>
        <span class="expand-value">{{ row.content }}</span>
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