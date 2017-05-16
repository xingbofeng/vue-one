<template>
  <div class="oneInfos">
    <top-header />
    <main>
      <div class="oneItem">
        <img
          :src="oneInfos.imgUrl"
          alt="一个图片"
        />
        <div class="intro">
          <h3>{{ oneInfos.volume }}</h3>
          <h3>{{ oneInfos.info }}</h3>
        </div>
        <div class="date">
          <h2>{{ day }}</h2>
          <p>{{ date }}</p>
        </div>
        <p>{{ oneInfos.forward }}</p>
        <h3>{{ oneInfos.title }}</h3>
      </div>
    </main>
    <page-end />
    <paging
      :paging="{
        before: `/one/${parseInt($route.params.oneId, 10) - 1}`,
        after: `/one/${parseInt($route.params.oneId, 10) + 1}`,
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
import store from '../../store';
import * as types from '../../store/mutation-types';

export default {
  name: 'OneInfos',

  components: {
    TopHeader,
    PageEnd,
    Paging,
  },

  computed: {
    ...mapGetters(['oneInfos']),

    date() {
      const date = new Date(this.oneInfos.date).toDateString().split(' ');
      return `${date[1]}.${date[3]}`;
    },

    day() {
      return new Date(this.oneInfos.date).toDateString().split(' ')[2];
    },
  },

  beforeRouteUpdate(to, before, next) {
    // 使用beforeRouteUpdate之间的跳转逻辑
    store.commit(types.LOADING_FLAG, true);
    const oneId = to.params.oneId;
    if (!store.state.oneInfos[oneId]) {
      axios.get(`/api/hp/detail/${oneId}`)
        .then((response) => {
          if (!response.data.data) {
            // fix 一直加载中的bug
            store.commit(types.NET_STATUS, '404');
          }
          store.commit(types.ONE_INFOS, response.data.data);
          store.commit(types.LOADING_FLAG, false);
          next();
        });
    } else {
      store.commit(types.LOADING_FLAG, false);
      next();
    }
  },
};
</script>

<style scoped>
.oneInfos {
  padding-top: 0.74rem;
}

.oneItem {
  padding: 0.32rem 0 0.5rem 0;
  margin-bottom: 0.16rem;
  display: inline-block;
  text-align: center;
  background-color: #fff;
  color: #000;
}

.intro {
  display: flex;
  justify-content: space-between;
}

.oneItem h2, .oneItem h3, .oneItem p {
  padding: 0 0.4rem;
  font-weight: normal;
}

img {
  width: 100%;
  padding: 0;
  margin: 0.2rem 0 0.3rem;
}

h2 {
  font-size: 0.96rem;
  margin-top: 0.3rem;
}

h3 {
  font-size: 0.26rem;
}

p {
  text-align: left;
  font-size: 0.32rem;
}

.date {
  width: 2.3rem;
  margin: 0 auto;
  padding-bottom: 0.3rem;
  border-bottom: #eee solid 0.02rem;
}

.date > p {
  text-align: center;
  font-size: 0.28rem;
  margin: 0.4rem 0 0.36rem;
}

.oneItem > p {
  margin-top: 0.3rem;
}
</style>
