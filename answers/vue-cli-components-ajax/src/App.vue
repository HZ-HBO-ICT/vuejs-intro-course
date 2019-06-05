<template>
  <div id="app">
    <Album v-for="album in albums" v-bind:key="album.id" v-bind:album="album"></Album>
  </div>
</template>

<script>
const axios = require("axios");
import Album from "./components/Album.vue";

export default {
  name: "app",
  components: { Album },
  data() {
    return {
      albums: []
    };
  },
  mounted() {
    axios
      .get("./data/albums.json")
      .then(response => (this.albums = response.data));
  }
};
</script>

<style>
</style>