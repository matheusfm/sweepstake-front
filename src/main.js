import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Axios from 'axios'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import Bet from './components/Bet.vue'
import Game from './components/Game.vue'
import GameDetail from './components/GameDetail.vue'
import Login from './components/Login.vue'
import NotFound from './components/NotFound.vue'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(BootstrapVue)

const axios = Axios.create({
  baseURL: 'http://localhost:9090',
  headers: { 'Accept': 'application/json' },
})

axios.interceptors.response.use(function (response) {
  return response
}, function (error) {
  if(error.response.status === 401) {
    router.push('/login')
  }
  return Promise.reject(error)
})

axios.interceptors.request.use(function (config) {
  config.params = {access_token: localStorage.getItem('access_token')}
  return config
})

Vue.prototype.$http = axios

const routes = [
  { path: '/apostas', component: Bet },
  { path: '/jogos', component: Game },
  { path: '/jogos/:id', component: GameDetail },
  { path: '/login', component: Login },
  { path: '*', component: NotFound },
]

const router = new VueRouter({ routes })

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
