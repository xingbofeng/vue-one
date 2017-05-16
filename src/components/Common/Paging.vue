<template>
  <div class="paging">
    <router-link
      :to="paging.before"
    >
      上一篇
    </router-link>
    <router-link
      :to="paging.after"
    >
      下一篇
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Paging',

  props: ['paging'],
};
</script>

<style scoped>
</style>
