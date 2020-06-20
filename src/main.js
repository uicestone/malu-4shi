import Vue from "vue";
import App from "./App.vue";
import router from "./router";

var deviceWidth = window.screen.width;
if (deviceWidth > 750) {
  document.getElementsByTagName("html")[0].style.fontSize = "100px";
} else {
  document.getElementsByTagName("html")[0].style.fontSize =
    (deviceWidth / 750) * 100 + "px";
}

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
