<template>
  <router-link
    :to="`/one/${one.id}`"
  >
    <div class="oneItem">
      <h2>{{ one.date }}</h2>
      <h3>{{ one.volume }}</h3>
      <img
        :src="one.imgUrl"
        alt="一个图片"
      />
      <h3>{{ one.info }}</h3>
      <p>{{ one.forward }}</p>
      <h3>{{ one.title }}</h3>
      <h3>{{ one.words }}</h3>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'oneItem',

  props: ['one'],
};
</script>

<style scoped>
.oneItem {
  padding: 0.32rem 0 0.5rem 0;
  margin-bottom: 0.16rem;
  display: inline-block;
  text-align: center;
  background-color: #fff;
  color: #808080;
}

.oneItem > h2, .oneItem > h3, .oneItem > p {
  padding: 0 0.4rem;
  font-weight: normal;
}

img {
  width: 100%;
  padding: 0;
  margin: 0.2rem 0 0.3rem;
}

h2 {
  font-size: 0.4rem;
}

h3 {
  font-size: 0.2rem;
  text-align: right;
}

p {
  text-align: left;
  font-size: 0.28rem;
  margin: 0.4rem 0 0.36rem;
}
</style>
