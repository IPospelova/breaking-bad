import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'characters',
    component: () => import('../components/pages/Characters')
  },
  {
    path: '/seasons',
    name: 'seasons',
    component: () => import('../components/pages/Seasons')
  },
  {
    path: '/episodes',
    name: 'episodes',
    component: () => import('../components/pages/Episodes')
  },
  {
    path: '/quote',
    name: 'quote',
    component: () => import('../components/pages/Quote')
  },
  {
    path: '/deaths',
    name: 'deaths',
    component: () => import('../components/pages/Deaths')
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
