<template>
  <div class="hello">
    <pre>{{content}}</pre>
    <h3>{{message}}</h3>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data() {
      return {
        content: '',
        message:'Hello world',
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
h3{
  color: green;
}

  //test

</style>
