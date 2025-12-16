import type { RouteRecordRaw } from 'vue-router';

const routes:Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'root',
    component: () => import('@/views/HomeView.vue')
  },
]

export default routes;
