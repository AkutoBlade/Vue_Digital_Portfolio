import { createRouter, createWebHistory } from 'vue-router'
// import LandingView from '../views/LandingPage.vue'
//  import AboutView from '../views/AboutPage.vue'
// import ResumeView from '../views/ResumePage.vue'
// import ProjectView from '../views/Projects.vue'
// import TestimonialView from '../views/Testimonials.vue'
// import ContactView from '../views/ContactPage.vue'
const routes = [
  {
    path: '/',
    name: 'landing',
    component: () => import('../views/LandingPage.vue')
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutPage.vue')
  },
  {
    path: '/resume',
    name: 'resume',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ResumePage.vue')
  },
  {
    path: '/project',
    name: 'project',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Projects.vue')
  },
  {
    path: '/testimonials',
    name: 'testimonials',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Testimonials.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ContactPage.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
