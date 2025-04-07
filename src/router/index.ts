import { createRouter, createWebHashHistory } from 'vue-router'

import Home from '@/views/Home.vue'
import Basiclayout from '@/layouts/Basic.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
    },
    {
      path: '/guide',
      name: 'guide',
      component: Basiclayout,
      children: [{ path: '', component: () => import('@/views/Guide.vue') }],
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
     * 为了在github pages上默认访问到home，所以不用404页面了
     */
    {
      path: '/:pathMatch(.*)*',
      component: Home,
    },
  ],
})

export default router
