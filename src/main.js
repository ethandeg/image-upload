import { createApp } from 'vue'
import App from './App.vue'
import {createRouter, createWebHistory} from 'vue-router'
import {store} from "./store/index";
import AuthHandler from "./components/AuthHandler"

const app = createApp(App);
app.use(store);
const routes = [
    {path: '/oauth2/callback', component: AuthHandler}
]
const router = createRouter({
    mode: 'history',
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

app.use(router)
app.mount('#app');
