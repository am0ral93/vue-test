<template>
  <nuxt-link to="/balance">
      <i class="icon-purse"></i>
      <span class="text">{{balance}} р</span>
  </nuxt-link>
</template>

<script>
export default {
    data() {
        return {
            balance: ''
        }
    },
    mounted() {
        if (localStorage.balance) {
            this.balance = localStorage.balance;
        }
    },
}
</script>

