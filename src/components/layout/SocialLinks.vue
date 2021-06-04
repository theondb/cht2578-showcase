<template>
  <div class="social-links w-full flex justify-center flex-row md:flex-col">
    <div class="flex justify-center mx-4 md:mx-0 md:my-5 text-xl">
      <a @click="track('facebook')" href="https://www.facebook.com/hudwebshowcase" title="Web 21 Facebook" class="hover:text-gray-200" target="_blank" rel="noopener noreferrer">
        <i class="fab fa-facebook-f"></i>
      </a>
    </div>
    <div class="flex justify-center mx-4 md:mx-0 md:my-5 text-xl">
      <a @click="track('instagram')" href="https://www.instagram.com/hud_web_showcase/" title="Web 21 Instagram" class="hover:text-gray-200" target="_blank" rel="noopener noreferrer">
        <i class="fab fa-instagram"></i>
      </a>
    </div>
    <div class="flex justify-center mx-4 md:mx-0 md:my-5 text-xl">
      <a @click="track('linkedin')" href="https://www.linkedin.com/in/hud-web-showcase/" title="Web 21 LinkedIn" class="hover:text-gray-200" target="_blank" rel="noopener noreferrer">
        <i class="fab fa-linkedin-in"></i>
      </a>
    </div>
    <div class="flex justify-center mx-4 md:mx-0 md:my-5">
      <a @click="track('youtube')" href="https://www.youtube.com/channel/UCTwN3t49p4f2SCvlBUly40Q/" title="Web 21 Youtube" class="hover:text-gray-200"  target="_blank" rel="noopener noreferrer">
        <i class="fab fa-youtube"></i>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SocialLinks',
  methods: {
    track(social) {
      if (localStorage.getItem('cookies:accepted') === 'true') {
        this.$gtag.event(`social_link_click_${social}`, {
          event_category: 'engagement',
          event_label: 'social_link_click',
          value: social,
        });
      }
    },
  },
};
</script>

<style scoped>
  @media (min-width: 832px) {
    .social-links {
      margin-top: 225px
    }
  }
</style>
