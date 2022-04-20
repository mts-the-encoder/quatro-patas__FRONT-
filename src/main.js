import { createApp } from 'vue'
import App from './App.vue'
import store from './store/index.js';
import router from './router';

const appInstance = createApp(App)
    .use(router);

appInstance.use(store);
appInstance.mount('#app');
