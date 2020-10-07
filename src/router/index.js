// create是vue3的新特性
import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../components/Home.vue";
import activeRoute from "../components/activeRoute.vue";
const routes = [
  {
    path: "/home",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../components/About.vue")
  },
  {
    path: "/activeRoute/:id",
    name: "activeRoute",
    component: activeRoute
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
