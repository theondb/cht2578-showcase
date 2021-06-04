<template>
  <div class="container mx-auto mt-4 mb-4">
    <div class="hidden lg:grid grid-cols-1 lg:grid-cols-2">
      <div class="cols-span-1">
        <div class="cols-span-1 min-h-full justify-self-center text-left my-24 bg-cover text-hero lg:bg-none">
          <h1 class="md:text-7xl text-3xl font-bold bg-clip-text text-black dark:text-white lg:mr-60">Unrestricted creativity.</h1>
          <countdown class="mr-32 mt-4 text-gray-400 dark:text-gray-200" />
          <p class="pb-5 mt-4 lg:mr-60 text-gray-400 dark:text-gray-200">
            The Web 2021 Showcase is a virtual event allowing you to speak to our Web Design, Web Technology, Web Programming and Web Programming with Cyber Security Students and see the work they've produced. Graduating this year, the students are keen to show off their projects and personalities alike.
          </p>
          <a class="text-green-400 text-md uppercase cursor-pointer" @click="modalOpen = true">Watch The Trailer <i class="fas fa-play pl-2" /></a>
          <schedule class="mr-32 mt-4 text-gray-400 dark:text-gray-200" />
        </div>
      </div>
      <div class="bg-img cols-span-1 bg-cover cursor-pointer hero-img md:w-auto md:h-auto flex justify-center items-center" @click="modalOpen = true">
        <i class="fas fa-play text-5xl text-white"></i>
      </div>
    </div>
    <div class="flex items-end lg:hidden mobile-hero bg-cover p-5">
      <div>
        <h1 class="text-5xl font-bold bg-clip-text text-white">Unrestricted creativity.</h1>
        <p class="pb-5 mr-4 mt-10 text-gray-200">
          The Web 2021 Showcase is a virtual event allowing you to speak to our Web Design, Web Technology, Web Programming and Web Programming with Cyber Security Students and see the work they've produced. Graduating this year, the students are keen to show off their projects and personalities alike.
        </p>
        <a class="text-green-400 text-md mb-2 uppercase cursor-pointer" @click="modalOpen = true">Watch The Trailer <i class="fas fa-play pl-2" /></a>
      </div>
    </div>
    <div class="lg:hidden">
      <countdown class="mt-4 text-gray-400 dark:text-gray-200" />
      <schedule class="mt-4 text-gray-400 dark:text-gray-200" />
    </div>
    <modal v-if="modalOpen" :video="true" @close="modalOpen = false">
      <template v-slot:body>
        <Player class="w-full h-full" ytid="cTbSbrNHaio" yturl="https://www.youtube.com/embed/cTbSbrNHaio" frameborder="0"
                :playerVars="{}"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen @playing="trackPlayedShowreel"></Player>
      </template>
    </modal>
  </div>
</template>

<script>
import Modal from '@/components/utility/Modal.vue';
import Countdown from '@/components/Countdown.vue';
import Schedule from '@/components/Schedule.vue';
import VuePlayerPlugin, { Player } from 'vue-youtube-iframe-api';
import Vue from 'vue';

Vue.use(VuePlayerPlugin);

export default {
  name: 'Hero',
  components: {
    Modal,
    Player,
    Countdown,
    Schedule,
  },
  data() {
    return {
      modalOpen: false,
    };
  },
  methods: {
    trackPlayedShowreel() {
      if (localStorage.getItem('cookies:accepted') === 'true') {
        this.$gtag.event('showreel_played', {
          event_category: 'engagement',
          event_label: 'showreel_played',
          value: 'showreel',
        });
      }
    },
  },
};
</script>

<style scoped>
.hero-img, .text-hero {
  background-image: url('/img/hero.png');
}

.mobile-hero {
  height: calc(75vh);
  background-image: url('/img/hero.png');
}

@media (min-width: 1140px) {
  .text-hero {
    background-image: none;
  }
}
</style>
