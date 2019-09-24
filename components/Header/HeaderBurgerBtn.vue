<template>
  <a href="javascript:" class="mob-btn" @click="openMenu()">
    <span></span>
  </a>
</template>

<script>
export default {
  methods: {
    openMenu() {
      let html = document.querySelector('html');
      html.classList.toggle('mobile-menu-open');
    }
  }
}
</script>

