<template>
  <div class="w-1/4 rounded overflow-hidden shadow-lg">
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">{{ name }}</div>
      <ul class="text-gray-700 text-base">
        <li>start datum: {{ startDate }}</li>
        <li>eind datum: {{ endDate }}</li>
      </ul>
    </div>
    <div class="px-6 py-4">
      <span
        class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
      >#{{termId}}</span></div>
  </div>
</template>

<script>
export default {
  name: "Course",
  props: {
    name: String,
    startDate: String,
    endDate: String,
    termId: Number
  }
};
</script>

<style></style>