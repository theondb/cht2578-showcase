<template>
  <div class="fixed z-50 bottom-0 dark:bg-white bg-black w-full" v-if="show === true">
    <div class="py-4 container mx-auto">
      <div class="grid md:grid-cols-3 sm:grid-cols-1">
        <div class="text-lg dark:text-black text-white col-span-2 px-5">
          By clicking "Accept All Cookies", you agree to the storing of cookies on your device to enhance site navigation, analyse site usage, and assist in our marketing efforts.
        </div>
        <div class="flex justify-center py-2.5 px-5">
          <button @click="handleDecline" class="focus:outline-none text-white text-sm py-2.5 px-5 rounded-md bg-gray-400 hover:bg-gray-600 hover:shadow-lg mr-10">Decline</button>
          <button @click="handleAccept" class="focus:outline-none text-white text-sm py-2.5 px-5 rounded-md bg-green-500 hover:bg-green-600 hover:shadow-lg">Accept All Cookies</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'CookieConsent',
  data() {
    return {
      show: localStorage.getItem('cookies:accepted') === null,
    };
  },
  methods: {
    handleAccept() {
      this.show = false;
      localStorage.setItem('cookies:accepted', true);
      window.dispatchEvent(new Event('cookies:accepted'));
    },
    handleDecline() {
      this.show = false;
      localStorage.setItem('cookies:accepted', false);
    },
  },
};
</script>

<style>

</style>
