<template>

  <aside class="sidebar" style="padding-top: 0;">

    <div class="sidebar__holder">
      <div class="sidebar__scroll">
        <div class="sidebar__head-box" v-if="showMobFn">
          <header-burger-btn></header-burger-btn>
          <logo></logo>
        </div>
        <ul class="sidebar__menu">


          <li @click="openMenu()">
            <nuxt-link  to="/courses">
              <div class="box">
                <i class="icon-ico9"></i>
                <span class="text">Курсы</span>
              </div>
              <span class="plus icon-plus"></span>
            </nuxt-link>
          </li>
          <li @click="openMenu()">
          <nuxt-link to="/tutorials">
              <div class="box">
                <i class="icon-ico2"></i>
                <span class="text">Туториалы</span>
              </div>
              <span class="plus icon-plus"></span>
            </nuxt-link>
          </li>
          <li @click="openMenu()">
          <nuxt-link to="/community">
              <div class="box">
                <i class="icon-comment"></i>
                <span class="text">Публикации</span>
              </div>
              <span class="plus icon-plus"></span>
            </nuxt-link>
          </li>
          <li @click="openMenu()">
            <nuxt-link to="/catalogs">
              <div class="box">
                <i class="icon-loop"></i>
                <span class="text">Каталог курсов</span>
              </div>
            </nuxt-link>
          </li>
          <li @click="openMenu()">
          <nuxt-link to="/messages">
              <div class="box">
                <i class="icon-msg"></i>
                <span class="text">Диалоги</span>
              </div>
            </nuxt-link>
          </li>
          <!--<li @click="openMenu()">-->
          <!--<nuxt-link to="/tiers">-->
              <!--<div class="box">-->
                <!--<i class="icon-purse"></i>-->
                <!--<span class="text">Платные подписки</span>-->
              <!--</div>-->
            <!--</nuxt-link>-->
          <!--</li>-->
          <li @click="openMenu()">
            <nuxt-link to="/consult">
              <div class="box">
                <i class="icon-purse"></i>
                <span class="text">Личные консультации</span>
              </div>
            </nuxt-link>
          </li>
          <li @click="openMenu()">
          <nuxt-link to="/referal">
              <div class="box">
                <i class="el-icon-user"></i>
                <span class="text">Реферальная программа</span>
              </div>
            </nuxt-link>
          </li>
       
          <li v-if="role == 'admin'" @click="openMenu()">
              <div class="box">
                <a :href="uri" target="_blank">
                <span class="text">Панель администратора</span>
                </a>
              </div>
          </li>

        </ul>
      </div>

    </div>
    <div class="sidebar__mob-bg" v-if="showMobFn"></div>
  </aside>
</template>

<script>

import HeaderBurgerBtn from './Header/HeaderBurgerBtn';
import HeaderCategories from './Header/HeaderCategories';
import HeaderSearch from './Header/HeaderSearch';
import { checkSize } from './mixins/checkSize';
import Logo from './Header/HeaderLogo';

export default {
  name: "Sidebar",
  mixins: [checkSize],
  components: {
    HeaderSearch,
    Logo,
    HeaderCategories,
    HeaderBurgerBtn
  },
  data() {
    return {
      uri: '',
      role: 'user',
      isOpenSearch: false,
    }
  },
  mounted() {
    if (localStorage.role) {
      this.role = localStorage.role;
    }
  },
  created(){
    this.uri = process.env.API_URL + 'admin';
  },
  methods: {
    openMenu() {
      let html = document.querySelector('html');
      if(this.showMobFn){
        html.classList.toggle('mobile-menu-open');
      }
     // html.classList.toggle('mobile-menu-open');
    },
    openMenuS() {
      let html = document.querySelector('html');
      html.classList.toggle('mobile-menu-open');
    },
    openSearch() {
      this.isOpenSearch = !this.isOpenSearch;
      console.log(this.isOpenSearch)
    }
  }
};
</script>

<style scoped>
</style>