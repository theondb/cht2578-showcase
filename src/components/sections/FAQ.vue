<template>
  <div class="content-start grid grid-cols-1 md:grid-cols-3 pt-2">
    <h2 id="faq" class="text-5xl md:text-8xl font-bold flex items-center pl-5">FAQ</h2>
    <div class="grid col-span-2 gap-4 pl-5 md:pl-0 mt-5 md:mt-0">
      <div class="toggle col-span-2" v-for="entry in entries" :key="entry.id">
        <div class="cursor-pointer" @click="openEntry(entry.id, !entry.open)">
          <i class="fas" :class="{'fa-minus': entry.open, 'fa-plus': !entry.open}"></i>
          <p class="text-xl">{{ entry.question }}</p>
          <hr class="border-gray-600" />
        </div>
        <div class="max-w-sm w-full lg:max-w-full lg:flex" v-if="entry.open">
          <p class="text-md md:text-sm mt-2 text-gray-400 dark:text-gray-300">{{ entry.answer }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'faq',
  data() {
    return {
      entries: [
        {
          id: 1,
          question: 'What Is Web 2021?',
          answer: 'The Web 2021 Showcase is a virtual event allowing you to speak to our Web Design, Web Technology, Web Programming and Web Programming with Cyber Security Students and see the work they\'ve produced. Graduating this year, the students are keen to show off their projects and personalities alike. This event is an opportunity for anyone to come along and see what skills students actually gain and how they can enhance the skill set and profitability of your company.',
          open: false,
        },
        {
          id: 2,
          question: 'How Will the Event Be Hosted?',
          answer: 'The event will be hosted virtually via Zoom - the link to the event will be available via social media and the website on the day.',
          open: false,
        },
        {
          id: 4,
          question: 'Who Can I Contact With Any Questions?',
          answer: 'Please feel free to get in touch with the events marketing team on webshowcase@hud.ac.uk with any questions or general info and we\'ll get back to you as soon as possible.',
          open: false,
        },
      ],
    };
  },
  methods: {
    openEntry(id, setToState) {
      this.entries = this.entries.map((entry) => ({ ...entry, open: false }));
      this.entries.find((entry) => entry.id === id).open = setToState;
      this.track(this.entries.find((entry) => entry.id === id).question);
    },
    track(question) {
      if (localStorage.getItem('cookies:accepted') === 'true') {
        this.$gtag.event(`faq_opened_${question}`, {
          event_category: 'engagement',
          event_label: 'faqs_clicks',
          value: 'click',
        });
      }
    },
  },
};
</script>

<style scoped>
h2 {
  align-content:space-around;
}

i {
  float: right;
  color: #00EE6C;
}

.toggle{
  padding: 5px;
  border-style: solid;
}
</style>
