import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/AboutView.vue')
  },
  {
    path: '/plans',
    name: 'plans',
    component: () => import('@/views/PlansView.vue')
  },
  {
    path: '/community',
    name: 'community',
    component: () => import('@/views/CommunityView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
