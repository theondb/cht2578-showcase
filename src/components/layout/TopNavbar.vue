<template>
  <div>
    <div class="navbar w-full items-center hidden md:flex">
      <div class="flex flex-1 justify-start">
        <span class="text-gray-300 font-medium">12/05/2021</span>
        <span class="pre-line text-gray-300 font-medium uppercase">May 2021</span>
      </div>
      <div class="flex flex-1 justify-center">
        <router-link :to="{ name: 'HomePage' }">
          <Logo />
        </router-link>
      </div>
      <div class="flex flex-1 justify-end items-center">
        <div>
          <router-link :to="{ name: 'HomePage', hash: '#projects' }" class="text-gray-300 hover:text-gray-400 font-medium uppercase mr-10">Projects</router-link>
          <router-link :to="{ name: 'HomePage', hash: '#team' }" class="text-gray-300 hover:text-gray-400 font-medium uppercase mr-10">Team</router-link>
          <router-link :to="{ name: 'HomePage', hash: '#faq' }" class="text-gray-300 hover:text-gray-400 font-medium uppercase mr-10">FAQ</router-link>
          <a @click="mailchimpModalOpen = true" class="text-gray-300 hover:text-gray-400 font-medium uppercase mr-10 cursor-pointer">Subscribe</a>
        </div>
        <dark-mode-toggle></dark-mode-toggle>
      </div>
    </div>
    <div class="w-full flex md:hidden pb-3 pl-2 pr-5 bg-white dark:bg-black z-50">
      <div class="flex w-full justify-between items-center">
        <router-link :to="{ name: 'HomePage' }">
          <Logo />
        </router-link>
        <i class="fas fa-bars text-4xl text-black dark:text-gray-200" @click="navOpen = !navOpen"></i>
      </div>
    </div>
    <transition name="slide" mode="out-in">
      <div v-show="navOpen" class="flex flex-col items-end absolute right-0 z-50 bg-white dark:bg-black pb-5 pl-5 h-full">
        <a @click="mobileNavigateTo('#projects')" class="post-circle text-gray-300 hover:text-gray-400 text-l uppercase p-2 mr-2">
          Projects
        </a>
        <a @click="mobileNavigateTo('#team')" class="post-circle text-gray-300 hover:text-gray-400 text-l uppercase p-2 mr-2">
          Team
        </a>
        <a @click="mobileNavigateTo('#faq')" class="post-circle text-gray-300 hover:text-gray-400 text-l uppercase p-2 mr-2">
          FAQ
        </a>
        <a @click="openMailchimpModal()" class="post-circle text-gray-300 hover:text-gray-400 text-l uppercase p-2 mr-2">
          Subscribe
        </a>
        <dark-mode-toggle class="p-2"></dark-mode-toggle>
      </div>
    </transition>
    <modal v-if="mailchimpModalOpen" @close="mailchimpModalOpen = false">
      <template v-slot:body>
        <mailchimp-form @submitted="mailchimpModalOpen = false" />
      </template>
    </modal>
  </div>
</template>

<script>
import DarkModeToggle from '@/components/layout/DarkModeToggle.vue';
import Logo from '@/components/layout/Logo.vue';
import MailchimpForm from '@/components/MailchimpForm.vue';
import Modal from '@/components/utility/Modal.vue';

export default {
  name: 'TopNavbar',
  components: {
    Logo,
    DarkModeToggle,
    MailchimpForm,
    Modal,
  },
  data() {
    return {
      navOpen: false,
      mailchimpModalOpen: false,
    };
  },
  methods: {
    mobileNavigateTo(anchor) {
      this.navOpen = false;
      this.$router.push({ name: 'HomePage', hash: anchor });
    },
    openMailchimpModal() {
      this.navOpen = false;
      this.mailchimpModalOpen = true;
    },
  },
};
</script>

<style scoped>
  img {
    width: 60px;
  }

  .absolute {
    top: 50px;
  }

  .fixed {
    margin-top: -8px;
    padding-top: 8px;
  }

  .navbar {
    height: 100px;
  }

  .post-circle:after {
    content: '';
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 100%;
    background-color: #00EE6C;
    margin-left: 5px;
  }

  .pre-line {
    padding-left: 61px;
    position: relative;
  }

  .pre-line:before {
      content: '';
      display: block;
      width: 40px;
      border-bottom: 1px solid #717375;
      position: absolute;
      left: 0;
      top: 9px;
      margin: 0 10px;
  }

  .dark .dark\:pre-line:before {
    border-bottom: 1px solid #969696;
  }

  .slide-enter-active,
  .slide-leave-active
  {
    transition: transform 0.2s ease;
  }

  .slide-enter,
  .slide-leave-to {
    transform-origin: right;
    transform: scaleX(0) translateX(100%);
    transition: all 150ms ease-in 0s
  }
</style>
