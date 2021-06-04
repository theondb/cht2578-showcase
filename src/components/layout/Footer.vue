<template>
  <div class="navbar w-full flex items-center justify-center mt-5">
    <div class="flex flex-col items-center justify-center">
      <div class="block md:hidden mb-5 mt-10">
        <social-links></social-links>
      </div>
      <div class="flex justify-center">
        <logo class="mr-5 logo w-auto"></logo>
        <university-logo class="logo w-auto"></university-logo>
      </div>
      <p class="mt-5 text-md md:text-xs text-gray-600 dark:text-gray-300">&copy; Web21, University of Huddersfield</p>
    </div>
  </div>
</template>

<script>
import Logo from '@/components/layout/Logo.vue';
import UniversityLogo from '@/components/layout/UniversityLogo.vue';
import SocialLinks from '@/components/layout/SocialLinks.vue';

export default {
  name: 'AppFooter',
  components: {
    Logo,
    UniversityLogo,
    SocialLinks,
  },
};
</script>

<style scoped>

.logo {
  height: 50px;
}

.navbar {
  height: 100px;
}
</style>
