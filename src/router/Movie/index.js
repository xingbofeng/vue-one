// import axios from 'axios';
import Movie from './Movie';
import MovieInfos from './MovieInfos';
import store from '../../store';
import * as types from '../../store/mutation-types';

export default {
  path: '/movie',
  component: {
    template: '<router-view></router-view>', // 嵌套路由以router-view作为模板
  },
  children: [
    {
      path: ':movieId',
      component: MovieInfos,
      name: 'MovieInfos',
      beforeEnter: (to, before, next) => {
        store.commit(types.LOADING_FLAG, true);
        store.commit(types.LOADING_FLAG, false);
        next();
      },
    },
    {
      path: '',
      component: Movie,
      name: 'Movie',
      beforeEnter: (to, before, next) => {
        store.commit(types.LOADING_FLAG, true);
        store.commit(types.LOADING_FLAG, false);
        next();
      },
    },
  ],
};
