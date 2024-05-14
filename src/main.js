import { createApp } from 'vue';
import '../src/assets/scss/main.scss';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import App from './App.vue';
import { createPinia } from 'pinia';

const app = createApp(App);


app.use(createPinia());


app.mount('#app');


for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}