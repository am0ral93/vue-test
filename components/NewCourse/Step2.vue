<template>
  <div class="step-content">
    <h1>{{ name }}</h1>
    <div class="step-body">
      <div class="centered">
        <h2 class="el-form__label--big">Выберете категорию курса</h2>
        <ul class="btns-list">
          <li v-for="category in categories" :key="category.id">
            <el-button class="el-button__full left" @click="selectCategory(category)">
              <i><img src="~/assets/images/ico5.svg" alt="ico"></i>
              {{ category.name}}
            </el-button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { createHelpers } from 'vuex-map-fields';

const { mapFields } = createHelpers({
    getterType: 'getNewCourseField',
    mutationType: 'updateNewCourseField',
});

export default {

  name: "Step2",
  data() {
      return {
          categories: []
      }
  },
  computed: {
      ...mapFields('NewCourse', [
          'category'
      ])
  },
  methods: {
    loadCategories() {
      this.$axios.get("rest/categories").then(response => {
        this.categories = response.data;
      });
    },
    selectCategory(category) {
      this.category = category;
    //  this.$parent.category = category;

      this.$emit("passed");
    }
  },
  created() {
    this.loadCategories();
  }
};
</script>

<style scoped>
</style>
