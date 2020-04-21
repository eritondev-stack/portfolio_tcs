import Vue from "vue";
import Router from "vue-router";

//import LottieExemplo from "./pages/LottieExemplo";
import App from "./pages/App";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    { path: "/", component: App },
    { path: "/app", component: App },
    { path: "*", redirect: "/" },
  ],
});
