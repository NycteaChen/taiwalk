import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home'),
  },
  {
    path: '/activities',
    name: 'activities',
    component: () => import('../views/Activities'),
  },
  {
    path: '/attractions',
    name: 'attractions',
    component: () => import('../views/Attractions'),
  },
  {
    path: '/food',
    name: 'food',
    component: () => import('../views/Food'),
  },
  {
    path: '/activities/type',
    name: 'activities/type',
    component: () => import('../components/_pages/Type.vue'),
    props: route => route.query,
  },
  {
    path: '/activities/city',
    name: 'activities/city',
    component: () => import('../components/_pages/City.vue'),
    props: route => route.query,
  },
  {
    path: '/activities/location',
    name: 'activities/location',
    component: () => import('../components/_pages/Location.vue'),
    props: route => route.query,
  },
  {
    path: '/attractions/type',
    name: 'attractions/type',
    component: () => import('../components/_pages/Type.vue'),
    props: route => route.query,
  },
  {
    path: '/attractions/city',
    name: 'attractions/city',
    component: () => import('../components/_pages/City.vue'),
    props: route => route.query,
  },
  {
    path: '/attractions/location',
    name: 'attractions/location',
    component: () => import('../components/_pages/Location.vue'),
    props: route => route.query,
  },
  {
    path: '/food/type',
    name: 'food/type',
    component: () => import('../components/_pages/Type.vue'),
    props: route => route.query,
  },
  {
    path: '/food/city',
    name: 'food/city',
    component: () => import('../components/_pages/City.vue'),
    props: route => route.query,
  },
  {
    path: '/food/location',
    name: 'food/location',
    component: () => import('../components/_pages/Location.vue'),
    props: route => route.query,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
