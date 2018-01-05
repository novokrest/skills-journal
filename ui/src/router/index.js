import Vue from 'vue'
import Router from 'vue-router'
import * as Auth from '@/components/pages/auth'
import Authentication from '@/components/pages/auth/Authentication'
import Home from '@/components/pages/Home'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/login',
      name: 'Authentication',
      component: Authentication
    },
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        authRequired: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.meta.requiredAuth) {
    if (!Auth.default.user.authenticated) {
      return router.push('/login')
    }
  }
  next()
})

export default router
