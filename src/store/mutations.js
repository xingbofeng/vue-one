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
    state.oneList = oneList;
  },

  [types.ESSAY](state, essay) {
    state.essay = Object.assign({}, state.essay, {
      [`${essay.content_id}`]: essay,
    });
  },

  [types.QUESTION](state, question) {
    state.question = Object.assign({}, state.question, {
      [`${question.question_id}`]: question,
    });
  },

  [types.READING_LIST](state, readingList) {
    state.readingList = readingList;
  },

};

export default mutations;
