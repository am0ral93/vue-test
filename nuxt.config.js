require('dotenv').config({path: './.env'});
var webpack = require('webpack');
var path = require('path');

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'vue-project',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  modules: [
    'cookie-universal-nuxt',
    '@nuxtjs/dotenv',
    [
      '@nuxtjs/axios',
	  {
        baseURL: process.env.API_URL
      }
    ],
  ],
    router: {
    middleware: ['authenticated'],
  },
  
  loading: { color: '#3B8070' },
  plugins: ['~/plugins/element-ui.js', '~/plugins/moment',
      {src: '~/plugins/vuelidate'},
	  ],	  
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

