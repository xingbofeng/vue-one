// import axios from 'axios';
import About from './About';
import store from '../../store';
import * as types from '../../store/mutation-types';

export default {
  path: '/about',
  name: 'About',
  component: About,
  beforeEnter: (to, before, next) => {
    store.commit(types.LOADING_FLAG, true);
    store.commit(types.LOADING_FLAG, false);
    next();
  },
};
