<template>
  <div class="oneInfos">
    <top-header />
    <one-info-content
      :oneInfos="oneInfos"
    />
    <page-end />
    <paging
      :paging="{
        before: `/one/${parseInt($route.params.oneId, 10) + 1}`,
        after: `/one/${parseInt($route.params.oneId, 10) - 1}`,
      }"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import axios from 'axios';
import TopHeader from './../../components/Common/TopHeader';
import PageEnd from '../../components/Common/PageEnd';
import Paging from '../../components/Common/Paging';
import OneInfoContent from '../../components/One/OneInfoContent';
import store from '../../store';
import * as types from '../../store/mutation-types';

export default {
  name: 'OneInfos',

  components: {
    TopHeader,
    PageEnd,
    Paging,
    OneInfoContent,
  },

  computed: {
    ...mapGetters(['oneInfos']),
  },

  beforeRouteUpdate(to, before, next) {
    // 使用beforeRouteUpdate之间的跳转逻辑(因为路由里的beforeEnter钩子并不会触发)
    // 在这里需要判断是否有下一篇，如果没有返回的数据，则显示：已经是最新文章了
    store.commit(types.LOADING_FLAG, true);
    const oneId = to.params.oneId;
    if (!store.state.oneInfos[oneId]) {
      axios.get(`/api/hp/detail/${oneId}`)
        .then((response) => {
          if (!response.data.data) {
            // fix 一直加载中的bug
            this.showAlert(true);
          } else {
            store.commit(types.ONE_INFOS, response.data.data);
          }
          store.commit(types.LOADING_FLAG, false);
          next();
        });
    } else {
      store.commit(types.LOADING_FLAG, false);
      next();
    }
  },

  methods: {
    showAlert() {
      console.log('show');
    },
  },
};
</script>

<style scoped>
.oneInfos {
  padding-top: 0.74rem;
  padding-bottom: 0.96rem;
}
</style>
