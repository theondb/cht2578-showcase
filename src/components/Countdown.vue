<template>
  <div v-if="!eventOver">
    <div v-if="showcaseLive" class="flex flex-row items-center justify-between m-5 lg:mr-32">
      <div>
        <p class="text-2xl">Showcase now live!</p>
      </div>
      <div>
        <a class="text-2xl text-green-400" target="_blank" rel="noopener noreferrer" href="https://hudac.zoom.us/j/68939551345?from=addon">Zoom Link <i class="fas fa-external-link-alt"></i></a>
        <p class="text-xl">Passcode: 706609</p>
      </div>
    </div>
    <div class="flex" v-else>
      <countdown-entry class="w-1/4" label='Days' :value="days"></countdown-entry>
      <countdown-entry class="w-1/4" label='Hours' :value="hours"></countdown-entry>
      <countdown-entry class="w-1/4" label='Minutes' :value="minutes"></countdown-entry>
      <countdown-entry class="w-1/4" label='Seconds' :value="seconds"></countdown-entry>
    </div>
  </div>
</template>

<script>
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import CountdownEntry from '@/components/CountdownEntry.vue';

export default {
  name: 'Countdown',
  components: { CountdownEntry },
  created() {
    dayjs.extend(utc);
    this.eventStartUTC = dayjs('2021-05-12T16:00:00.000Z').utc().format();
    this.eventEndUTC = dayjs('2021-05-12T18:00:00.000Z').utc().format();
    this.updateTimeRemaining();
    window.setInterval(() => {
      this.updateTimeRemaining();
    }, 1000);
  },
  data() {
    return {
      currentUTC: null,
      eventStartUTC: null,
      eventEndUTC: null,
      eventOver: false,
      showcaseLive: false,
      days: '',
      hours: '',
      minutes: '',
      seconds: '',
    };
  },
  methods: {
    updateTimeRemaining() {
      this.currentUTC = dayjs.utc().format();

      const totalDiff = Date.parse(this.eventStartUTC) - Date.parse(this.currentUTC);
      this.eventOver = (Date.parse(this.eventEndUTC) - Date.parse(this.currentUTC) < 0);

      if (totalDiff > 0) {
        this.days = Math.floor(totalDiff / (1000 * 60 * 60 * 24));
        this.hours = Math.floor((totalDiff / (1000 * 60 * 60)) % 24);
        this.minutes = Math.floor((totalDiff / 1000 / 60) % 60);
        this.seconds = Math.floor((totalDiff / 1000) % 60);
      } else {
        this.showcaseLive = true;
      }
    },
  },
};
</script>

<style scoped>
</style>
