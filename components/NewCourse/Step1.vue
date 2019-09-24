<template>
  <div class="step-content">
    <div slot="title">
      <h1>Создайте свой курс</h1>
    </div>

    <el-form class="step-body" slot="body">
      <div class="centered">
        <el-form-item>
          <label>
            <span class="el-form__label--big">Название курса</span>
            <el-input v-model="name" @blur="$v.name.$touch()"></el-input>
          </label>
          <div v-if="$v.name.$invalid" class="invalid-feedback">Пожалуйста, заполните данное поле</div>
        </el-form-item>
        <el-button type="primary" @click="onSubmit" :disabled="$v.$invalid">Создать курс</el-button>
      </div>
    </el-form>
  </div>
</template>

<script>
import { createHelpers } from 'vuex-map-fields';
import { required } from 'vuelidate/lib/validators';

const { mapFields } = createHelpers({
    getterType: 'getNewCourseField',
    mutationType: 'updateNewCourseField',
});

export default {
  name: "Step1",
  computed: {
      ...mapFields('NewCourse', [
          'name'
      ])
  },
  methods: {
    onSubmit() {
      this.$parent.name = this.name;
      this.$emit("passed");
    }
  },
  created() {
  },
    validations:{
        name:{
            required
        }
    }

};
</script>

<style scoped>
</style>
