<template>
  <div id="app">
    <error
      v-if="netStatus"
      :netStatus="netStatus"
    />
    <loading
      v-else-if="!netStatus && loadingFlag"
    />
    <router-view v-else></router-view>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Loading from './components/Common/Loading';
import Error from './components/Common/Error';

export default {
  name: 'App',

  components: {
    Loading,
    Error,
  },

  computed: mapState({
    netStatus(state) {
      return state.netStatus;
    },
    loadingFlag(state) {
      return state.loadingFlag;
    },
  }),
};

</script>

<style>
#app {
  margin: 0 auto;
}
</style>
