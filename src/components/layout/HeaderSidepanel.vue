<template>
  <div id="app-sidepanel" class="app-sidepanel"> 
    <div id="sidepanel-drop" class="sidepanel-drop"></div>
      <div class="sidepanel-inner d-flex flex-column">
        <a href="#" id="sidepanel-close" class="sidepanel-close d-xl-none">&times;</a>
        <div class="app-branding">
          <router-link :to="{name: 'root'}" class="app-logo">
            <img class="logo-icon me-2" src="/images/app-logo.svg" alt="logo"><span class="logo-text">SUVAG Admin</span>
          </router-link>
        </div><!--//app-branding-->  
      
        <nav id="app-nav-main" class="app-nav app-nav-main flex-grow-1">
          <ul class="app-menu list-unstyled accordion" id="menu-accordion">            
            <li v-for="(menu, index) in viewmodel?.menus(currentRouteName)" :key="index" class="nav-item" :class="[menu.submenus.length>0 ? 'has-submenu' : '']">
              <MultipleMenu :menu=menu :index=index v-if="menu.submenus.length>0" />
              <SingleMenu :menu=menu v-else />
            </li>
          </ul><!--//app-menu-->
        </nav><!--//app-nav-->
      
      </div><!--//sidepanel-inner-->
  </div><!--//app-sidepanel-->
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MenuViewmodel from '@/viewmodels/MenuViewmodel';
import MultipleMenu from '@/components/layout/sidepanel/MultipleMenu.vue';
import SingleMenu from '@/components/layout/sidepanel/SingleMenu.vue';

export default defineComponent({
  name: 'HeaderSidepanel',
  components: {
    MultipleMenu,
    SingleMenu
  },
  data() {
    return {
      viewmodel: new MenuViewmodel(),
    }
  },
  computed: {
    currentRouteName() {
      return this.$route.name;
    }
  }
})
</script>
