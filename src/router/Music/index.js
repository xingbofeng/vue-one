// import axios from 'axios';
import Music from './Music';
import MusicInfos from './MusicInfos';
import store from '../../store';
import * as types from '../../store/mutation-types';

export default {
  path: '/music',
  component: {
    template: '<router-view></router-view>', // 嵌套路由以router-view作为模板
  },
  children: [
    {
      path: ':musicId',
      component: MusicInfos,
      name: 'MusicInfos',
      beforeEnter: (to, before, next) => {
        store.commit(types.LOADING_FLAG, true);
        store.commit(types.LOADING_FLAG, false);
        next();
      },
    },
    {
      path: '',
      component: Music,
      name: 'Music',
      beforeEnter: (to, before, next) => {
        store.commit(types.LOADING_FLAG, true);
        store.commit(types.LOADING_FLAG, false);
        next();
      },
    },
  ],
};
