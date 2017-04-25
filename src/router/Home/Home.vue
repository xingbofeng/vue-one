<template>
  <div class="home">
    <h1>home</h1>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Home',

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
</style>
