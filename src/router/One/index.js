import axios from 'axios';
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
      beforeEnter: async (to, before, next) => {
        store.commit(types.LOADING_FLAG, true);
        if (store.state.idList.length === 0) {
          // 请求idList
          await axios.get('/api/onelist/idlist')
            .then((response) => {
              const idList = response.data.data;
              store.commit(types.ID_LIST, idList);
            })
            .catch((error) => {
              store.commit(types.NET_STATUS, error.response.status);
            });
        }
        const idList = store.state.idList;
        const request = [];
        idList.forEach((value) => {
          // 保证不重复发请求浪费资源
          if (!store.state.oneList[value]) {
            request.push(axios.get(`/api/onelist/${value}/0`));
          }
        });
        await axios.all(request)
          .then((response) => {
            response.forEach((value) => {
              store.commit(types.ONE_LIST, value.data.data);
            });
          })
          .catch((error) => {
            store.commit(types.NET_STATUS, error.response.status);
          });
        store.commit(types.LOADING_FLAG, false);
        next();
      },
    },
  ],
};
