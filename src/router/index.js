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
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
