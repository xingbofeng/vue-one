<template>
  <header>
    <div class="title">
      <div @click="changeAside(true)">
        <Icon type="navicon-round" size="25"></Icon>
      </div>
      <h1>一个</h1>
      <div>
        <Icon type="search" size="25"></Icon>
      </div>
    </div>
    <aside :class="{ active: isActive, hidden: !isActive }">
      <div @click="changeAside(false)">
        <Icon type="chevron-left" size="25"></Icon>   
      </div>
      <router-link to="/one"><h2>图文</h2></router-link>
      <router-link to="/article"><h2>阅读</h2></router-link>
      <router-link to="/music"><h2>音乐</h2></router-link>
      <router-link to="/movie"><h2>影视</h2></router-link>
      <a href="https://github.com/xingbofeng/vue-one"><h2>GitHub</h2></a>
      <router-link to="/about"><h2>关于</h2></router-link>
    </aside>
  </header>
</template>

<script>
export default {
  name: 'TopHeader',

  data() {
    return {
      isActive: false,
    };
  },

  methods: {
    changeAside(flag) {
      this.isActive = flag;
    },
  },
};
</script>

<style scoped>
@keyframes slideInFromLeft {
  0% {
    left: -3.76rem;
  }
  100% {
    left: 0;
  }
}

@keyframes slideOutToLeft {
  0% {
    left: 0;
  }
  100% {
    left: -3.76rem;
  }
}

header {
  padding: 0.1rem 0.2rem;
  color: #333;
  width: 100%;
}

.title {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

aside {
  position: absolute;
  padding-top: 0.12rem;
  width: 3.76rem;
  text-align: center;
  background-color: #fff;
  height: 100vh;
  top: 0;
  left: -3.76rem;
}

aside.active {
  animation: slideInFromLeft 0.35s ease-in-out;
  left: 0;
}

aside.hidden {
  animation: slideOutToLeft 0.35s ease-in-out;
  left: -3.76rem;
}

aside a {
  margin-top: 0.44rem;
  display: block;
  color: #333;
}

h1 {
  font-size: 0.28rem;
}

h2 {
  font-size: 0.32rem;
}
</style>
