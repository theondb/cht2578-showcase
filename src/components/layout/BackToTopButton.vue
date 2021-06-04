<template>
  <transition name="fade">
    <div v-if="amountOfPixelsScrolled > 100" class="fixed right-4 md:right-10 bottom-4">
      <i class="fas fa-caret-square-up text-5xl md:text-4xl cursor-pointer text-gray-400 dark:text-gray-300 hover:text-gray-600 dark:hover:text-gray-400" @click="scrollToTop"></i>
    </div>
  </transition>
</template>

<script>

export default {
  name: 'BackToTopButton',
  data() {
    return {
      amountOfPixelsScrolled: 0,
    };
  },
  created() {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.amountOfPixelsScrolled = window.scrollY;
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    },
  },
};
</script>

<style>

.fade-enter-active, .fade-leave-active {
  transition: opacity .25s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
