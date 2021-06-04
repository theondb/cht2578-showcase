<template>
  <span class="inline-block">
    <span class="inline-block" v-if="skill.custom">
      <inline-svg
        :src="require('@/assets/icons/' + skill.icon + '.svg')"
        @loaded="forceEnable"
      >
      </inline-svg>
    </span>
    <i v-else class="fab" :class="skill.icon"></i>
  </span>
</template>

<script>

export default {
  name: 'SkillIcon',
  props: {
    skill: {
      required: true,
      type: Object,
    },
    forceEnabled: {
      required: false,
      type: Boolean,
    },
  },
  methods: {
    forceEnable() {
      if (this.skill.custom && this.forceEnabled) {
        const iconPrimary = document.getElementById(this.skill.icon);
        const iconSecondaries = document.getElementsByClassName(`${this.skill.icon}-cls-2`);
        iconPrimary.classList.add('custom-icon-enabled', 'dark:custom-icon-enabled-dark');
        iconSecondaries.forEach((iconSecondary) => {
          iconSecondary.classList.add('custom-icon-enabled-secondary', 'dark:custom-icon-enabled-secondary-dark');
        });
      }
    },
  },
};
</script>

<style scoped>
  svg {
    display: inline-block;
    width: 14px;
    padding-bottom: 4px;
  }
</style>

<style>

  /* light mode - disabled */
  .cls-1 {
    fill: #232425!important;
  }

  .cls-2 {
    fill:#dfe4e4!important;
  }

  /* dark mode - disabled */
  .dark .cls-1.dark\:cls-1-dark {
    fill: #707375!important;
  }

  .dark .cls-2.dark\:cls-2-dark {
    fill: #232425!important;
  }

  /* light mode - enabled */
  .cls-1.custom-icon-enabled {
    fill: #06ee6c!important;
  }

  .cls-2.custom-icon-enabled-secondary {
    fill: #c7f5d4!important;
  }

  /* dark mode - enabled */
  .dark .cls-1.dark\:cls-1-dark.dark\:custom-icon-enabled-dark {
    fill: #06ee6c!important;
  }

  .dark .cls-2.dark\:cls-2-dark.dark\:custom-icon-enabled-secondary-dark {
    fill:#232425!important;
  }

</style>
