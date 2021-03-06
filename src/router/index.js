import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/lianxue",
    name: "长三角联学",
    component: () => import("../views/LianXue.vue"),
  },
  {
    path: "/lianxue/:city",
    name: "联学城市",
    component: () => import("../views/LianXueCity.vue"),
  },
  {
    path: "/sishi/:category",
    name: "四史",
    component: () => import("../views/SiShiList.vue"),
  },
  {
    path: "/xuexiditu",
    name: "学习地图",
    component: () => import("../views/XueXiDiTu.vue"),
  },
  {
    path: "/xuexiditu/:name",
    name: "学习列表",
    component: () => import("../views/XueXiList.vue"),
  },
  {
    path: "/post/:id",
    name: "文章详情",
    component: () => import("../views/PostDetail.vue"),
  },
  {
    path: "/video-album/:id",
    name: "课件列表-专辑",
    component: () => import("../views/VideoAlbumList.vue"),
  },
  {
    path: "/video-post/:id",
    name: "课件列表-图文",
    component: () => import("../views/VideoPostList.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
