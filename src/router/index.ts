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
    {
      path: '/app2',
      name: 'app-2',
      children: [
        {
          path: '',
          name: 'app-2-1',
          component: () => import(`../views/app-2/Page1.vue`)
        },
        {
          path: '',
          name: 'app-2-2',
          component: () => import(`../views/app-2/Page2.vue`)
        },
      ]
    },
    {
      path: '/app3',
      name: 'app-3',
      children: [
        {
          path: '',
          name: 'app-3-1',
          component: () => import(`../views/app-3/Page1.vue`)
        },
        {
          path: '',
          name: 'app-3-2',
          component: () => import(`../views/app-3/Page2.vue`)
        },
      ]
    },
    {
      path: '/app4',
      name: 'app-4',
      children: [
        {
          path: '',
          name: 'app-4-1',
          component: () => import(`../views/app-4/Page1.vue`)
        },
        {
          path: '',
          name: 'app-4-2',
          component: () => import(`../views/app-4/Page2.vue`)
        },
        {
          path: '',
          name: 'app-4-3',
          component: () => import(`../views/app-4/Page3.vue`)
        }
      ]
    },
  ]
})

export default router
