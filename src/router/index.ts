import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import Home from '@/views/Home.vue'
import Basiclayout from '@/layouts/Basic.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/components',
      name: 'components',
      component: Basiclayout,
      children: [
        { path: 'button', component: () => import('@/components/ButtonDemo.vue') },
        { path: 'switch', component: () => import('@/components/SwitchDemo.vue') },
        { path: 'dialog', component: () => import('@/components/DialogDemo.vue') },
        { path: 'tabs', component: () => import('@/components/TabsDemo.vue') },
        { path: 'menu', component: () => import('@/components/MenuDemo.vue') },
        { path: '', component: () => import('@/components/ButtonDemo.vue') },
      ],
    },
    /**
     * /* 的写法已经被废弃，使用 /:pathMatch(.*)* 代替
     */
    {
      path: '/:pathMatch(.*)*',
      name: '404',
      component: () => import('@/views/404.vue'),
    },
  ],
})

export default router
