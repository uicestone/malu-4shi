<template>
  <section class="wrap ovh">
    <section class="ssPart5 clearfix">
      <div class="tit clearfix">
        <p>{{ post.title }}</p>
      </div>
      <div
        class="part2 clearfix"
        v-for="(video, index) in post.videos"
        :key="video.id"
      >
        <div class="t1 clearfix">
          <em class="fl">{{ (index + 1).toString().padStart(2, "0") }}</em
          ><span class="fr bold">{{ video.title }}</span>
        </div>
        <div class="t2 clearfix">
          <div class="img fl"><img :src="video.posterUrl" /></div>
          <a :href="video.link" target="_blank" class="fr"
            ><em>前往学习 >></em></a
          >
        </div>
        <div class="t3 clearfix">
          <div class="txt bold">
            {{ video.excerpt }}
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
import { getPostDetail } from "@/helpers/resource";

export default {
  data() {
    return { id: null, post: {} };
  },
  async mounted() {
    this.id = this.$route.params.id;
    this.post = await getPostDetail(this.id);
  },
};
</script>
