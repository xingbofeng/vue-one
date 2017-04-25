import axios from 'axios';
import Home from './Home';
import store from '../../store';
import * as types from '../../store/mutation-types';

export default {
  path: '/',
  name: 'Home',
  component: Home,
  beforeEnter: (to, before, next) => {
    console.log(to, before, next);
    axios.get('/api/onelist/idlist')
      .then((response) => {
        store.commit(types.HOME_DATA, response);
      })
      .catch((error) => {
        store.commit(types.NET_STATUS, error);
      });
    next();
  },
};
