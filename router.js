import Vue from 'vue'
import Router from 'vue-router'

import Home from './pages/index'
import Login from './pages/login'
import Register from './pages/register'

Vue.use(Router)

export function createRouter () {
  return new Router({
    mode: 'history',
    routes: [
      {
        name: 'login',
        path: '/:lang?/login',
        component: Login
      },
      {
        name: 'register',
        path: '/:lang?/register',
        component: Register
      },
      {
        name: 'home',
        path: '/:lang?',
        component: Home
      }
    ]
  })
}
