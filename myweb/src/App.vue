<template>
  <div id="app">
    <img src="./assets/logo.png">

    <!--    <p>-->
    <!--      <router-link to="/">Hello world</router-link>-->
    <!--      <router-link to="/about">关于</router-link>-->
    <!--      <router-link to="/news">新闻</router-link>-->
    <!--      <router-link to="/player/1">库里</router-link>-->
    <!--      <router-link to="/player/2">哈登</router-link>-->
    <!--      <button @click="btnClick('1')">库里里</button>-->
    <!--      <button @click="btnClick('2')">哈等等</button>-->
    <!--    </p>-->
    <!--    <router-view/>-->
    <table width="100%">
      <tr>
        <td colspan="2" style="background-color: darkgoldenrod">
          <router-view name="header"/>
        </td>
      </tr>
      <tr>
        <td width="20%" style="background-color: thistle">
          <router-view name="sidebar"/>
        </td>
        <td width="80%" style="background-color: aquamarine">
          <router-view name="detail"/>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
  import './assets/my.css'

  export default {
    name: 'App',
    methods: {
      btnClick(uid) {
        //可以直接传path，也可以直接传name，类似activity跳转，不用去考虑路径问题
        // this.$router.push({path: '/player/' + uid+'/profile'})
        this.$router.push({name: 'Status', params: {uid: uid}})
        //类似get传参
        this.$router.push({name: 'Status', query: {uid: uid}})
        //前进，后退
        //this.$router.go()
      }
    }
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
