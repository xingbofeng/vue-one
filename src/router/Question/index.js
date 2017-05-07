// import axios from 'axios';
import Question from './Question';
import QuestionInfos from './QuestionInfos';
import store from '../../store';
import * as types from '../../store/mutation-types';

export default {
  path: '/question',
  component: {
    template: '<router-view></router-view>', // 嵌套路由以router-view作为模板
  },
  children: [
    {
      path: ':QuestionId',
      component: QuestionInfos,
      name: 'QuestionInfos',
      beforeEnter: (to, before, next) => {
        store.commit(types.LOADING_FLAG, true);
        store.commit(types.LOADING_FLAG, false);
        next();
      },
    },
    {
      path: '',
      component: Question,
      name: 'Question',
      beforeEnter: (to, before, next) => {
        store.commit(types.LOADING_FLAG, true);
        store.commit(types.LOADING_FLAG, false);
        next();
      },
    },
  ],
};
