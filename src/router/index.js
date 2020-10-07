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
    path: "/my",
    name: "My",
    components: {
      base: () => import("../components/My.vue")
    }
  },
  {
    path: "/activeRoute/:id",
    name: "activeRoute",
    component: activeRoute
  },
  {
    path: "/login",
    component: () => import("../components/login.vue"),
    beforeEnter: (to, from, next)=>{
      console.log("2.----beforeEnter-----");
      console.log(to, from);
      next();
    }
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  console.log("1.----beforeEach-----");
  console.log(to, from);
  if (to.params.id === ":aaa") {
    next("/login");
  } else {
    next();
  }
});

router.afterEach((to, from) => {
  console.log("3.----afterEach-----");
  console.log(to, from);
});
export default router;
