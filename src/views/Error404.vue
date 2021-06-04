<template>
  <div class="container m-52 mx-auto text-center">
    <h1 class="text-5xl"><span>404</span> Not Found</h1>
    <div class="py-5">
      <router-link :to="{ name: 'HomePage' }" class="text-3xl underline">Click here to back to the main page</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Error404',
};
</script>

<style scoped>

</style>
