<template>
  <section class="wrap ovh">
    <section class="ssPart3 clearfix">
      <div class="tit">
        <span class="bold">{{ city }}</span>
      </div>
      <div class="ssList bold clearfix">
        <a @click="goDetail(post)" v-for="post in posts" :key="post.id"
          ><i></i><em class="ovh">{{ post.title }}</em></a
        >
      </div>
    </section>
  </section>
</template>

<script>
import { getPosts } from "@/helpers/resource";

export default {
  data() {
    return { city: null, posts: [] };
  },
  methods: {
    goDetail(post) {
      this.$router.push("/post/" + post.id);
    },
  },
  async mounted() {
    this.city = this.$route.params.city;
    this.posts = await getPosts({ category: this.city });
  },
};
</script>
