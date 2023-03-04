<template>
  <div class="hello">
    <img alt="Vue logo" src="../assets/logo.png">
    <h3>This is Home Page</h3>
    <router-link to="/about">Go to About</router-link>
    
    <router-view/>
    <br />
    <router-link to="/NestedHome">click to see nested component</router-link>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
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
