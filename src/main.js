import Vue from 'vue';
import VueRouter from 'vue-router';

import routes from './routes';

import App from './App.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  routes
});

const app = new Vue({
  el: '#app',
  render: h => h(App),
  router
});
