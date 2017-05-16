<template>
  <main class="oneInfoContent">
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
  </main>
</template>

<script>
export default {
  name: 'OneInfoContent',

  props: ['oneInfos'],

  computed: {
    date() {
      const date = new Date(this.oneInfos.date).toDateString().split(' ');
      return `${date[1]}.${date[3]}`;
    },

    day() {
      return new Date(this.oneInfos.date).toDateString().split(' ')[2];
    },
  },
};
</script>

<style scoped>
.oneInfoContent {
  padding: 0 0 0.5rem 0;
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

.oneInfoContent h2, .oneInfoContent h3, .oneInfoContent p {
  padding: 0 0.4rem;
  font-weight: normal;
}

img {
  width: 100%;
  padding: 0;
  margin: 0 0 0.3rem;
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

.oneInfoContent > p {
  margin-top: 0.3rem;
}
</style>
