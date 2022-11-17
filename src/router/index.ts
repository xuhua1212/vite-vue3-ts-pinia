import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const baseRoutes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/index.vue'),
    meta: {
      title: '登录',
       keepAlive: true,
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes: baseRoutes,
})

export default router;