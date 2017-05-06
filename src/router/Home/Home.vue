<template>
  <div id="home">
    <top-header />
    <main>
      <one-image
        :content="home.image"
      />
    </main>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import TopHeader from '../../components/Common/TopHeader';
import OneImage from '../../components/Home/OneImage';

export default {
  name: 'Home',

  components: {
    TopHeader,
    OneImage,
  },

  data() {
    return {
      msg: 'home',
    };
  },

  computed: {
    ...mapGetters(['home']),
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
