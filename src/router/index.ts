import { config } from './../config';
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(`../views/Home.vue`)
    },
    {
      path: '/app1',
      name: 'app-1',
      children: [
        {
          path: '',
          name: 'app-1-1',
          component: () => import(`../views/app-1/Page1.vue`)
        },
        {
          path: '',
          name: 'app-1-2',
          component: () => import(`../views/app-1/Page2.vue`)
        },
        {
          path: '',
          name: 'app-1-3',
          component: () => import(`../views/app-1/Page3.vue`)
        }
      ]
    },
  ]
})

export default router
