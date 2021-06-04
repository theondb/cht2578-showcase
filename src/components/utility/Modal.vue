<template>
  <transition name="modal">
    <div class="modal-mask flex items-center content-center justify-center" @click="$emit('close')">
      <div class="p-5" :class="optionalModalClasses" @click.stop>
        <div class="modal-container" :class="{ 'size-youtube': video }">
          <div class="w-full flex justify-end mb-1">
            <i class="text-white text-2xl cursor-pointer fas fa-times" @click="$emit('close')"></i>
          </div>
          <div class="modal-body">
            <slot name="body"></slot>
          </div>
      </div>
      </div>
    </div>
  </transition>
</template>

<script>

export default {
  name: 'Modal',
  props: {
    video: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    optionalModalClasses() {
      return !this.video ? 'bg-gray-200 dark:bg-gray-700 w-full md:w-4/12' : '';
    },
  },
};
</script>

<style scoped>
  .modal-mask {
    position: fixed;
    z-index: 1000;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    transition: opacity 0.3s ease;
  }

  .size-youtube {
    width: 100%;
  }

  @media (min-width: 832px) {
    .size-youtube {
      height: 460px;
      width: 830px;
    }
  }

  .modal-container {
    margin: 0px auto;
    transition: all 0.3s ease;
  }

  .modal-body {
    height: calc(100% - 24px);
  }

  .modal-enter {
    opacity: 0;
  }

  .modal-leave-active {
    opacity: 0;
  }

  .modal-enter .modal-container,
  .modal-leave-active .modal-container {
    transform: scale(1.1);
  }

</style>
