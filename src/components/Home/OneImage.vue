<template>
  <section
    class="title-img"
    v-lazy:background-image="content.img_url"
  >
    <div class="content">
      <p class="day">{{ day }}</p>
      <p class="month">
        {{ month }}
      </p>
      <p class="text-content-short">{{ content.forward }}</p>
      <div @click="chevronDown">
        <Icon type="chevron-down" size="23"></Icon>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'OneImage',

  props: ['content'],

  computed: {
    day() {
      return new Date(this.content.post_date).getDate();
    },

    month() {
      const dateArr = new Date(this.content.post_date).toString().split(' ');
      return `${this.content.volume} | ${dateArr[1]}. ${dateArr[3]}`;
    },
  },

  methods: {
    chevronDown() {
      const reading = document.querySelector('.reading');
      reading.scrollIntoView();
    },
  },
};
</script>

<style scoped>
.title-img {
  height: calc(100vh - 0.74rem);
  box-sizing: border-box;
  background-size: auto 100%;
  background-position: 50% 0;
  background-repeat: no-repeat;
}

.content {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
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

.content {
  background: linear-gradient(to top, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.8));
}

</style>
