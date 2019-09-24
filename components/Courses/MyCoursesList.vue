<template>
  <div>
    <course-item v-for="course in courses" :key="course.id" :course="course"></course-item>
  </div>
</template>

<script>
import CourseItem from "../CourseItem";

export default {
  name: "MyCoursesList",
  components: {
    CourseItem
  },
  data() {
    return {
      courses: []
    };
  },
  methods: {
    async loadCourses() {
      // this.$axios.get("me/courses").then(response => {
        this.$axios.get("rest/courses").then(response => {
        this.courses = response.data;
        console.log(this.courses);
      });
    }
  },
  created() {
    this.loadCourses();
  }
};
</script>

<style scoped>
</style>
