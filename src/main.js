import Vue from 'vue';
import router from './router';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import VueAxios from 'vue-axios';
// Import component
import Loading from 'vue-loading-overlay';
// Import stylesheet
import 'vue-loading-overlay/dist/vue-loading.css';

import App from './App.vue';

Vue.config.productionTip = false;

Vue.use(VueAxios, axios);

Vue.component('Loading', Loading);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
