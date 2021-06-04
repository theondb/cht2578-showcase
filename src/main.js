import Vue from 'vue';
import InlineSvg from 'vue-inline-svg';
import VueGtag from 'vue-gtag';
import Hotjar from 'vue-hotjar';
import App from './App.vue';
import router from './router';

import 'tailwindcss/tailwind.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '@/assets/css/fonts.css';

Vue.config.productionTip = false;

Vue.component('inline-svg', InlineSvg);

function bindGoogleAnalytics() {
  Vue.use(VueGtag, {
    config: { id: 'G-WN3JNDV03C' },
  });
}

function bindHotJar() {
  Vue.use(Hotjar, {
    id: '2305948',
    isProduction: true,
    snippetVersion: 6,
  });
}

if (localStorage.getItem('cookies:accepted') === 'true') {
  bindGoogleAnalytics();
  bindHotJar();
}

window.addEventListener('cookies:accepted', () => {
  bindGoogleAnalytics();
  bindHotJar();
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
