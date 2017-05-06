import { isObjectEmpty } from '../util';

const getters = {
  home: (state) => {
    if (!isObjectEmpty(state.oneList) &&
      !isObjectEmpty(state.essay) &&
      !isObjectEmpty(state.question)) {
      return {
        image: state.oneList.content_list[0], // 首页头图
        essay: Object.values(state.essay)[0], // 首页一周语文
        question: Object.values(state.question)[0], // 首页问答
      };
    }
    return {};
  },
};

export default getters;
