<template>
  <div id="home">
    <top-header />
    <main>
      <one-image
        :content="home.image"
      />
      <div class="home-text">
        <reading
          :infos="home.essay"
        >
          <h1 slot="type" class="type">
            <router-link to="/essay">
              阅 读｜
            </router-link>
          </h1>
          <p slot="author" class="author">
            {{ home.essay.author }}
          </p>
        </reading>
        <reading
          :infos="home.question"
        >
          <h1 slot="type" class="type">
            <router-link to="/question">
              问 答｜
            </router-link>
          </h1>
        </reading>
      </div>
      <router-link to="/one">
        <button class="moreBtn">更多内容 ></button>
      </router-link>
    </main>
    <page-end />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import TopHeader from '../../components/Common/TopHeader';
import OneImage from '../../components/Home/OneImage';
import Reading from '../../components/Home/Reading';
import PageEnd from '../../components/Common/PageEnd';

export default {
  name: 'Home',

  components: {
    TopHeader,
    OneImage,
    Reading,
    PageEnd,
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

.home-text {
  margin-top: 0.4rem;
}

p.author {
  /* author */
  color: #000;
  font-size: 0.26rem;
  padding-left: 0.4rem;
}

h1.type a {
  /* type */
  color: #38c;
  font-size: 0.26rem;
}

.moreBtn {
  display: block;
  width: 2rem;
  padding: 0.22rem 0.32rem;
  margin: 0 auto 0.8rem;
  background-color: #ededed;
  border: #ddd 0.02rem solid;
  text-shadow: 0 0.02rem 0 #f3f3f3;
  color: #333;
  font-size: 0.32rem;
  border-radius: 0.32rem;
  box-sizing: content-box;
}
</style>
