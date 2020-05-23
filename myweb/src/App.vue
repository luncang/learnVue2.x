<template>
  <div id="app">
    <img src="./assets/logo.png">

   <p>
     <router-link to="/">Hello world</router-link>
     <router-link to="/about">关于</router-link>
     <router-link to="/news">新闻</router-link>
     <router-link to="/player/1">库里</router-link>
     <router-link to="/player/2">哈登</router-link>
   </p>
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
