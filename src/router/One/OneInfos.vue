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
    <alert
      type="success"
      show-icon
      v-show="isAlertShow"
    >
      已经是最新内容啦^_^
    </alert>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import axios from 'axios';
import Alert from 'iview/src/components/alert';
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
    Alert,
  },

  data() {
    return {
      isAlertShow: false, // 展示弹窗
    };
  },

  computed: {
    ...mapGetters(['oneInfos']),
  },

  /**
   * [beforeRouteUpdate 在/one/:oneId 与 /one/:oneId的切换是不会触发beforeEnter的导航钩子的]
   * @param  {[object]}   to     [路由对象]
   * @param  {[object]}   before [description]
   * @param  {Function} next   [next方法，注意next(false)可以强制不进行导航]
   * @return
   */
  beforeRouteUpdate(to, before, next) {
    // 使用beforeRouteUpdate之间的跳转逻辑(因为路由里的beforeEnter钩子并不会触发)
    // 在这里需要判断是否有下一篇，如果没有返回的数据，则显示：已经是最新文章了
    const oneId = to.params.oneId;
    if (!store.state.oneInfos[oneId]) {
      axios.get(`/api/hp/detail/${oneId}`)
        .then((response) => {
          if (!response.data.data) {
            // next(false)中断当前的导航
            this.showAlert();
            return next(false);
          }
          // 滚回顶部
          window.scrollTo(0, 0);
          store.commit(types.ONE_INFOS, response.data.data);
          return next();
        })
        .catch((error) => {
          store.commit(types.NET_STATUS, error.response.status);
          return next();
        });
    } else {
      // 滚回顶部
      window.scrollTo(0, 0);
      next();
    }
  },

  methods: {
    /**
     * [showAlert 展示弹窗，用于提醒用户已经是最新一篇文章了]
     */
    showAlert() {
      this.isAlertShow = true;
      // 2秒之后消失
      window.setTimeout(() => {
        this.isAlertShow = false;
      }, 2000);
    },
  },
};
</script>

<style scoped>
.oneInfos {
  padding-top: 0.74rem;
  padding-bottom: 0.96rem;
}

.ivu-alert {
  /* 提示框的样式 */
  position: fixed;
  top: 0.74rem;
  left: 50%;
  margin-left: -1.72rem;
}
</style>
