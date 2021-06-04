<template>
  <div class="inline-block mr-1">
    <div class="skill-pill flex items-center justify-center rounded-full cursor-pointer text-center bg-green-400 bg-opacity-25 text-green-400 py-1 px-3">
      <span class="text-xs font-medium">{{ skill.name }}</span>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ProjectTileSkillPill',
  props: {
    skill: {
      required: true,
      type: Object,
    },
  },
};
</script>

<style scoped>

</style>
