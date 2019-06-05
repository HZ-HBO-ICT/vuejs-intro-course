<template>
  <tr><td>{{song.id}}</td><td>{{song.title}}</td><td>{{song.duration}}</td></tr>
</template>

<script>
export default {
  name: "song",
  props: ["song"]
}
</script>

<style></style>