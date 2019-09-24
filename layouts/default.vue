<template>
  <div id="app">
    <Header/>
    <el-container>
      <Sidebar/>
      <el-main>
        <nuxt/>
        <!-- <Footer/> -->
      </el-main>
    </el-container>
  </div>
</template>



<script>
    
    import Header from '../components/Header';
    import Sidebar from '../components/Sidebar';
    import Footer from '../components/Footer';

    export default {
        components: {
            Header,
            Sidebar,
            Footer
        }
    }
</script>

<style>
</style>