import * as types from './mutation-types';

const mutations = {
  [types.NET_STATUS](state, netStatus) {
    state.netStatus = netStatus;
  },

  [types.LOADING_FLAG](state, loadingFlag) {
    state.loadingFlag = loadingFlag;
  },

  [types.ONE_LIST](state, oneList) {
    state.oneList = oneList;
  },

  [types.HOME_DATA](state, data) {
    state.homeData = Object.assign({}, state.homeData, {
      ...state.homeData,
      ...data,
    });
  },
};

export default mutations;
