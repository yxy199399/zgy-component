import Vue from "vue";
import "./plugins/axios";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import "./styles.scss";

Vue.use(ElementUI);
import { LoginOut } from "../packages";
Vue.use(LoginOut);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
