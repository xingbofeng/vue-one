import {
  isObjectEmpty,
} from '../util';

const getters = {
  home: (state) => {
    if (!isObjectEmpty(state.oneList) &&
      !isObjectEmpty(state.essay) &&
      !isObjectEmpty(state.question)) {
      const essay = Object.values(state.essay)[0];
      const question = Object.values(state.question)[0];
      return {
        image: Object.values(state.oneList)[0].content_list[0], // 首页头图
        essay: {
          link: `/essay/${essay.content_id}`,
          author: essay.hp_author,
          title: essay.hp_title,
          content: essay.hp_content,
        }, // 首页一周语文
        question: {
          link: `/question/${question.question_id}`,
          title: question.question_title,
          content: question.answer_content,
        }, // 首页问答
      };
    }
    return {};
  },
};

export default getters;
