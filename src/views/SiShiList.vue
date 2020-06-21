<template>
  <section class="wrap ovh">
    <section class="ssPart1 pb clearfix">
      <div class="tit textC">
        <span class="bold">{{ category }}</span>
      </div>
      <div class="ssList bold clearfix">
        <a @click="goDetail(post)" v-for="post in posts" :key="post.id"
          ><i></i><em class="ovh">{{ post.title }}</em></a
        >
      </div>
    </section>
    <section class="ssBot"></section>
  </section>
</template>

<script>
import { getPosts } from "@/helpers/resource";

export default {
  data() {
    return {
      category: null,
      posts: [],
    };
  },
  methods: {
    goDetail(post) {
      if (post.videoListLayout === "album_items") {
        this.$router.push("/video-album/" + post.id);
      } else if (post.videoListLayout === "post_items") {
        this.$router.push("/video-post/" + post.id);
      } else {
        this.$router.push("/post/" + post.id);
      }
    },
  },
  async mounted() {
    this.category = this.$route.params.category;
    this.posts = await getPosts({
      category: this.category,
      limit: -1,
    });
  },
};
</script>
