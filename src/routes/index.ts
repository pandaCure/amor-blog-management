import { createRouter, createWebHistory } from "vue-router";
import Login from "../pages/login";
import Home from "../pages/home";
const routes = [
  { path: "/login", component: Login },
  { path: "/", component: Home },
];
const router = createRouter({
  history: createWebHistory(),
  routes, // `routes: routes` 的缩写
});
export default router;
