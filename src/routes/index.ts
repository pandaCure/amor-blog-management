import { createRouter, createWebHistory } from "vue-router";
import Login from "../pages/Login";
const routes = [{ path: "/login", component: Login }];
const router = createRouter({
  history: createWebHistory(),
  routes, // `routes: routes` 的缩写
});
export default router;
