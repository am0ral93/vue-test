<template>
  <div class="step-content">
    <h1>{{ name }}</h1>
    <div class="step-body">
      <div class="centered">
        <h2 class="el-form__label--big">Выберите тип размещения курса</h2>
        <ul class="btns-list">
          <li>
            <el-button class="el-button__full left" @click="selectCatalogType('1')">Общий каталог</el-button>
          </li>
          <li>
            <el-button class="el-button__full left" @click="selectCatalogType('0')">
              Персональный каталог
              <br>
            (для доступа нужен минимум один курс в общем каталоге)
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
  name: "Step3",
  computed: {
      ...mapFields('NewCourse', [
          'catalogtype'
      ])
  },
  methods: {
    selectCatalogType(catalogtype) {
      this.catalogtype = catalogtype;
      this.$emit("passed");
    }
  }
};
</script>

<style scoped>
</style>
