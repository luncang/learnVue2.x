<template>
  <div class="hello">
    <pre>{{content}}</pre>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data() {
      return {
        content: ''
      }
    },
    mounted() {
      this.axios.post("http://wthrcdn.etouch.cn/WeatherApi?citykey=101070101").then(body => {
        this.content = body.data;
      })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
