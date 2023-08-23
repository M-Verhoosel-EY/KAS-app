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
import { createVfm } from "vue-final-modal";
import 'vue-final-modal/style.css'


const vuetify = createVuetify({
  components,
  directives,
});

const vfm = createVfm();

const app = createApp(App);
app.use(router).use(vuetify).use(vfm);

app.mount("#app");
