<template>
  <div class="hidden md:block sidebar h-screen sticky top-0 sidebar">
    <social-links></social-links>
  </div>
</template>

<script>
import SocialLinks from '@/components/layout/SocialLinks.vue';

export default {
  name: 'Sidebar',
  components: {
    SocialLinks,
  },
};
</script>

<style scoped>
.sidebar {
  width: 112px
}
</style>
