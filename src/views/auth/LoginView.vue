<template>
  <div class="row g-0 app-auth-wrapper">
    <div class="col-12 col-md-7 col-lg-6 auth-main-col text-center p-5">
      <div class="d-flex flex-column align-content-end">
        <div class="app-auth-body mx-auto">
          <div class="app-auth-branding mb-4">
            <router-link to="/auth/login" class="app-logo">
              <img class="logo-icon me-2" src="/images/app-logo.svg" alt="logo">
            </router-link>
          </div>
          <h2 class="auth-heading text-center mb-5">SUVAG - Admin</h2>
          <div class="auth-form-container text-start">
            <div v-for="(alert, index) in alertsStore.alerts" :key="index" :class="['alert', `alert-${alert?.type}`, 'alert-dismissible', 'fade', 'show']" role="alert">
              <strong>{{alert.title}}</strong> {{alert.message}}
              <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>

            <form @submit.prevent="signin" class="auth-form login-form">
              <div class="email mb-3">
                <label class="sr-only" for="signin-email">Email</label>
                <input v-model="username" id="signin-email" name="signin-email" type="email" class="form-control signin-email" placeholder="E-mail" required>
              </div>
              <!--//form-group-->
              <div class="password mb-3">
                <label class="sr-only" for="signin-password">Senha</label>
                <input v-model="password" id="signin-password" name="signin-password" type="password" class="form-control signin-password" placeholder="Senha" required>
                <div class="extra mt-3 row justify-content-between">
                  <div class="col-6">
                    <!-- <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="" id="RememberPassword">
                      <label class="form-check-label" for="RememberPassword">
                        Remember me
                      </label>
                    </div> -->
                  </div>
                  <!--//col-6-->
                  <div class="col-6">
                    <div class="forgot-password text-end">
                      <router-link :to="{name:'authForgotPasswordPath'}">Esqueci Minha Senha</router-link>
                    </div>
                  </div>
                  <!--//col-6-->
                </div>
                <!--//extra-->
              </div>
              <!--//form-group-->
              <div class="text-center">
                <button type="submit" class="btn app-btn-primary w-100 theme-btn mx-auto">
                  <span v-if="isLogInLoading" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                  Login
                </button>
              </div>
            </form>
            <!-- <div class="auth-option text-center pt-5">No Account? Sign up <a class="text-link" href="signup.html" >here</a>.</div> -->
          </div>
          <!--//auth-form-container-->	
        </div>
        <!--//auth-body-->
        <footer class="app-auth-footer">
          <div class="container text-center py-3">
            <!--/* This template is free as long as you keep the footer attribution link. If you'd like to use the template without the attribution link, you can buy the commercial license via our website: themes.3rdwavemedia.com Thank you for your support. :) */-->
            <!-- <small class="copyright">Designed with <span class="sr-only">love</span><i class="fas fa-heart" style="color: #fb866a;"></i> by <a class="app-link" href="http://themes.3rdwavemedia.com" target="_blank">Xiaoying Riley</a> for developers</small> -->
          </div>
        </footer>
        <!--//app-auth-footer-->	
      </div>
      <!--//flex-column-->   
    </div>
    <!--//auth-main-col-->
    <div class="col-12 col-md-5 col-lg-6 h-100 auth-background-col">
      <div class="auth-background-holder">
      </div>
    </div>
    <!--//auth-background-col-->
  </div>
  <!--//row-->
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useAccessTokenStore } from "@/stores/accessToken";
import { useAlertsStore } from "@/stores/alertsStore";
import AuthApi from "@/api/modules/AuthApi";
import type { SigninRequest } from "@/api/dto/auth/SigninDTO";

export default defineComponent({
  name: 'LoginView',
  data() {
    const alertsStore = useAlertsStore();
    const accessTokenStore = useAccessTokenStore();
    return {
      accessTokenStore: accessTokenStore,
      alertsStore: alertsStore,
      isLogInLoading: false,
      username:'',
      password:''
    }
  },
  mounted() {
    document.body.classList.add('app-login');
    document.body.classList.add('p-0');
  },
  unmounted() {
    document.body.classList.remove('app-login');
    document.body.classList.remove('p-0');
  },
  methods: {
    async signin() {
      this.isLogInLoading = true;

      const requestBody:SigninRequest = {
        email: this.username,
        password: this.password
      }
      await AuthApi.signin(requestBody).then(response => {
        this.username='';
        this.password='';
        this.accessTokenStore.setToken(response.data.token);
        this.$router.push({ name: 'root' });
      }).catch(errors => {
        this.password='';
        this.accessTokenStore.setToken('-');

        let message:string = ((errors.code == 'ERR_NETWORK') || (errors.response.status >= 500)) ? 'Falha de conexão' : 'Usuário ou senha incorretos';
        this.alertsStore.createAlert({
          type: 'danger', //success, warning or dangers
          title: 'Erro:',
          message: message
        });
      }).finally(() => {
        this.isLogInLoading = false;
      });
    }
  }
});
</script>
