import { createRouter, createWebHistory } from 'vue-router'
import StatsView from '../views/StatsView.vue'
import DashboardView from '../views/DashboardView.vue'
import LoginViewVue from '../views/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: LoginViewVue
    },
    {
      path: '/',
      name: 'Dashboard',
      component: DashboardView,
      children: [
        {
          path: '',
          name: 'Stats',
          component: StatsView
        },
        {
          path: 'users',
          name: 'Users',
          component: () => import('../views/UsersView.vue')
        }
      ],
      meta:{
        requiresAuth: true
      }
    }
  ]
})

/* router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (localStorage.getItem('userName') == null) {
      next({
        path: '/login',
        params: { nextUrl: to.fullPath }
      })
    } else {
      if (!store.state.isAuthenticated) {
        next({
          path: '/login',
          params: { nextUrl: to.fullPath }
        })
      } else {
        next()
      }
    }
  } else {
    next()
  }
}) */

export default router
