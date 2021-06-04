<template>
  <div id="mc_embed_signup">
    <form action="https://hud.us8.list-manage.com/subscribe/post?u=701eb6118ec4d6d4b4d7f8eb3&amp;id=31508444c7" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
      <div id="mc_embed_signup_scroll" class="flex items-center flex-col">
        <h2 class="text-center text-xl">Subscribe to our mailing list</h2>
        <div class="mc-field-group w-1/2">
          <input type="email" value="" name="EMAIL" class="mt-4 w-full outline-none appearance-none bg-transparent border-none green-input-border p-2" placeholder="Email" id="mce-EMAIL">
        </div>
        <div class="mc-field-group w-1/2">
          <input type="text" value="" name="FNAME" class="mt-4 w-full outline-none appearance-none bg-transparent border-none green-input-border p-2" placeholder="First Name" id="mce-FNAME">
        </div>
        <div class="mc-field-group w-1/2">
          <input type="text" value="" name="LNAME" class="mt-4 w-full outline-none appearance-none bg-transparent border-none green-input-border p-2" placeholder="Last Name" id="mce-LNAME">
        </div>
        <div class="mc-field-group w-1/2">
          <input type="text" value="" name="MMERGE6" class="mt-4 w-full outline-none appearance-none bg-transparent border-none green-input-border p-2" placeholder="Employer" id="mce-MMERGE6">
        </div>
        <div id="mce-responses" class="clear">
            <div class="response" id="mce-error-response" style="display:none"></div>
            <div class="response" id="mce-success-response" style="display:none"></div>
        </div>
        <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_701eb6118ec4d6d4b4d7f8eb3_31508444c7" tabindex="-1" value=""></div>
        <div class="mt-4 flex justify-center">
          <input type="submit" @click="$emit('submitted')" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="text-green-500 hover:text-green-400 text-m p-2 uppercase bg-transparent cursor-pointer">
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'MailchimpForm',
};
</script>

<style scoped>
  .green-input-border {
    border-bottom: 2px solid #1a4829;
    transition: border 100ms ease-in-out;
  }
  .green-input-border:focus {
    border-bottom: 2px solid #00EE6C;
  }
</style>
