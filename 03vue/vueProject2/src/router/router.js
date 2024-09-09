import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../Views/HomeView.vue";
import UserView from "../Views/UserView.vue";
import CafeMapView from "../Views/CafeMapView.vue";

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
    {
      path: "/cafeMap",
      name: "cafeMap",
      component: CafeMapView,
    },
  ],
});
export default router;
