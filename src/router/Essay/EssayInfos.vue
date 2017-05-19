<template>
  <div class="essayInfos">
    <top-header />
    <page-end />
    <paging
      :paging="{
        before: `/essay/${parseInt($route.params.essayId, 10) + 1}`,
        after: `/essay/${parseInt($route.params.essayId, 10) - 1}`,
      }"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import TopHeader from './../../components/Common/TopHeader';
import PageEnd from '../../components/Common/PageEnd';
import Paging from '../../components/Common/Paging';

export default {
  name: 'EssayInfos',

  components: {
    TopHeader,
    PageEnd,
    Paging,
  },

  computed: {
    ...mapGetters(['essayInfos']),
  },
};
</script>

<style scoped>
.essayInfos {
  padding-top: 0.74rem;
  padding-bottom: 0.96rem;
}
</style>
