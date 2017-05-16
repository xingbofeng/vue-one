import Vue from 'vue';
import Router from 'vue-router';
import store from '../store';
import * as types from '../store/mutation-types';
import Home from './Home';
import One from './One';
import Essay from './Essay';
import Music from './Music';
import Movie from './Movie';
import About from './About';
import Question from './Question';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    Home,
    One,
    Essay,
    Music,
    Movie,
    About,
    Question,
  ],
});

router.beforeEach((to, from, next) => {
  store.commit(types.LOADING_FLAG, false);
  store.commit(types.NET_STATUS, '');
  next();
});

export default router;
