import axios from 'axios';
import Home from './Home';
import store from '../../store';
import * as types from '../../store/mutation-types';

export default {
  path: '/',
  name: 'Home',
  component: Home,
  beforeEnter: (to, before, next) => {
    // 两次请求，一次拿到一个list，一次拿到首页的homeData！
    if (store.state.oneList.length === 0) {
      axios.get('/api/onelist/idlist')
        .then((response) => {
          // 拿到最新的一个list
          const list = response.data.data;
          store.commit(types.ONE_LIST, list);
          // 首页只需要第一个数据
          axios.get(`/api/onelist/${list[0]}/0`).then((response) => {
            // 首页数据
            const data = response.data.data;
            store.commit(types.HOME_DATA, data);
          }).catch((error) => {
            store.commit(types.NET_STATUS, error);
          });
        })
        .catch((error) => {
          store.commit(types.NET_STATUS, error);
        });
    }
    next();
  },
};
