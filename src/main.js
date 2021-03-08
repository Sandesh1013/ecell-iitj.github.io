import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbvue/lib/css/mdb.min.css";
Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount("#app");
