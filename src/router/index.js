import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/search",
    name: "Search",
    component: () => import("../views/Search.vue"),
  },
  {
    path: "/add-channel",
    name: "AddChannel",
    component: () => import("../views/AddChannel.vue"),
  },
  {
    path: "/movies/:id",
    name: "MovieDetails",
    component: () => import("../views/movie/MovieDetails.vue"),
    props: true,
  },

  //Not Found
  {
    path: "/:catchAll(.*)",
    name: "NotExist",
    component: () => import("../views/HelperViews/NotExist.vue"),
  },

  //forward
  {
    path: "/movies",
    redirect: "/",
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
