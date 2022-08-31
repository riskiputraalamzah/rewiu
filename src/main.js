import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import mixin from "./mixin";
import "./assets/style.css";

const app = createApp(App);

app.use(router);
app.mixin(mixin);
app.mount("#app");
