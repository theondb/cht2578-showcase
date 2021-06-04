<template>
  <div class="flex flex-col items-center">
    <div class="w-full mb-5 lg:mb-0 lg:w-3/5">
      <schedule-entry
        v-for="scheduleEntry in scheduleEntries"
        :key="scheduleEntry.time"
        :label="scheduleEntry.name"
        :value="scheduleEntry.time"
        class="w-full"
      >
      </schedule-entry>
    </div>
  </div>
</template>

<script>
import ScheduleEntry from '@/components/ScheduleEntry.vue';

export default {
  name: 'Schedule',
  components: { ScheduleEntry },
  data() {
    return {
      scheduleEntries: [{
        name: 'Start',
        time: '17:00',
      }, {
        name: 'Student Presentations',
        time: '17:15',
      }, {
        name: 'Chat with Students',
        time: '17:45',
      }, {
        name: 'End',
        time: '19:00',
      }],
    };
  },
};
</script>

<style scoped>
</style>
