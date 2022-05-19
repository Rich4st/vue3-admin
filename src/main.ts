import { createApp } from 'vue';
import App from './App.vue';
import { createPinia } from 'pinia'; // pinia
import router from './router';
// 引入全局样式
import './styles/index.scss';
import 'animate.css';
// 引入 i18n
import i18n from './i18n/index';

const app = createApp(App);

app.use(i18n).use(router).use(createPinia()).mount('#app');