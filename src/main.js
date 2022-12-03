import Vue from 'vue';
import LangFlag from 'vue-lang-code-flags';

import App from './App.vue';

Vue.component('lang-flag', LangFlag);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
