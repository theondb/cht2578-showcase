<template>
  <div class="flex items-center justify-center p-2 m-1 rounded-full cursor-pointer text-center dark:pill-dark" @click="toggle" :class="pillColours">
    <span><skill-icon v-if="skill.icon" :skill="skill" class="mr-1"></skill-icon>{{ skill.name }}</span>
  </div>
</template>

<script>
import SkillIcon from '@/components/projects/SkillIcon.vue';

export default {
  name: 'ProjectSkillPill',
  props: {
    skill: {
      required: true,
      type: Object,
    },
  },
  components: {
    SkillIcon,
  },
  data() {
    return {
      enabled: false,
    };
  },
  computed: {
    pillColours() {
      return this.enabled ? 'enabled' : 'disabled dark:disabled-dark';
    },
  },
  methods: {
    toggle() {
      this.enabled = !this.enabled;
      this.$emit('toggle', {
        id: this.skill.id,
        enabled: this.enabled,
      });
      if (this.skill.custom) {
        const iconPrimary = document.getElementById(this.skill.icon);
        const iconSecondaries = document.getElementsByClassName(`${this.skill.icon}-cls-2`);
        if (this.enabled) {
          iconPrimary.classList.add('custom-icon-enabled', 'dark:custom-icon-enabled-dark');
          iconSecondaries.forEach((iconSecondary) => {
            iconSecondary.classList.add('custom-icon-enabled-secondary', 'dark:custom-icon-enabled-secondary-dark');
          });
        } else {
          iconPrimary.classList.remove('custom-icon-enabled', 'dark:custom-icon-enabled-dark');
          iconSecondaries.forEach((iconSecondary) => {
            iconSecondary.classList.remove('custom-icon-enabled-secondary', 'dark:custom-icon-enabled-secondary-dark');
          });
        }
      }
    },
  },
};
</script>

<style scoped>

.enabled {
 @apply bg-green-400 bg-opacity-25 text-green-400;
}

.disabled {
 @apply bg-gray-200 text-gray-700;
}

.dark .dark\:disabled-dark {
 @apply bg-gray-700 text-gray-400;
}

</style>
