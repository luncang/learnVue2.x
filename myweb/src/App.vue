<template>
  <div id="app">
    <img src="./assets/logo.png">

    <hr/>
    <button class="btn btn-primary">确定</button>
    <button class="btn btn-success">使用</button>
    <button class="btn btn-danger">注意</button>
    <hr/>

    <div class="myclass1">你好！自定义class</div>
    <hr/>
    <router-view/>
  </div>
</template>

<script>
  import './assets/my.css'
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
  margin-top: 60px;
}
</style>
