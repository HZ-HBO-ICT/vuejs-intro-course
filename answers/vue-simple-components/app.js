Vue.component("song", {
  props: ["song"],
  template: `
      <tr><td>{{song.id}}</td><td>{{song.title}}</td><td>{{song.duration}}</td></tr>
    `
});

Vue.component("album", {
  props: ["album"],
  template: `
      <div>
        <h2>{{album.artist}}, {{album.album}} ({{albumLength()}})</h2>
        <table>
          <song v-for="song in album.songs" :song=song />
        </table> 
      </div>
  `,
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
});

var app = new Vue({
  el: "#app",
  data() {
    return {
      albums: [
        {
          artist: "Bruce Springsteen",
          album: "Wreckking Ball",
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
});

// wiith one component
// Vue.component("album", {
//   props: ["album"],
//   template: `
//       <div>
//         <h2>{{album.artist}}, {{album.album}}</h2>
//         <table v-for="song in album.songs">
//           <tr><td>{{song.id}}</td><td>{{song.title}}</td><td>{{song.duration}}</td></tr>
//         </table>
//       </div>
//   `
// });
