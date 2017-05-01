<template>
  <div id="home">
    <top-header />
    <main>
      <one-item
        v-for="item in oneTitle.content_list"
        :content="item"
        :key="item.id"
      />
    </main>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import TopHeader from '../../components/Common/TopHeader';
import OneItem from '../../components/Home/OneItem';

export default {
  name: 'Home',

  components: {
    TopHeader,
    OneItem,
  },

  data() {
    return {
      msg: 'home',
    };
  },

  computed: {
    ...mapState({
      oneTitle(state) {
        return state.homeData.oneTitle;
      },
      readingList(state) {
        return state.homeData.readingList;
      },
    }),
  },
};
</script>

<style scoped>
#home {
  height: 100vh;
  position: relative;
  overflow-x: hidden;
  padding-top: 0.74rem;
}
</style>
