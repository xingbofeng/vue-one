import * as types from './mutation-types';

const mutations = {
  [types.NET_STATUS](state, netStatus) {
    state.netStatus = netStatus;
  },

  [types.LOADING_FLAG](state, loadingFlag) {
    state.loadingFlag = loadingFlag;
  },

  [types.ID_LIST](state, idList) {
    state.idList = idList;
  },

  [types.ONE_LIST](state, oneList) {
    state.oneList = Object.assign({}, state.oneList, {
      [`${oneList.id}`]: oneList,
    });
  },

  [types.ONE_INFOS](state, oneInfos) {
    state.oneInfos = Object.assign({}, state.oneInfos, {
      [`${oneInfos.hpcontent_id}`]: oneInfos,
    });
  },

  [types.ESSAY](state, essay) {
    state.essay = Object.assign({}, state.essay, {
      [`${essay.content_id}`]: essay,
    });
  },

  [types.ESSAY_INFOS](state, essayInfos) {
    state.essayInfos = Object.assign({}, state.essayInfos, {
      [`${essayInfos.content_id}`]: essayInfos,
    });
  },

  [types.QUESTION](state, question) {
    state.question = Object.assign({}, state.question, {
      [`${question.question_id}`]: question,
    });
  },

  [types.MOVIE](state, movie) {
    state.movie = movie.data.reduce((pre, current) =>
      Object.assign({}, pre, {
        [`${current.movie_id}`]: current,
      }), {});
  },

  [types.MUSIC](state, music) {
    state.music = Object.assign({}, state.music, {
      [`${music.id}`]: music,
    });
  },

  [types.READING](state, reading) {
    state.reading = reading;
  },

};

export default mutations;
