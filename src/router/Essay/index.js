import axios from 'axios';
import Essay from './Essay';
import EssayInfos from './EssayInfos';
import store from '../../store';
import * as types from '../../store/mutation-types';

export default {
  path: '/essay',
  component: {
    template: '<router-view></router-view>', // 嵌套路由以router-view作为模板
  },
  children: [
    {
      path: ':essayId',
      component: EssayInfos,
      name: 'EssayInfos',
      beforeEnter: (to, before, next) => {
        store.commit(types.LOADING_FLAG, true);
        store.commit(types.LOADING_FLAG, false);
        next();
      },
    },
    {
      path: '',
      component: Essay,
      name: 'Essay',
      beforeEnter: (to, before, next) => { // eslint-disable-line
        store.commit(types.LOADING_FLAG, true);
        // 先判断是否已有readingList的存在
        if (Object.keys(store.state.reading).length !== 0) {
          store.commit(types.LOADING_FLAG, false);
          return next();
        }
        axios.get('/api/reading/index/')
          .then((response) => {
            store.commit(types.READING, response.data.data);
            store.commit(types.LOADING_FLAG, false);
            return next();
          })
          .catch((error) => {
            store.commit(types.NET_STATUS, error.response.status);
            return next();
          });
      },
    },
  ],
};
