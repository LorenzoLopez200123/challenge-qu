import { createRouter, createWebHistory } from "vue-router";
const Home = require("./pages/Home.vue").default;
const NotFound = require("./pages/NotFound.vue").default;

const routes = [
  {
    path: "/:pathMatch(.*)*",
    redirect: "/404",
  },
  {
    path: "/",
    component: Home,
  },
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/404",
    component: NotFound,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
