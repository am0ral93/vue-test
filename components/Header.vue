<template>

    <el-header>
        <div v-if="!preloader" style="position: absolute;height: 100000vh;width: 100vw;background: white;z-index: 1000;"
             class="preloader-x">
            <img style="z-index: 100000000;position: fixed;top: 40%;left: 50%;width: 200px;margin-left: -100px;"
                 src="~/assets/images/logo.svg">
            <label style="position: fixed;
z-index: 1000000;
top: 40%;
width: 100%;
text-align: center;
margin-top: 65px;">Подождите, пожалуйта...</label>
        </div>

        <header-burger-btn v-if="showMobFn"></header-burger-btn>
        <div class="container">
            <div class="header-box">
                <div class="inner-box">

                    <nuxt-link to="/courses">
                        <logo></logo>
                    </nuxt-link>
                    <!--<div class="preview" style="margin-left: 30px;">-->
                    <!--<div class="ico">-->
                    <!--<a href="https://tgram.one/tutorrcom" target="_blank">-->
                    <!--<img src="~/assets/images/telega.png" style="height: 30px;" alt="ico"/>-->
                    <!--</a>-->

                    <!--</div>-->
                    <!--</div>-->
                    <el-button style="height: 15px;line-height: 0;margin-left: 10px;"
                               class="el-button__toogle-button active"
                    >Панель учителя
                    </el-button>

                </div>
                <div class="el-header__user-box">
                    <div class="user">
                        <ul class="el-header__icons-list">

                            <li v-if="!showMobFn">
                                <user-balance></user-balance>
                            </li>
                        </ul>
                        <el-menu :default-active="activeIndex" class="el-header__user-holder" mode="horizontal"
                                 @select="handleSelect">
                            <el-submenu popper-class="el-header__user-dropdown" index="1">
                                <template slot="title">
                                    <div class="preview">
                                        <img :src="user.avatar" alt="">
                                    </div>
                                </template>
                                <el-menu-item>
                                    <nuxt-link to="/profile">

                                        <div class="info-box">
                                            <div class="preview">
                                                <img :src="user.avatar" alt="" style="height: 30px; -o-object-fit: cover;object-fit: cover;-o-object-position: center;object-position: center;border-radius: 50%;">
                                            </div>
                                            <a href="#" class="info-text">
                                                <strong>{{ user.name }}</strong>
                                                <span>{{ user.email }}</span>
                                            </a>
                                        </div>
                                    </nuxt-link>

                                </el-menu-item>

                                <div v-if="user.beta_tester" style="border-color: #2737A0;color: #2737A0;background: none;">
                                    <p style="text-align: center;margin: 0;">
                                        <i class="el-icon-star-on"></i>
                                        Beta-tester
                                    </p>
                                </div>

                                <el-menu-item v-if="showMobFn">
                                    <user-balance></user-balance>
                                </el-menu-item>

                                <el-menu-item>
                                    <nuxt-link to="/support">
                                        <i class="icon-pencil"></i>
                                        Тикеты
                                    </nuxt-link>
                                </el-menu-item>
                                <el-menu-item>
                                    <nuxt-link to="/settings">
                                        <i class="icon-settings"></i>
                                        Настройки
                                    </nuxt-link>
                                </el-menu-item>

                                <el-menu-item>
                                    <nuxt-link to="/faq">
                                        <div class="box">
                                            <i class="icon-check"></i>
                                            FAQ
                                        </div>
                                    </nuxt-link>
                                </el-menu-item>


                                <el-menu-item v-on:click="logout">
                                    <i class="icon-ico4"></i>
                                    Выйти
                                </el-menu-item>
                                <el-menu-item class="custom-item">
                                    <i class="icon-ico5"></i>
                                    Перейти в аккаунт ученика
                                    <i class="icon-arr-right small"></i>
                                </el-menu-item>
                            </el-submenu>
                        </el-menu>
                    </div>
                </div>
            </div>
        </div>
    </el-header>
</template>


<script>

    import UserBalance from './Header/UserBalance';
    import HeaderBurgerBtn from './Header/HeaderBurgerBtn';
    import HeaderSearch from './Header/HeaderSearch';
    import HeaderCategories from './Header/HeaderCategories';
    import {checkSize} from './mixins/checkSize';
    import Logo from './Header/HeaderLogo';

    export default {
        name: "Header",
        mixins: [checkSize],
        components: {
            HeaderSearch,
            Logo,
            HeaderCategories,
            HeaderBurgerBtn,
            UserBalance
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            },
            async logout() {
                await this.$axios.$post(process.env.API_URL + 'site/logout');
                location.href = process.env.API_URL + 'login';
            }
        },
        data() {
            return {
                preloader: false,
                activeIndex: '1',
                activeIndex2: '1',
                user: {
                    name: '',
                    email: '',
                    avatar: '',
                    balance: ''
                },
                balance: '',
                role: '',

            }
        },
        created() {
            this.$axios.get("/rest/user").then(response => {
                this.user = response.data;
                this.balance = this.user.balance;
                this.role = this.user.role;

                this.preloader = true;

            });
            this.$moment.updateLocale('en', {
                months: [
                    "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль",
                    "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"
                ]
            });
        },
        beforeCreate() {
            if (this.$cookies.get('_identity-frontend') !== undefined) {
                this.$axios.get("/rest/user").then(response => {
                    this.user = response.data;
                    this.balance = this.user.balance;
                    this.role = this.user.role;
                    this.beta_tester = this.user.beta_tester;
                });
            }
            // }else if(this.$router.history.current.path !=='/huesons' && this.$router.history.current.path !== '/login') {
            //     console.log(this.$router.history.current.path);
            //     this.$router.replace('/huesons');
            // }
        },
        watch: {
            balance(newName) {
                localStorage.balance = newName;
            },
            role(newName) {
                localStorage.role = newName;
            }
        },

    };
</script>

<style lang="scss">
</style>
