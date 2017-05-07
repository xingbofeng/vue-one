import Vue from 'vue';
import Router from 'vue-router';
import Home from './Home';
import One from './One';
import Essay from './Essay';
import Music from './Music';
import Movie from './Movie';
import About from './About';
import Question from './Question';

Vue.use(Router);

export default new Router({
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
