import { createRouter, createWebHistory } from 'vue-router'
import AuthSignInPage from '../views/auth/SignIn.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: AuthSignInPage
  },
  {
    path: '/auth/signin',
    name: 'AuthSignInPage',
    component: AuthSignInPage
  },

  // User
  {
    path: '/user/dashboard',
    name: 'UserDashboardPage',
    component: () => import('../views/user/Dashboard.vue')
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
