import "./assets/main.css";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
//import "vuetify/styles";
import "@dpc-sdp/ripple-ui-core/style";
import "@dpc-sdp/ripple-ui-core/style/components";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const vuetify = createVuetify({
  components,
  directives,
});

const app = createApp(App);
app.use(router).use(vuetify);

app.mount("#app");
