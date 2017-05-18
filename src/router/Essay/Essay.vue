<template>
  <div class="essay">
    <top-header />
    <main>
      <essay-item
        v-for="item in essay"
        :key="item.content_id"
        :essay="item"
      />
    </main>
    <page-end />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import TopHeader from './../../components/Common/TopHeader';
import PageEnd from '../../components/Common/PageEnd';
import EssayItem from '../../components/Essay/EssayItem';

export default {
  name: 'Essay',

  components: {
    TopHeader,
    PageEnd,
    EssayItem,
  },

  computed: {
    ...mapGetters(['essay']),
  },
};
</script>

<style scoped>
.essay {
  padding-top: 0.74rem;
  background-color: #f6f6f6;
}
</style>
