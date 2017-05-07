<template>
  <article class="reading">
    <slot name="type" class="type"></slot>
    <router-link :to="infos.link">
      <h2 class="title">{{ infos.title }}</h2>
      <div class="author">
        <slot name="author" class="author"></slot>
      </div>
      <p
        v-html="infos.content"
        class="content"
      ></p>
      <p class="more">阅读全文</p>
    </router-link>
  </article>
</template>

<script>
export default {
  name: 'Reading',

  props: ['infos'],
};
</script>

<style scoped>
.reading {
  width: 6.7rem;
  margin: 0 auto 1.4rem;
}

.title {
  color: #000;
  font-size: 0.56rem;
  line-height: 1.3;
}

.content {
  max-height: 1.56rem;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 0.32rem;
  line-height: 0.52rem;
  color: #000;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  -webkit-line-clamp: 3;
}

.more {
  color: #059;
  line-height: 0.64rem;
  font-size: 0.32rem;
}
</style>
