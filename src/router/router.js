import Vue from 'vue'
import Router from 'vue-router'
import asideRouter from './asideRouter'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: () => import('../views/view'),
      redirect: '/home',
      children: asideRouter
    },
    {
      path: '/login',
      name: 'about',
      component: () => import( '../views/login/Login')
    }
  ]
})
