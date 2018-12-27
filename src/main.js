import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Vuetify from 'vuetify'
import VueAnalytics from 'vue-analytics'
import BootstrapVue from 'bootstrap-vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'

import * as VueHamburgerButton from 'vue-hamburger-button'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'swiper/dist/css/swiper.css'


import 'firebase/storage'; 

Vue.use(VueAnalytics, {
  id: 'UA-128950882-1'
})
Vue.use(Vuetify)
Vue.use(BootstrapVue);
Vue.use(VueAwesomeSwiper);
Vue.use(VueHamburgerButton);  
Vue.use(require('vue-moment'));


var VueScrollTo = require('vue-scrollto');
var firebase = require('firebase/app');

var options = {
  container: '#app',
  easing: 'ease-in',
  offset: -60,
  force: true,
  cancelable: true,
  onStart: function(element) {
    // scrolling started
  },
  onDone: function(element) {
    // scrolling is done
  },
  onCancel: function() {
    // scrolling has been interrupted
  },
  x: false,
  y: true
}

var config = {
  apiKey: "AIzaSyBOt3k5zNJ34ii-pVyojeMvOTNt_D0tM34",
  authDomain: "web-gastroinnova.firebaseapp.com",
  databaseURL: "https://web-gastroinnova.firebaseio.com",
  projectId: "web-gastroinnova",
  storageBucket: "web-gastroinnova.appspot.com",
  messagingSenderId: "418551106596"
};
firebase.initializeApp(config);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
