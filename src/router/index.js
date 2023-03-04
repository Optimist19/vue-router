import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
// import HomePage from "../components/HomePage.vue"
import JobDetails from "../components/JobDetails.vue"
import JobS from "../components/Jobs.vue"
import AboutPage from "../components/AboutPage.vue"
import NestedHome from "../components/NestedHome.vue"
import NestedAbout from "../components/NestedAbout.vue"
import NotFound from "../components/NotFound.vue"

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: () => import("../components/HomePage.vue"),
    children:[
      {
        path: '/nestedHome',
        name: 'NestedHome',
        component: NestedHome,
      }
    ]
  },
  {
    path: '/about',
    name: 'AboutPage',
    component: AboutPage,
    children:[
      {
        path: '/nestedAbout',
        name: 'NestedAbout',
        component: NestedAbout,
      }
    ]
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/jobs',
    name: 'JobS',
    component: JobS,
  },
  {
    path: '/jobs/:id',
    name: 'JobDetails',
    component: JobDetails,
  },
  {
    path: '/:catchAll(.*)',
    // path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
