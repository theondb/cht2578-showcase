<template>
  <div class="toggle-wrapper">
    <label class="switchboard">
      <input
          type="checkbox"
          :checked="(mode === 'dark') ? 'checked' : false"
          @change="toggle"
      />
      <span class="switch round"></span>
    </label>
  </div>
</template>

<script>
export default {
  name: 'DarkModeToggle',
  data() {
    return {
      mode: 'dark',
    };
  },
  beforeMount() {
    this.initialColourScheme();
  },
  methods: {
    initialColourScheme() {
      if (localStorage.theme) {
        this.mode = localStorage.theme;
      } else {
        localStorage.setItem('theme', this.mode);
      }
      if (this.mode === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    },
    toggle() {
      if (this.mode === 'dark') {
        this.mode = 'light';
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      } else {
        this.mode = 'dark';
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      }
      this.track();
      window.dispatchEvent(new CustomEvent('theme-changed', {
        detail: {
          theme: localStorage.getItem('theme'),
        },
      }));
    },
    track() {
      if (localStorage.getItem('cookies:accepted') === 'true') {
        this.$gtag.event(`colour_scheme_changed_${localStorage.getItem('theme')}`, {
          event_category: 'engagement',
          event_label: 'colour_scheme_changed',
          value: localStorage.getItem('theme'),
        });
      }
    },
  },
};
</script>

<style scoped>
.switch {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #15202B;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.switchboard {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

.switchboard input {
  display: none;
}

.switch:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background: #10b981;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .switch {
  background: #FFF;
}

input:focus + switch {
  box-shadow: 0 0 2px #FFF;
}

input:checked + .switch:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

.switch.round {
  border-radius: 5em;
}

.switch.round:before {
  border-radius: 5em;
}

</style>
