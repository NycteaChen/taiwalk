import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./index.css";
import "./assets/tailwind.css";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";

createApp(App).use(router).use(Antd).mount("#app");
