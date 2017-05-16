import axios from 'axios';
import Home from './Home';
import store from '../../store';
import * as types from '../../store/mutation-types';

export default {
  path: '/',
  name: 'Home',
  component: Home,
  beforeEnter: async (to, before, next) => {
    store.commit(types.LOADING_FLAG, true);
    if (store.state.idList.length === 0) {
      // 请求idList
      await axios.get('/api/onelist/idlist')
        .then((response) => {
          store.commit(types.ID_LIST, response.data.data);
        })
        .catch((error) => {
          store.commit(types.NET_STATUS, error.response.status);
        });
    }
    const oneId = store.state.idList[0];
    if (!store.state.oneList[oneId]) {
      // 请求oneList
      await axios.get(`/api/onelist/${oneId}/0`).then((response) => {
        store.commit(types.ONE_LIST, response.data.data);
      }).catch((error) => {
        store.commit(types.NET_STATUS, error.response.status);
      });
    }
    // 请求首页所需要的一周语文、文章、问答、音乐和电影
    const oneListContent = store.state.oneList[oneId].content_list.map((value) => {
      switch (value.content_type) {
        case '1': {
          if (store.state.essay[value.item_id]) {
            return {
              request: null,
              type: null,
            };
          }
          return {
            request: axios.get(`/api/essay/${value.item_id}`), // 一周语文
            type: types.ESSAY,
          };
        }
        case '2': {
          if (store.state.essay[value.item_id]) {
            return {
              request: null,
              type: null,
            };
          }
          return {
            request: axios.get(`/api/essay/${value.item_id}`), // 文章
            type: types.ESSAY,
          };
        }
        case '3': {
          if (store.state.question[value.item_id]) {
            return {
              request: null,
              type: null,
            };
          }
          return {
            request: axios.get(`/api/question/${value.item_id}`), // 问答
            type: types.QUESTION,
          };
        }
        case '4': {
          if (store.state.music[value.item_id]) {
            return {
              request: null,
              type: null,
            };
          }
          return {
            request: axios.get(`/api/music/detail/${value.item_id}`), // 音乐
            type: types.MUSIC,
          };
        }
        case '5': {
          if (store.state.movie[value.item_id]) {
            return {
              request: null,
              type: null,
            };
          }
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
        store.commit(types.NET_STATUS, error.response.status);
      });
    // 结束加载
    store.commit(types.LOADING_FLAG, false);
    next();
  },
};
