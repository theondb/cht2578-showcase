<template>
  <div class="flex items-center mb-4">
    <h3 :id="id" class="text-3xl whitespace-nowrap">{{ text }}</h3>
    <hr class="w-full ml-5 border-gray-600">
  </div>
</template>

<script>

export default {
  name: 'SectionHeading',
  props: {
    id: {
      type: String,
      required: false,
    },
    text: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
  hr {
    flex-grow: 1;
  }
</style>
