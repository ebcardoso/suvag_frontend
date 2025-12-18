import type { RouteRecordRaw } from 'vue-router';

const routes:Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'root',
    meta: { requiresAuth: true },
    component: () => import('@/views/HomeView.vue')
  },
  //Auth
  {
    path: '/auth/login',
    name: 'authLoginPath',
    component: () => import('@/views/auth/LoginView.vue')
  },
]

export default routes;
