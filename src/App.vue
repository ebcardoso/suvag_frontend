<template>  
  <div v-if="currentRouteName == 'error404Path'">
    <router-view/>
  </div>
  <div v-else-if="currentRouteName == 'authLoginPath'">
    <router-view/>
  </div>
  <div v-else-if="currentRouteName == 'authForgotPasswordPath'">
    <router-view/>
  </div>
  <div v-else-if="currentRouteName == 'authResetPasswordConfirmPath'">
    <router-view/>
  </div>
  <div v-else>    
    <HeaderElement />
    <div class="app-wrapper">
      <div class="app-content pt-3 p-md-3 p-lg-4">
        <div class="container-xl">
          <div class="row g-3 mb-4 align-items-center justify-content-between">
            <div class="col-auto">
              <h1 class="app-page-title mb-0">{{pageTitle}}</h1>
            </div>
          </div> <!--//row-->

          <div v-for="(alert, index) in alertMessages" :key="index" :class="['alert', `alert-${alert?.type}`, 'alert-dismissible', 'fade', 'show']" role="alert">
            <strong>{{alert.title}}</strong> {{alert.message}}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>

          <router-view
            @update:setPageTitle="(newValue:string) => pageTitle = newValue" />
        </div> <!--//container-fluid-->
      </div> <!--//app-content--> 
      <FooterElement />
    </div> <!--//app-wrapper-->
  </div>
</template>

<style scoped></style> 

<script lang="ts">
import { defineComponent } from 'vue';
import { useAlertsStore } from './stores/alertsStore';
import HeaderElement from '@/components/layout/HeaderElement.vue';
import FooterElement from '@/components/layout/FooterElement.vue';

export default defineComponent({
  components: {
    HeaderElement,
    FooterElement
  },
  data() {
    const alertsStore = useAlertsStore();
    return {
      pageTitle: '',
      alertMessages: alertsStore.alerts
    }
  },
  computed: {
    currentRouteName() {
      return this.$route.name;
    }
  }
})
</script>