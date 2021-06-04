<template>
  <img :src="logo" alt="Web 21 Logo">
</template>

<script>
import LogoDark from '@/assets/logo-dark.png';
import LogoLight from '@/assets/logo-light.png';

export default {
  name: 'Logo',
  data() {
    return {
      logo: (localStorage.theme === 'light' ? LogoLight : LogoDark),
    };
  },
  beforeMount() {
    window.addEventListener('theme-changed', () => {
      this.logo = (localStorage.getItem('theme') === 'dark' ? LogoDark : LogoLight);
    });
  },
};
</script>

<style scoped>

</style>
