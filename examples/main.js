import Vue from "vue";
import "./plugins/axios";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

// import { LoginOut, ElTest } from "../packages";
// Vue.use(LoginOut);
// Vue.use(ElTest);
import zgyComponent from "../packages";
Vue.use(zgyComponent);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
