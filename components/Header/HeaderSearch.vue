<template>
  <div class="el-header__input-box">
    <el-input
      placeholder="Найти курс"
      prefix-icon="el-icon-search"
      v-model="searchInput">
    </el-input>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        searchInput: '',
      }
    },
  }
</script>