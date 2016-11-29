<template>
  <div id="app">
    <h1>A Stream of Consciousness</h1>
    <h2>A simple blog built on Vue.js and Firebase</h2>
    <hr>
    <blog-posts></blog-posts>
  </div>
</template>

<script>
import BlogPostsComponent from './components/blog-posts.vue';

export default {
  name: 'app',
  components: {
    'blog-posts': BlogPostsComponent
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
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

h1, h2 {
  font-weight: normal;
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
