<template>
  <div>
    <Course
      v-for="course in courses"
      v-bind:key="course.id"
      v-bind:name="course.name"
      v-bind:startDate="course.startDate"
      v-bind:endDate="course.endDate"
      v-bind:termId="course.termId"
    />
  </div>
</template>

<script>
import Course from "./Course.vue";

export default {
  name: "Courses",
  components:{
    Course
  },
  data() {
    return {
      courses: [
        {
          name: "Programming Basics",
          startDate: "2019-09-01",
          endDate: "2019-11-01",
          termId: 1
        },
        {
          name: "Computerscience Basics",
          startDate: "2019-09-01",
          endDate: "2019-11-01",
          termId: 1
        },
        {
          name: "Professionbal skills",
          startDate: "2019-09-01",
          endDate: "2019-11-01",
          termId: 1
        },
        {
          name: "OOP Theory",
          startDate: "2019-11-01",
          endDate: "2020-02-01",
          termId: 1
        },
        {
          name: "OOP Project",
          startDate: "2019-11-01",
          endDate: "2020-02-01",
          termId: 1
        }
      ]
    };
  }
};
</script>

<style></style>