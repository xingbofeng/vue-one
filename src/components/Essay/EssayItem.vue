<template>
  <router-link
    :to="`/essay/${essay.content_id}`"
  >
    <div class="essayItem">
      <h2>{{ essay.hp_title }}</h2>
      <h3>文 / {{ essay.author[0].user_name }}</h3>
      <img
        :src="essay.author[0].web_url"
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
</style>
