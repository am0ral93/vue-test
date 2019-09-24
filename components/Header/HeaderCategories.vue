<template>
<div>
  <el-dropdown class="link-dropdown" @command="handleCommand">
    <span class="el-dropdown-link">
      <i class="icon-tile-big"></i>
      Все категории
    </span>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item command="Action 1">Action 1</el-dropdown-item>
      <el-dropdown-item command="Action 2">Action 2</el-dropdown-item>
      <el-dropdown-item command="Action 3">Action 3</el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>

</div>
</template>

<script>
  export default {
    data() {
      return {}
    },
    methods: {
      handleCommand(command) {
        this.$message('выбран ' + command);
      },
    }
  }
</script>