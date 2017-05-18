<template>
  <router-link
    :to="`/essay/${essay.content_id}`"
  >
    <div class="essayItem">
      <p class="tag">- 阅读 -</p>
      <h2>{{ essay.hp_title }}</h2>
      <h3>文 / {{ essay.author[0].user_name }}</h3>
      <img
        :src="essay.author_list[0].web_url"
        alt="阅读 - 图片"
      />
      <p class="guide">{{ essay.guide_word }}</p>
      <p class="date">{{ essay.hp_makettime.match(/\d+-\d+-\d+/)[0] }}</p>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'EssayItem',

  props: ['essay'],
};
</script>

<style scoped>
.essayItem {
  background: #fff;
  color: rgba(0, 0, 0, 0.6);
  margin-bottom: 0.16rem;
  padding: 0.2rem 0.4rem 0.6rem 0.4rem;
}

img {
  width: 100%;
}

.tag {
  text-align: center;
  font-size: 0.28rem;
}

.guide {
  font-size: 0.28rem;
  margin: 0.4rem 0 0.32rem;
}

.date {
  font-size: 0.24rem;
}

h2 {
  margin-top: 0.3rem;
  font-size: 0.44rem;
  color: #000;
}

h3 {
  margin: 0.1rem 0 0.2rem;
  font-size: 0.32rem;
  color: rgba(0, 0, 0, 0.6);
  font-weight: normal;
}
</style>
