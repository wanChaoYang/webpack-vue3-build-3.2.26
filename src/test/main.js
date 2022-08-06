import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
// import 'amfe-flexible/index';
// import 'lib-flexible';
const app = createApp(App);
app.use(store).use(router)
app.mount("#app")