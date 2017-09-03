// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/*
* main.js is the entry point for our application which contains the root Vue instance
* */
import Vue from 'vue'
import store from './vuex/store'
import App from './components/App.vue'
import marked from 'marked'

Vue.filter('marked', marked)

/* eslint-disable no-new */
new Vue({
  store, // inject store to all children
  e1: 'body',
  components: {App}
})
