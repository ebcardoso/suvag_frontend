<template>
  <header class="app-header fixed-top">
    <HeaderInner @responsive-panel="onOffSidePanel" />
    <HeaderSidepanel />
  </header><!--//app-header-->
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HeaderInner from '@/components/layout/HeaderInner.vue';
import HeaderSidepanel from '@/components/layout/HeaderSidepanel.vue';

export default defineComponent({
  name: 'HeaderElement',
  components: {
    HeaderInner,
    HeaderSidepanel
  },
  data() {
    return {
      sidePanelToggler: document.getElementById(''),
      sidePanel: document.getElementById(''),
      sidePanelDrop: document.getElementById(''),
      sidePanelClose: document.getElementById(''),
    }
  },
  mounted() {
    this.sidePanelToggler = document.getElementById('sidepanel-toggler');
    this.sidePanel = document.getElementById('app-sidepanel');
    this.sidePanelDrop = document.getElementById('sidepanel-drop');
    this.sidePanelClose = document.getElementById('sidepanel-close');

    this.sidePanelDrop?.addEventListener('click', (e) => {
      e.preventDefault();
      this.sidePanelToggler?.click();
    });

    this.sidePanelClose?.addEventListener('click', (e) => {
      e.preventDefault();
      this.sidePanelToggler?.click();
    });

    window.addEventListener('load', () => {
      this.responsiveSidePanel();
    });

    window.addEventListener('resize', () => {
      this.responsiveSidePanel();
    });
  },
  methods: {
    onOffSidePanel() {
      if (this.sidePanel?.classList.contains('sidepanel-visible')) {
        console.log('visible');
        this.sidePanel?.classList.remove('sidepanel-visible');
        this.sidePanel?.classList.add('sidepanel-hidden');
      } else {
        console.log('hidden');
        this.sidePanel?.classList.remove('sidepanel-hidden');
        this.sidePanel?.classList.add('sidepanel-visible');
      }
    },
    responsiveSidePanel() {
      let w = window.innerWidth;
      if (w >= 1200) {
        // if larger
        //console.log('larger');
        this.sidePanel?.classList.remove('sidepanel-hidden');
        this.sidePanel?.classList.add('sidepanel-visible');
      } else {
        // if smaller
        //console.log('smaller');
        this.sidePanel?.classList.remove('sidepanel-visible');
        this.sidePanel?.classList.add('sidepanel-hidden');
      }
    }
  }
})
</script>
