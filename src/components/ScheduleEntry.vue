<template>
  <div class="flex flex-col m-3">
    <p class="text-xl text-left">{{ value }} <span class="text-l pre-circle">{{ label }}</span></p>
  </div>
</template>

<script>

export default {
  name: 'ScheduleEntry',
  props: {
    label: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
  .pre-circle:before {
    content: '';
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 100%;
    background-color: #00EE6C;
    margin-left: 20px;
    margin-right: 20px;
  }
</style>
