<template>
  <div class="one">
    <top-header />
    <main>
      <one-item
        v-for="item in one"
        :one="item"
        :key="item.id"
      />
    </main>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import TopHeader from './../../components/Common/TopHeader';
import OneItem from './../../components/One/OneItem';

export default {
  name: 'One',

  components: {
    TopHeader,
    OneItem,
  },

  computed: {
    ...mapGetters(['one']),
  },
};
</script>

<style scoped>
.one {
  padding-top: 0.74rem;
  background-color: #f6f6f6;
}
</style>
