import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/markdown.css';

import MyKit from '../packages';
// import Preview from './components/Preview.vue';

createApp(App).use(MyKit).use(router).mount('#app')
