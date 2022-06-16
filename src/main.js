import { createApp } from "vue";
import App from "./App.vue";
import store from "./app/store/store";
import router from "@/router/index";
import "@/ui/assets/css/extra.css";
import "@/config/axios.js"



const app = createApp(App);
app.use(router);
app.use(store);
app.mount("#app");
