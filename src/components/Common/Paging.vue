<template>
  <div class="paging">
    <router-link
      :to="paging.before"
    >
      上一篇
    </router-link>
    <router-link
      to="/"
    >
      <Icon
        type="forward"
        size="25"
      ></Icon>
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
.paging {
  position: fixed;
  height: 0.96rem;
  background: rgba(255, 255, 255, 0.9);
  bottom: 0;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  font-size: 0.32rem;
}

a {
  color: #aeaeae;
  display: block;
  padding: 0 0.4rem;
}


</style>
