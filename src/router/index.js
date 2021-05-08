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
    path: '/user/cells',
    name: 'UserCellsPage',
    component: () => import('../views/user/Cells.vue')
  },
  {
    path: '/user/special-cases',
    name: 'UserSpecialCasesPage',
    component: () => import('../views/user/SpecialCases.vue')
  },
  {
    path: '/user/slides',
    name: 'UserSlidesPage',
    component: () => import('../views/user/Slides.vue')
  },
  {
    path: '/user/funeral',
    name: 'UserFuneralPage',
    component: () => import('../views/user/Funeral.vue')
  },
  
  // User - Biopsy Pages
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

  // User - Cytology Pages
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

  // User - Case Result Pages
  {
    path: '/user/case-results',
    name: 'UserCaseResultsPage',
    component: () => import('../views/user/CaseResults.vue')
  },
  {
    path: '/user/case-result-read',
    name: 'UserCaseResultReadPage',
    component: () => import('../views/user/CaseResultRead.vue')
  },

  // User - Special Cases
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
  {
    path: '/user/special-case-history',
    name: 'UserSpecialCaseHistoryPage',
    component: () => import('../views/user/SpecialCaseHistory.vue')
  },
  {
    path: '/user/special-case-rejected',
    name: 'UserSpecialCaseRejectedPage',
    component: () => import('../views/user/SpecialCaseRejected.vue')
  },

  // User - Slides
  {
    path: '/user/slide-add',
    name: 'UserSlideAddPage',
    component: () => import('../views/user/SlideAdd.vue')
  },
  {
    path: '/user/slide-approve',
    name: 'UserSlideApprovePage',
    component: () => import('../views/user/SlideApprove.vue')
  },
  {
    path: '/user/slide-return',
    name: 'UserSlideReturnPage',
    component: () => import('../views/user/SlideReturn.vue')
  },

  // User - Funeral
  {
    path: '/user/funeral-add',
    name: 'UserFuneralAddPage',
    component: () => import('../views/user/FuneralAdd.vue')
  },
  {
    path: '/user/funeral-complete',
    name: 'UserFuneralCompletePage',
    component: () => import('../views/user/FuneralComplete.vue')
  },
  {
    path: '/user/funeral-complete-2',
    name: 'UserFuneralComplete2Page',
    component: () => import('../views/user/FuneralComplete2.vue')
  },

  // User - Team Pages
  {
    path: '/user/teams',
    name: 'UserTeamsPage',
    component: () => import('../views/user/Teams.vue')
  },

  // User - Inventory Pages
  {
    path: '/user/inventory',
    name: 'UserInventoryPage',
    component: () => import('../views/user/Inventory.vue')
  },


  // Admin Pages
  {
    path: '/admin',
    name: 'AdminDashboardPage',
    component: () => import('../views/admin/Dashboard.vue')
  },
  {
    path: '/admin/users',
    name: 'AdminUsersPage',
    component: () => import('../views/admin/Users.vue')
  },
  {
    path: '/admin/user-add',
    name: 'AdminUserAddPage',
    component: () => import('../views/admin/UserAdd.vue')
  },
  {
    path: '/admin/user-edit',
    name: 'AdminUserEditPage',
    component: () => import('../views/admin/UserEdit.vue')
  },
  {
    path: '/admin/data-settings',
    name: 'AdminDataSettingsPage',
    component: () => import('../views/admin/DataSettings.vue')
  },
  {
    path: '/admin/case-types',
    name: 'AdminCaseTypesPage',
    component: () => import('../views/admin/CaseTypes.vue')
  },
  {
    path: '/admin/slide-settings',
    name: 'AdminSlideSettingsPage',
    component: () => import('../views/admin/SlideSettings.vue')
  },
  {
    path: '/admin/products',
    name: 'AdminProductsPage',
    component: () => import('../views/admin/Products.vue')
  },
  {
    path: '/admin/survey-settings',
    name: 'AdminSurveySettingsPage',
    component: () => import('../views/admin/SurveySettings.vue')
  },
  {
    path: '/admin/records',
    name: 'AdminRecordsPage',
    component: () => import('../views/admin/Records.vue')
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
