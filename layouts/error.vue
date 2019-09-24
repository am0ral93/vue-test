<!--suppress CssUnknownTarget -->
<template >
    <div v-if="error.statusCode === 404" class="c-404" >
      <div class="container">
        <div class="content">
          <nuxt-link to="/">Вернуться на главную</nuxt-link>
        </div>
      </div>
    </div>
    <div v-else class="c-error">
      <div class="container">
        <div class="content">
          <h1>Что-то пошло не так.</h1>
          <h3>Код ошибки : <b>{{ error.statusCode }}</b></h3>
          <nuxt-link to="/">Вернуться на главную</nuxt-link>
        </div>
      </div>
    </div>
</template>


<script>

    export default {
        props: ['error'],
        layout: 'empty', // you can set a custom layout for the error page
        middleware: false
    }
</script>

<style scoped>
  .c-404 {
    width: 100%;
    height: 100%;
    overflow: hidden;
    margin: 0px;
    padding: 0px;
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
    background: url('/404.png') center no-repeat #262626 !important;
  }

  .content {
    width: 100%;
    text-align: center;
    position: absolute;
    bottom: 10%;
    left: 0px;
  }

  .content a {
    display: inline-block;
    text-decoration: none
  }

  .content a, .content a:hover {
    color: rgba(255, 255, 255, 0.3);
  }

  .content a:hover {
    color: rgba(255, 255, 255, 0.5);
  }

  @media only screen and (max-width: 460px), screen and (max-height: 700px) {
    .content {
      position: static;
    }

    .content a {
      display: block;
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0px;
      left: 0px;
      font-size: 0px;
      opacity: 0;
    }

    .c-404 {
      background-size: cover;
    }
  }
</style>
