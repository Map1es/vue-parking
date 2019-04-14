<style scoped>
.expand-row {
  margin-bottom: 16px;
}
</style>
<template>
  <div>
    <Row class="expand-row">
      <div class="expand-item">
        <div class="expand-key">账号：</div>
        <div class="expand-value">{{ row.username }}</div>
      </div>
      <div class="expand-item">
        <div class="expand-key">余额：</div>
        <div class="expand-value">{{ row.accountbalance }}</div>
      </div>
      <div class="expand-item">
        <div class="expand-key">积分：</div>
        <div class="expand-value">{{ row.bonusPoints }}</div>
      </div>
      <div class="expand-item">
        <div class="expand-key">权限：</div>
        <div class="expand-value">{{ row.authorityId }}</div>
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
