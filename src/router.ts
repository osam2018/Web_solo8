import Vue from "vue";
import Router from "vue-router";

import Configuration from "./views/Configuration.vue";
import Main from "./views/Main.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "main-redirect",
      component: Main,
    },
    {
      path: "/main",
      name: "main",
      component: Main,
    }, {
          path: "/config",
          name: "config",
          component: Configuration,
      },

  ],
});
