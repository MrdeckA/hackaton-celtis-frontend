import App from "./App.vue";

import { createApp } from "vue";
import "@mdi/font/css/materialdesignicons.css";
const PINIA_STORE_BASE_KEY = "__tontiis___";
import { createPersistedState } from "pinia-plugin-persistedstate";
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { createPinia } from "pinia";
import router from "./router";

const light = {
  dark: false,
  colors: {
    background: "#FFFFFF",
    surface: "#FFFFFF",
    "surface-bright": "#FFFFFF",
    "surface-light": "#EEEEEE",
    "surface-variant": "#424242",
    "on-surface-variant": "#EEEEEE",
    primary: "#1f3b71", // bleu nuit
    "primary-darken-1": "#1F5592",
    secondary: "#93c01f", // vert
    "secondary-darken-1": "#018786",
    error: "#B00020",
    info: "#2196F3",
    success: "#4CAF50",
    warning: "#FB8C00",
  },
};

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: "light",
    themes: {
      light,
    },
  },
});

const pinia = createPinia();
pinia.use(
  createPersistedState({
    key: (storeId) => `${PINIA_STORE_BASE_KEY}${storeId}`,
    auto: true,
  })
);

createApp(App).use(router).mount("#app");
