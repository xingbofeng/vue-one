<template>
  <footer>
    <router-link to="/">
      <div class="one-footer">
        <img
          src="../../assets/logo.png"
          alt="一个logo"
        />
        <div class="info-content">
          <strong>一个</strong>
          <div>每日阅读</div>
        </div>
      </div>
    </router-link>
    <a class="goGitHub" href="https://github.com/xingbofeng/vue-one">
      去GitHub查看本项目源码
    </a>
  </footer>
</template>

<script>
export default {
  name: 'PageEnd',
};
</script>

<style scoped>
footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.6rem 0 0.6rem 0;
  background: #fff;
}
.one-footer {
  display: flex;
  align-items: center;
}
.goGitHub {
  color: #000;
  text-align: center;
  font-size: 0.3rem;
  margin-top: 0.3rem;
  font-weight: bold;
  display: block;
}
.info-content strong {
  font-size: 0.48rem;
  font-weight: normal;
  line-height: 0.56rem;
}
.info-content {
  display: inline-block;
  white-space: pre;
  font-size: 0.28rem;
  line-height: 0.4rem;
  color: #111;
}
img {
  width: 0.96rem;
  height: 0.96rem;
  margin-right: 0.24rem;
}
</style>
