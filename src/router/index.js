import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/auth/signin',
    name: 'AuthSignInPage',
    component: () => import('../views/auth/SignIn.vue')
  },

  // User
  {
    path: '/user/dashboard',
    name: 'UserDashboardPage',
    component: () => import('../views/user/Dashboard.vue')
  },
  {
    path: '/user/cases',
    name: 'UserCasesPage',
    component: () => import('../views/user/Cases.vue')
  },

  {
    path: '/user/case-cytology-add',
    name: 'UserCaseCytologyAddPage',
    component: () => import('../views/user/CaseCytologyAdd.vue')
  },
  {
    path: '/user/case-cytology-custom-add',
    name: 'UserCaseCytologyCustomAddPage',
    component: () => import('../views/user/CaseCytologyCustomAdd.vue')
  },
  
  {
    path: '/user/case-biopsy-add',
    name: 'UserCaseBiopsyAddPage',
    component: () => import('../views/user/CaseBiopsyAdd.vue')
  },
  {
    path: '/user/case-biopsy-custom-add',
    name: 'UserCaseBiopsyCustomAddPage',
    component: () => import('../views/user/CaseBiopsyCustomAdd.vue')
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
