import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home'),
  },
  {
    path: '/Activity',
    name: 'Activity',
    component: () => import('../views/Activities'),
  },
  {
    path: '/ScenicSpot',
    name: 'ScenicSpot',
    component: () => import('../views/Attractions'),
  },
  {
    path: '/Restaurant',
    name: 'Restaurant',
    component: () => import('../views/Food'),
  },
  {
    path: '/Activity/type',
    name: 'Activity/type',
    component: () => import('../components/_pages/Type.vue'),
    props: route => route.query,
  },
  {
    path: '/Activity/city',
    name: 'Activity/city',
    component: () => import('../components/_pages/City.vue'),
    props: route => ({ query: route.query }),
  },
  {
    path: '/Activity/location',
    name: 'Activity/location',
    component: () => import('../components/_pages/Location.vue'),
    props: route => ({ query: route.query }),
  },
  {
    path: '/ScenicSpot/type',
    name: 'ScenicSpot/type',
    component: () => import('../components/_pages/Type.vue'),
    props: route => ({ query: route.query }),
  },
  {
    path: '/ScenicSpot/city',
    name: 'ScenicSpot/city',
    component: () => import('../components/_pages/City.vue'),

    props: route => ({ query: route.query }),
  },
  {
    path: '/ScenicSpot/location',
    name: 'ScenicSpot/location',
    component: () => import('../components/_pages/Location.vue'),

    props: route => ({ query: route.query }),
  },
  {
    path: '/Restaurant/type',
    name: 'Restaurant/type',
    component: () => import('../components/_pages/Type.vue'),

    props: route => ({ query: route.query }),
  },
  {
    path: '/Restaurant/city',
    name: 'Restaurant/city',
    component: () => import('../components/_pages/City.vue'),
  },
  {
    path: '/Restaurant/location',
    name: 'Restaurant/location',
    component: () => import('../components/_pages/Location.vue'),
    props: route => ({ query: route.query }),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
