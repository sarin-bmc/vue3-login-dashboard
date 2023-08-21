import { createRouter, createWebHistory } from 'vue-router'
import StatsView from '../views/StatsView.vue'
import DashboardView from '../views/DashboardView.vue'
import LoginViewVue from '../views/LoginView.vue'
import { store } from '../stores/user.js'

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
      meta: {
        requiresAuth: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (localStorage.getItem('userData') == null && !store.isAuthenticated) {
      next({
        path: '/login',
        name: 'Login'
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
