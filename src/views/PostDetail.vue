<template lang="pug">
  div
    header {{ post.categories[0].cat_name }}
    .post-entry
      .title {{ post.title }}
      .poster
        img(:src="post.poster")
      .content(v-html="post.content")
</template>

<script>
import { getPostDetail } from "@/helpers/resource";

export default {
  data() {
    return { id: null, post: { categories: [{}] } };
  },
  async mounted() {
    this.id = this.$route.params.id;
    this.post = await getPostDetail(this.id);
  },
};
</script>

<style lang="scss" scoped>
header {
  background: #d42d26;
  padding: 10px;
  text-align: center;
  color: white;
  font-size: 28px;
  font-weight: bold;
  border-bottom: solid 8px #5d4d41;
}
.post-entry {
  padding: 30px;
  .title {
    color: white;
    background: #c69842;
    padding: 5px 20px;
    text-align: center;
  }
  .content {
    /deep/ img {
      width: 100%;
      height: auto;
      margin: 10px auto;
    }
    /deep/ p,
    /deep/ li {
      text-align: justify !important;
    }
    /deep/ p {
      margin-bottom: 0.5em;
    }
  }
}
</style>
