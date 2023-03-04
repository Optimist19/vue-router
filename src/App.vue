<template>
  <!-- In the router link, if you don't want to use this approach "/" you can use the name approach -->
  <router-link :to="{name: 'HomePage'}">Home |</router-link>
  <router-link :to="{name: 'AboutPage'}">About |</router-link>
  <router-link :to="{name: 'JobS'}">Jobs</router-link>

  <button @click="forward">Forward</button>
  <button @click="redirect">Home</button>
  <button @click="back">Backward</button>
  <router-view/>
</template>


<script>
import {router} from "vue-router"
export default{
  name: "App",
  methods:{
    forward(){
      this.$router.go(1)
    },

    redirect(){
      // this.$router.push("/")
      this.$router.push({name: "Home"})

    },

    back(){
      this.$router.go(-1)
    }  
  }
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
