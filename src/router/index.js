import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import WorkExperience from '../views/WorkExperience.vue'
import TJResidence from '../views/Projects/TJResidence.vue'
import ApartmentManagement from '../views/Projects/ApartmentMgmt.vue'
// import Test from '../views/test1.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/projects',
    name: 'Projects',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Projects.vue')
  },
  {
    path: '/workexperience',
    name: 'WorkExperience',
    component: WorkExperience
  },
  {
    path: '/projects/tj_residence',
    name: 'tj_residence',
    component: TJResidence,
  },
  {
    path: '/projects/apartment_management',
    name: 'Apartment_Management',
    component: ApartmentManagement,
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
