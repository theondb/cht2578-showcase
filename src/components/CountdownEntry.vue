<template>
  <div class="flex flex-col items-center m-5">
    <p class="text-2xl">{{ value }}</p>
    <p class="text-xl">{{ label }}</p>
  </div>
</template>

<script>

export default {
  name: 'CountdownEntry',
  props: {
    label: {
      type: String,
      required: true,
    },
    value: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style scoped>
</style>
