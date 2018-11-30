import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import Bet from './components/Bet.vue'
import Game from './components/Game.vue'
import Login from './components/Login.vue'
import NotFound from './components/NotFound.vue'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(BootstrapVue);

const routes = [
  { path: '/apostas', component: Bet},
  { path: '/jogos', component: Game},
  { path: '/login', component: Login},
  { path: '*', component: NotFound},
]

const router = new VueRouter({ routes })

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
