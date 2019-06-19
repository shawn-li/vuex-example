<template>
  <div id="app">
      <!--留坑，非常重要-->
      <keep-alive>
        <router-view class="main"></router-view>
      </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #808695;
}
</style>
