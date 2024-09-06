import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../Views/HomeView.vue";
import UserView from "../Views/UserView.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/user",
      name: "user",
      component: UserView,
    },
  ],
});
export default router;
