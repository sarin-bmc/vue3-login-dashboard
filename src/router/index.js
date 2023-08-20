import { createRouter, createWebHistory } from 'vue-router'
import StatsView from '../views/StatsView.vue'
import DashboardView from '../views/DashboardView.vue'
import LoginViewVue from '../views/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Login',
      component: LoginViewVue
    },
    {
      path: '/dashboard',
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
      ]
    }
  ]
})

export default router
