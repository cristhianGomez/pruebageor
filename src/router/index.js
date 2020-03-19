import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/indicadores',
    name: 'Indicadores',
    component: () => import(/* webpackChunkName: "about" */ '../components/pages/Indicaciones.vue')
  },
  {
    path: '/Compras',
    name: 'compras',
    component: () => import(/* webpackChunkName: "about" */ '../components/pages/compras.vue')
  },
   {
    path: '/Ventas',
    name: 'ventas',
    component: () => import(/* webpackChunkName: "about" */ '../components/pages/ventas.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
