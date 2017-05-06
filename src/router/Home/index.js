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
      // 请求首页所需要的一周语文、文章、问答、音乐和电影
      oneList.content_list.forEach((value) => {
        switch (value.content_type) {
          case '1': {
            // 一周语文
            axios.get(`/api/essay/${value.item_id}`)
              .then((response) => {
                store.commit(types.ESSAY, response.data.data);
              }).catch((error) => {
                store.commit(types.NET_STATUS, error);
              });
            break;
          }
          case '2': {
            // 文章
            axios.get(`/api/essay/${value.item_id}`)
              .then((response) => {
                store.commit(types.ESSAY, response.data.data);
              }).catch((error) => {
                store.commit(types.NET_STATUS, error);
              });
            break;
          }
          case '3': {
            // 问答
            axios.get(`/api/question/${value.item_id}`)
              .then((response) => {
                store.commit(types.QUESTION, response.data.data);
              }).catch((error) => {
                store.commit(types.NET_STATUS, error);
              });
            break;
          }
          case '4': {
            // 音乐
            axios.get(`/api/music/detail/${value.item_id}`)
              .then((response) => {
                store.commit(types.MUSIC, response.data.data);
              }).catch((error) => {
                store.commit(types.NET_STATUS, error);
              });
            break;
          }
          case '5': {
            // 电影
            axios.get(`api/movie/${value.item_id}/story/1/0`)
              .then((response) => {
                store.commit(types.MOVIE, response.data.data);
              }).catch((error) => {
                store.commit(types.NET_STATUS, error);
              });
            break;
          }
          default: {
            break;
          }
        }
      });
    }
    next();
  },
};
