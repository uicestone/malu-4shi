<template>
  <section class="wrap ovh">
    <section class="ssPart4 clearfix">
      <div class="tit">
        <img :src="`/images/header-town-${name}.png`" />
      </div>
      <div class="img">
        <img :src="term.image" />
      </div>
      <div class="ssList bold clearfix">
        <a @click="goDetail(post)" v-for="post in posts" :key="post.id"
          ><i></i><em class="textH">{{ post.title }}</em></a
        >
      </div>
    </section>
  </section>
</template>

<script>
import { getPosts } from "@/helpers/resource";
import { getTerm } from "@/helpers/resource";

export default {
  data() {
    return { name: null, posts: [], term: {} };
  },
  methods: {
    goDetail(post) {
      this.$router.push("/post/" + post.id);
    },
  },
  async mounted() {
    this.name = this.$route.params.name;
    this.posts = await getPosts({ category: this.name });
    this.term = await getTerm(this.name);
  },
};
</script>
