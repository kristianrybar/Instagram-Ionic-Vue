import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import ATabs from '../views/a-tabs.vue'

const routes: Array<RouteRecordRaw> = [
  {
      path: '/',
      component: ATabs,
      children: [
      {
        path: '/',
        redirect: '/home'
      },
      {
        path: '/home',
        component: () => import('@/views/a-home.vue')
      },
      {
        path: '/search',
        component: () => import('@/views/a-search.vue')
      },
      {
        path: '/camera',
        component: () => import('@/views/a-camera.vue')
      },
      {
        path: '/liked',
        component: () => import('@/views/a-liked.vue')
      },
      {
        path: '/profile',
        component: () => import('@/views/a-profile.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
