import './assets/scss/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import AppPage from './components/AppPage.vue'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.component('app-page', AppPage);

app.mount('#app')
