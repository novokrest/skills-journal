import Vue from 'vue'
import Router from 'vue-router'
import * as Auth from '@/components/pages/auth'

// Pages
import Authentication from '@/components/pages/auth/Authentication'
import Home from '@/components/pages/Home'
import AddSkill from '@/components/pages/AddSkill'
import ListSkills from '@/components/pages/ListSkills'

// Global components
import Header from '@/components/Header'

// Register components
Vue.component('app-header', Header)

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
      components: {
        default: Home,
        header: Header
      },
      meta: {
        authRequired: true
      }
    },
    {
      path: '/add',
      name: 'AddSkill',
      components: {
        default: AddSkill,
        header: Header
      }
    },
    {
      path: '/list',
      name: 'ListSkills',
      component: ListSkills
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
