<template>
  <div>
    <hero></hero>
    <projects></projects>
    <team></team>
    <faq></faq>
  </div>
</template>

<script>
import Hero from '@/components/sections/Hero.vue';
import Faq from '@/components/sections/FAQ.vue';
import Projects from '@/components/sections/Projects.vue';
import Team from '@/components/sections/Team.vue';

export default {
  name: 'HomePage',
  components: {
    Hero,
    Faq,
    Projects,
    Team,
  },
  mounted() {
    if (localStorage.getItem('cookies:accepted') === 'true') {
      this.$gtag.pageview({
        page_title: 'HomePage',
        page_location: Location.href,
        page_path: Location.pathname,
      });
    }
  },
};
</script>
