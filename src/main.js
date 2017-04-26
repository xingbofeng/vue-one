// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueResource from 'vue-resource';
import VueLazyload from 'vue-lazyload';
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import { sync } from 'vuex-router-sync';
import App from './App';
import router from './router';
import { currency } from './currency';
import store from './store';

Vue.use(VueResource);
Vue.use(iView);
Vue.use(VueLazyload, {
  preLoad: 2,
});
Vue.config.productionTip = false;
sync(store, router);

Vue.filter('currency', currency);

/* eslint-disable no-new */
new Vue({
  store,
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
