// @ts-nocheck
import { createRouter, createWebHistory } from "vue-router";
import Home from "@/pages/HomeView.vue";
import NotFound from "@/pages/404.vue";

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
