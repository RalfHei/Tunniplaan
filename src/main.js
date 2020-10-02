import Vue from 'vue'
import App from './App.vue'
import('@/assets/styles/index.css');
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
Vue.use(VueAxios, axios)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
