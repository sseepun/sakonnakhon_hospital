import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/Home.vue'

const routes = [

  // Home Page
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },

  // Auth Pages
  {
    path: '/auth/signin',
    name: 'AuthSignInPage',
    component: () => import('../views/auth/SignIn.vue')
  },


  // User Pages
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
    path: '/user/special-cases',
    name: 'UserSpecialCasesPage',
    component: () => import('../views/user/SpecialCases.vue')
  },
  
  // User Biopsy Pages
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
  {
    path: '/user/case-biopsy-complete',
    name: 'UserCaseBiopsyCompletePage',
    component: () => import('../views/user/CaseBiopsyComplete.vue')
  },
  {
    path: '/user/case-biopsy-complete-edit',
    name: 'UserCaseBiopsyCompleteEditPage',
    component: () => import('../views/user/CaseBiopsyCompleteEdit.vue')
  },

  // User Cytology Pages
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
    path: '/user/case-cytology-complete',
    name: 'UserCaseCytologyCompletePage',
    component: () => import('../views/user/CaseCytologyComplete.vue')
  },


  // User Special Cases
  {
    path: '/user/special-case-add',
    name: 'UserSpecialCaseAddPage',
    component: () => import('../views/user/SpecialCaseAdd.vue')
  },
  {
    path: '/user/special-case-complete',
    name: 'UserSpecialCaseCompletePage',
    component: () => import('../views/user/SpecialCaseComplete.vue')
  },

   // User Pathotology Pages
   {
    path: '/user/case-pathology',
    name: 'UserCasePathologyPage',
    component: () => import('../views/user/CasePathology.vue')
  },
  {
    path: '/user/case-pathology-history',
    name: 'UserCasePathologyHistoryPage',
    component: () => import('../views/user/CasePathologyHistory.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
