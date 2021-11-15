import {createRouter, createWebHistory} from 'vue-router' 

import FirstPage from '@/pages/FirstPage.vue' 
import SecondPage from '@/pages/SecondPage.vue' 
import ThanksPage from '@/pages/ThanksPage.vue' 
 
 
const routes = [ 
  { 
    path: '', 
    name: 'FirstPage', 
    component: FirstPage 
  }, 
  { 
    path: '/second', 
    name: 'SecondPage', 
    component: SecondPage 
  }, 
  { 
    path: '/third', 
    name: 'ThanksPage', 
    component: ThanksPage 
  }, 
] 
 
const router = createRouter({ 
  history: createWebHistory(process.env.BASE_URL),
  routes 
}) 
 
export default router