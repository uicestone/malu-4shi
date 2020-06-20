
<template>
  <section class="wrap ovh">
    <section class="ssPart2 clearfix">
      <div class="top"><img src="images/header-home.png" /></div>
      <div class="bg">
        <img src="images/map-index.png" />
        <div class="btn bold clearfix">
          <a @click="goCity('芜湖')" class="icon1"
            ><span class="btn-text">安徽芜湖</span></a
          >
          <a @click="goCity('宜兴')" class="icon2"
            ><span class="btn-text">江苏宜兴</span></a
          >
          <a @click="goCity('常州')" class="icon3"
            ><span class="btn-text">江苏常州</span></a
          >
          <a @click="goCity('无锡')" class="icon4"
            ><span class="btn-text">江苏无锡</span></a
          >
          <a @click="goCity('昆山')" class="icon5"
            ><span class="btn-text">江苏昆山</span></a
          >
          <a @click="goCity('嘉兴')" class="icon6"
            ><span class="btn-text">浙江嘉兴</span></a
          >
          <a @click="goCity('宁波')" class="icon7"
            ><span class="btn-text">浙江宁波</span></a
          >
        </div>
      </div>
    </section>
    <section class="ssBot"></section>
  </section>
</template>

<script>
export default {
  methods: {
    goCity(city) {
      this.$router.push("/lianxue/" + city);
    }
  }
};
</script>