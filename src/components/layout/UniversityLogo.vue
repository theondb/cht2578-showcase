<template>
  <img :src="logo" alt="University of Huddersfield">
</template>

<script>
import LogoDark from '@/assets/uoh-dark.png';
import LogoLight from '@/assets/uoh-light.png';

export default {
  name: 'Logo',
  data() {
    return {
      logo: (localStorage.theme === 'dark' ? LogoDark : LogoLight),
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
