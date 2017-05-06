<template>
  <div class="error">
    <top-header />
    <div class="prompt">
      <img src="../../assets/404.png" alt="404">
      <h1>{{ netStatus }}</h1>
      <h2>网络似乎开小差了……</h2>
      <h2>
        浏览更多
        <router-link to="/">
          <span>精彩内容</span>
        </router-link>
      </h2>
      <a href="https://github.com/xingbofeng/vue-one">
        <h2>向本项目提出一个issus / pr</h2>
      </a>
    </div>
  </div>
</template>

<script>
import TopHeader from './TopHeader';

export default {
  name: 'Error',

  props: ['netStatus'],

  components: {
    TopHeader,
  },
};
</script>

<style scoped>
.error {
  width: 5.22rem;
  margin: 1.74rem auto 0;
}

img {
  width: 5.22rem;
  height: 3.6rem;
}

.prompt h1 {
  text-align: center;
  color: #4589ca;
  font-size: 1.04rem;
}

.prompt h2 {
  color: #4289ca !important;
  font-size: 0.4rem;
  text-align: center;
  line-height: 1rem;
}

.prompt h2 span {
  text-decoration: #4289ca underline;
  color: #4289ca !important;
}
</style>
