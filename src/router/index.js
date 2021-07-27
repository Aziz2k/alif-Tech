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
    path: '/workers',
    name: 'Workers',
    component: () => import('../views/Workers.vue')
  },
  {
    path: '/workers/:id',
    name: 'ViewWorkers',
    component: () => import('../views/ViewWorker.vue'),
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
