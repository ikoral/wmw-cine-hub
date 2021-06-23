import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";

import "./style.css";

import "@fortawesome/fontawesome-free/js/all";

export const $http = axios;

createApp(App).use(router).mount("#app");
