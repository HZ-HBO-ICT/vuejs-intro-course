<template>
  <div id="app">
    <Courses class="flex flex-wrap" />
  </div>
</template>

<script>
import Courses from "./components/Courses.vue";
const axios = require('axios');

export default {
  name: "app",
  components: {
    Courses
  },
  mounted(){
    axios
    .get('http://localhost:8080/data/courses.json')
    .then(response => console.log(response))
  }
};
</script>

<style>
</style>