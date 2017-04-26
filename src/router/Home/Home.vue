<template>
  <div id="home">
    <top-header />
    <main>
      <one-item
        v-for="item in homeData.content_list"
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
      homeData(state) {
        return state.homeData;
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
