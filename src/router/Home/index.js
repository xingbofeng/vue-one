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
      const oneListContent = oneList.content_list.map((value) => {
        switch (value.content_type) {
          case '1': {
            return {
              request: axios.get(`/api/essay/${value.item_id}`), // 一周语文
              type: types.ESSAY,
            };
          }
          case '2': {
            return {
              request: axios.get(`/api/essay/${value.item_id}`), // 文章
              type: types.ESSAY,
            };
          }
          case '3': {
            return {
              request: axios.get(`/api/question/${value.item_id}`), // 问答
              type: types.QUESTION,
            };
          }
          case '4': {
            return {
              request: axios.get(`/api/music/detail/${value.item_id}`), // 音乐
              type: types.MUSIC,
            };
          }
          case '5': {
            return {
              request: axios.get(`api/movie/${value.item_id}/story/1/0`), // 电影
              type: types.MOVIE,
            };
          }
          default: {
            return {
              request: null,
              type: null,
            };
          }
        }
      });
      await axios.all(oneListContent.map(value => value.request))
        .then((response) => {
          // 遍历oneListContent来对其进行分类commit
          oneListContent.forEach((value, index) => {
            // 确保不是空request
            if (value.type) {
              store.commit(value.type, response[index].data.data);
            }
          });
        })
        .catch((error) => {
          store.commit(types.NET_STATUS, error);
        });
    }
    next();
  },
};
