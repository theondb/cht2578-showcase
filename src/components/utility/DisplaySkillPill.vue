<template>
  <div class="flex items-center justify-center p-2 m-1 rounded-full text-center bg-green-400 bg-opacity-25 text-green-400">
    <span>
      <skill-icon :skill="skill" v-if="skill.icon" :force-enabled="true" class="mr-1"></skill-icon>
      {{ skill.name }}
    </span>
  </div>
</template>

<script>
import SkillIcon from '@/components/projects/SkillIcon.vue';

export default {
  name: 'DisplaySkillPill',
  props: {
    skill: {
      required: true,
      type: Object,
    },
  },
  components: {
    SkillIcon,
  },
};
</script>

<style scoped>

</style>
