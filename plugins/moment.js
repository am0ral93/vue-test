import Vue from 'vue';
import moment from 'vue-moment';
import 'moment/locale/ru'  // without this line it didn't work

Vue.use(moment);

//console.log(Vue.moment().locale());