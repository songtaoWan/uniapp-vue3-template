import { createSSRApp } from "vue";
import * as Pinia from 'pinia'
import App from "./App.vue";
import uviewPlus from "uview-plus";

export function createApp() {
  const app = createSSRApp(App);
  app.use(Pinia.createPinia());
  app.use(uviewPlus);
  return {
    app,
    Pinia
  };
}
