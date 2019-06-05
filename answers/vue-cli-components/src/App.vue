<template>
  <div id="app">
    <Album 
      v-for="album in albums" 
      v-bind:key="album.id"
      v-bind:album="album"
    ></Album>
  </div>
</template>

<script>
import Album from "./components/Album.vue";
 
export default {
  name: "app",
  components: {Album},
  data() {
    return {
      albums: [
        {
          artist: "Bruce Springsteen",
          album: "Wrecking Ball",
          songs: [
            { id: 0, title: "We take care of our own", duration: 3.54 },
            { id: 1, title: "Easy money", duration: 3.35 },
            { id: 2, title: "Shackled and drown", duration: 3.44 }
          ]
        },
        {
          artist: "Bruce Springsteen",
          album: "High Hopes",
          songs: [
            { id: 0, title: "High Hopes", duration: 4.57 },
            { id: 1, title: "Harry's place", duration: 4.03 },
            { id: 2, title: "American Skin", duration: 7.22 }
          ]
        }
      ]
    };
  }
};

</script>

<style>
</style>