<template>

  <div>
    <h1>球员信息</h1>
    <p>{{detail}}</p>
  </div>

</template>

<script>
  export default {
    name: "Player",
    data() {
      return {
        detail: {}
      }
    },
    mounted() {
      this.detail = this.getPlayerDetail(this.$route.params.uid)
    },
    beforeRouteUpdate(to, from, next) {
      this.detail = this.getPlayerDetail(to.params.uid)
      next()
    },
    methods: {
      getPlayerDetail(uid) {
        switch (uid) {
          case '1':
            return {uid: 1, name: '库里', point: 26}
          case '2':
            return {uid: 2, name: '哈登', point: 30}
          default:
            return {uid: -1}
        }
      }
    }
  }
</script>

<style scoped>

</style>
