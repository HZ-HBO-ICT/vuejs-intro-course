<template>
  <div>
    <h2>{{ album.artist}}, {{album.album}} ( {{ albumLength() }} )</h2>
    <table>
      <Song v-for="song in album.songs" v-bind:key="song.id" v-bind:song="song"/>
    </table>
  </div>
</template>

<script>
import Song from "./Song.vue";

export default {
  name: "Albums",
  components: {Song},
  props: ["album"],
  methods: {
    albumLength: function() {
      //we are using a higher order function (.reduce) to accumulate the duration of the songs
      let duration = this.album.songs.reduce(function(accumulator, song) {
        return accumulator + song.duration;
      }, 0);
      return duration;
    }
  },
  mounted: function() {
    this.albumLength();
  }
};
</script>

<style></style>