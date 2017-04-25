<template>
  <div id="home">
    <top-header />
    <main>
      <section
        class="title-img"
        v-lazy:background-image="homeData.content_list[0].img_url"
      >
        <p class="day">{{ day }}</p>
        <p class="month">
          {{ `${homeData.content_list[0].volume} | ${month}` }}
        </p>
        <p class="text-content-short">{{ homeData.content_list[0].forward }}</p>
        <div>
          <Icon type="chevron-down" size="23"></Icon>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import TopHeader from '../../components/Common/TopHeader';

export default {
  name: 'Home',

  components: {
    TopHeader,
  },

  data() {
    return {
      msg: 'home',
    };
  },

  computed: {
    ...mapState({
      homeData(state) {
        return state.homeData;
      },
    }),

    day() {
      return new Date(this.homeData.date).getDate();
    },

    month() {
      const dateArr = new Date(this.homeData.date).toString().split(' ');
      return `${dateArr[1]}. ${dateArr[3]}`;
    },
  },
};
</script>

<style scoped>
#home {
  min-height: 100vh;
  position: relative;
  overflow-x: hidden;
}

.title-img {
  height: calc(100vh - 0.74rem);
  box-sizing: border-box;
  background-size: auto 100%;
  background-position: 50% 0;
  background-repeat: no-repeat;
}

section {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
}

section p {
  width: 6.66rem;
  margin: 0 auto;
  color: #fff;
}

p.day {
  font-size: 0.96rem;
}

p.month {
  font-size: 0.38rem;
  line-height: 0.64rem;
}

p.text-content-short {
  font-size: 0.32rem;
  line-height: 0.52rem;
}

section i {
  color: #fff;
  width: 0.46rem;
  padding-bottom: 0.12rem;
}
</style>
