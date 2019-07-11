// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import '@fortawesome/fontawesome-free/css/all.css'
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import * as VueGoogleMaps from 'vue2-google-maps'
import FullCalendar from 'vue-full-calendar'
import 'fullcalendar/dist/fullcalendar.min.css'

Vue.use(FullCalendar)
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDWyD2j4kQ_kTMzQd-QcOSD-LSmUGx0cnM',
    libraries: 'places'
  }
})
Vue.use(Vuetify, {
  theme: {
    primary: '#3C4E62',
    accent: '#5DADE0',
    error: '#F44336',
    danger: '#DC143C'
  },
  iconfont: 'fa'
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  mounted () {
    var element = document.getElementById('app')
    element.style.display = 'none'
    document.addEventListener('DOMContentLoaded', function () {
      setTimeout(function () {
        element.style.display = 'block'
      }, 3000)
    }, false)
  },
  components: { App },
  template: '<App/>'
})
