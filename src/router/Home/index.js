import axios from 'axios';
import Home from './Home';
import store from '../../store';
import * as types from '../../store/mutation-types';

export default {
  path: '/',
  name: 'Home',
  component: Home,
  beforeEnter: async (to, before, next) => {
    if (store.state.idList.length === 0) {
      let idList;
      // 请求idList
      await axios.get('/api/onelist/idlist')
        .then((response) => {
          idList = response.data.data;
          store.commit(types.ID_LIST, idList);
        })
        .catch((error) => {
          store.commit(types.NET_STATUS, error);
        });
      let oneList;
      // 请求oneList
      await axios.get(`/api/onelist/${idList[0]}/0`).then((response) => {
        oneList = response.data.data;
        store.commit(types.ONE_LIST, oneList);
      }).catch((error) => {
        store.commit(types.NET_STATUS, error);
      });
      let essay;
      let question;
      // 请求首页所需要的阅读和问答
      await axios.all([
        axios.get(`/api/essay/${oneList.content_list[1].item_id}`),
        axios.get(`/api/question/${oneList.content_list[3].item_id}`),
      ])
        .then((response) => {
          // 阅读
          essay = response[0].data.data;
          store.commit(types.ESSAY, essay);
          // 问答
          question = response[1].data.data;
          store.commit(types.QUESTION, question);
        }).catch((error) => {
          store.commit(types.NET_STATUS, error);
        });
    }
    next();
  },
};
