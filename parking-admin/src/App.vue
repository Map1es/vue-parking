<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',

}
</script>

<style>
#app {
  height: 100%;
  width: 100%;
  background: #f1f1f1;
}
#app::-webkit-scrollbar {
  display: none;
}
</style>
