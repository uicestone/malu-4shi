<template>
  <section class="wrap ovh">
    <section class="ssPart5 clearfix">
      <div class="tit clearfix">
        <p>{{ post.title }}</p>
      </div>
      <div
        class="part1 textC bold clearfix"
        v-for="album in albums"
        :key="album.id"
      >
        <div class="bd">
          <h3>{{ album.title }}</h3>
          <div v-html="album.content"></div>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
import { getPostDetail } from "@/helpers/resource";

export default {
  data() {
    return { id: null, post: {}, albums: [] };
  },
  async mounted() {
    this.id = this.$route.params.id;
    this.post = await getPostDetail(this.id);
    this.albums = this.post.videos;
  },
};
</script>
