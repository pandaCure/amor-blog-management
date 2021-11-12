import { createApp } from "vue";
import router from "./routes";
import App from "./App.vue";
import store from "./store";
const app = createApp(App);
app.use(router).use(store).mount("#app");
