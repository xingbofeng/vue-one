// import axios from 'axios';
import One from './One';
import OneInfos from './OneInfos';
import store from '../../store';
import * as types from '../../store/mutation-types';

export default {
  path: '/one',
  component: {
    template: '<router-view></router-view>', // 嵌套路由以router-view作为模板
  },
  children: [
    {
      path: ':oneId',
      component: OneInfos,
      name: 'OneInfos',
      beforeEnter: (to, before, next) => {
        store.commit(types.LOADING_FLAG, true);
        store.commit(types.LOADING_FLAG, false);
        next();
      },
    },
    {
      path: '',
      component: One,
      name: 'One',
      beforeEnter: (to, before, next) => {
        store.commit(types.LOADING_FLAG, true);
        store.commit(types.LOADING_FLAG, false);
        next();
      },
    },
  ],
};
