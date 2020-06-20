<template>
  <section class="wrap ovh">
    <section class="ssPart1 pb clearfix">
      <div class="tit textC"><span class="bold">学习地图</span></div>
      <div class="link textC clearfix">
        <a @click="go('初心')"><img src="images/index-btn-初心.png"/></a>
        <a @click="go('奔腾')"><img src="images/index-btn-奔腾.png"/></a>
        <a @click="go('振兴')"><img src="images/index-btn-振兴.png"/></a>
        <a @click="go('筑梦')"><img src="images/index-btn-筑梦.png"/></a>
      </div>
    </section>
    <section class="ssBot"></section>
  </section>
</template>

<script>
export default {
  title: "学习地图 | “四史”学习教育",
  methods: {
    go(name) {
      this.$router.push("/xuexiditu/" + name);
    }
  }
};
</script>