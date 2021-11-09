import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/activities',
    name: 'activities',
    component: () => import('../views/Activities.vue'),
  },
  {
    path: '/attractions',
    name: 'attractions',
    component: () => import('../views/Attractions.vue'),
  },
  {
    path: '/food',
    name: 'food',
    component: () => import('../views/Food.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
