<template>
  <div class="text-black bg-white dark:bg-black dark:text-white pb-10" id="app">
    <div class="flex h-full p-2 md:p-0">
      <sidebar></sidebar>
      <div class="h-full flex-1 margin-sidebar">
        <top-navbar></top-navbar>
        <div class="flex-1 h-full w-full">
          <router-view />
          <app-footer></app-footer>
        </div>
      </div>
      <back-to-top-button></back-to-top-button>
      <CookieConsent/>
    </div>
  </div>
</template>

<script>
import Sidebar from '@/components/layout/Sidebar.vue';
import TopNavbar from '@/components/layout/TopNavbar.vue';
import AppFooter from '@/components/layout/Footer.vue';
import CookieConsent from '@/components/layout/CookieConsent.vue';
import BackToTopButton from '@/components/layout/BackToTopButton.vue';

export default {
  components: {
    Sidebar,
    TopNavbar,
    AppFooter,
    CookieConsent,
    BackToTopButton,
  },
};
</script>

<style scoped>
  @media (min-width: 832px) {
    .margin-sidebar {
      margin-right: 112px;
    }
  }
</style>
