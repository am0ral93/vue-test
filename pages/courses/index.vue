<template>
  <div class="main-container">
    <div class="content">
      <div class="courses__head-row">
        <h1>Мои курсы</h1>
        <div class="flex-box">

          <nuxt-link to="/create-course">
          <el-button @click="dialogVisible = true" type="primary">Создать курс</el-button>
          </nuxt-link>

        </div>
      </div>
      <my-courses-list></my-courses-list>
    </div>
  </div>
</template>

<script>
import MyCoursesList from "../../components/Courses/MyCoursesList";
import CreateNewCourse from "../../components/Courses/CreateNewCourse"

export default {
  head: {
    title: 'Курсы - v 0.05'
  },
  components: {
    MyCoursesList,
    CreateNewCourse
  },
  data() {
    return {
      options: [
        {
          value: "Сначала последние",
          label: "Сначала последние"
        },
        {
          value: "Сначала первые",
          label: "Сначала первые"
        },
      ],
      value: "Сначала последние"
    };
  },
  methods: {
    handleCommand(command) {
      this.$message("click on item " + command);
    }
  }
};
</script>

<style>
</style>

