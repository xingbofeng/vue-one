import {
  isObjectEmpty,
} from '../util';

/**
 * @param  {[object]} store.state
 * @return {[object]} homeData 首页所需数据
 */
const home = (state) => {
  if (!isObjectEmpty(state.oneList) &&
    !isObjectEmpty(state.essay) &&
    !isObjectEmpty(state.question)) {
    const essay = Object.values(state.essay)[0];
    const question = Object.values(state.question)[0];
    const imageValues = Object.values(state.oneList);
    const image = imageValues.pop().content_list[0];
    return {
      image, // 首页头图
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
};

/**
 * @param  {[object]} store.state
 * @return {[array]} oneData one页所需数据
 */
const one = (state) => {
  if (!isObjectEmpty(state.oneList)) {
    // 提取需要的信息并按照时间排序
    const imageValues = Object.values(state.oneList);
    return imageValues.map((value) => {
      const {
        content_id,
        post_date,
        volume,
        img_url,
        title,
        pic_info,
        forward,
        words_info,
      } = value.content_list[0];
      return {
        id: content_id,
        date: post_date.match(/\d+-\d+-\d+/)[0],
        volume,
        imgUrl: img_url,
        info: `${title}|${pic_info}`, // eslint-disable-line
        forward,
        words: words_info,
      };
    }).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }
  return [];
};

/**
 * @param  {[object]} store.state
 * @return {[object]} oneInfos
 */
const oneInfos = (state) => {
  const oneId = state.route.params.oneId;
  if (!oneId) {
    // 保证在oneInfos页面才有
    return {};
  }
  const {
    hpcontent_id,
    hp_makettime,
    hp_title,
    hp_img_original_url,
    hp_author,
    hp_content,
    text_authors,
  } = state.oneInfos[oneId];
  return {
    id: hpcontent_id,
    date: hp_makettime,
    volume: hp_title,
    imgUrl: hp_img_original_url,
    info: hp_author,
    forward: hp_content,
    words: text_authors,
  };
};

const getters = {
  home,
  one,
  oneInfos,
};

export default getters;
