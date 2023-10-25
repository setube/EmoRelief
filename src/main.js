import App from './App.vue';
import Varlet from '@varlet/ui';
import { createApp } from 'vue';
import router from './router';
import '@varlet/ui/es/style';
import '@varlet/touch-emulator';

const app = createApp(App);
app.use(router);
app.use(Varlet);
app.mount('#app');