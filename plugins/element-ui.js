import Vue from 'vue'
if (process.client) {
    const ElementUI = require('element-ui')
    const locale = require('element-ui/lib/locale/lang/en');
    Vue.use(ElementUI, {locale})
}