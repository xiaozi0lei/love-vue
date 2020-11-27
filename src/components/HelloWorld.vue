<template>
    <!-- 这里router-link to="newcontact"会把路由导航到http://localhost:8080/#/newcontact   -->
   <h1 @click="onJump">{{ msg }}</h1>
    
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods: {
    onJump() {
      this.$router.push({
        path: '/newcontact'
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
