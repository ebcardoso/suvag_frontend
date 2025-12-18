import { createRouter, createWebHistory } from 'vue-router'
import routes from '@/router/routes'
import { useAccessTokenStore } from '@/stores/accessToken';
import AuthApi from '@/api/modules/AuthApi';
import type { VerifyTokenRequest } from '@/api/dto/auth/VerifyTokenDTO';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
})

//Router Protector
router.beforeEach(async (to:any, from:any, next:any):Promise <void> => {
  if (to.meta.requiresAuth) {
    const store = useAccessTokenStore();  

    const bodyRequest:VerifyTokenRequest = {
      token: store.getToken ?? '-'
    }
    await AuthApi.verifyToken(bodyRequest).then(response => {
      next();
    }).catch(e => {
      store.setToken('-');
      next('/auth/login');
    });
  } else {
    next();
  }
})

export default router;
