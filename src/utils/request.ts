import axios from "axios";
import router from "../routes";

const env = process.env.NODE_ENV;
console.log(env);
const requestAjax = axios.create({
  baseURL:
    env === "development"
      ? "http://localhost:8980"
      : "https://server.zzyamor.com",
  timeout: 1000,
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
});
requestAjax.interceptors.request.use(
  function (config) {
    const token = window.localStorage.getItem("token");
    config.headers = {
      Authorization: `Bearer ${token}`,
    };
    return config;
  },
  function (error) {
    console.log(error);
    return Promise.reject(error);
  }
);

requestAjax.interceptors.response.use(
  function (response) {
    console.log(response);
    return response;
  },
  function (error) {
    if (error.response.status === 401) {
      router.push("/login");
      return;
    }
    return Promise.reject(error);
  }
);
export default requestAjax;
