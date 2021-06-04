<template>
  <video v-bind:key="video" class="w-full h-96" controls="controls">
    <source :src="video">
    Your browser does not support the video tag.
  </video>
</template>

<script>
export default {
  name: 'ProjectVideo',
  props: {
    video: {
      required: true,
    },
  },
};
</script>

<style scoped>

</style>
