// create是vue3的新特性
import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../components/Home.vue";
import activeRoute from "../components/activeRoute.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    components: {
      base: Home //组建与路由视图多对多的关系
    }
  },
  {
    path: "/Home",
    redirect: "/"
  },
  {
    path: "/about",
    name: "About",
    components: {
      base: () => import("../components/About.vue")
    }
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
