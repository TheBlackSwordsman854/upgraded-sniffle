// import "./virtual:windi";

import "./virtual:windi-base";
import "./virtual:windi-components";
import "./virtual:windi-utilities";

import { createApp } from "vue";

import App from "@/App.vue";
import router from "@/router";

const app = createApp(App);

app.use(router);

app.mount("#app");
