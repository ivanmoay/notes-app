import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import Home from "./Home.vue";
//import { router } from './routes/index';

// const app = createApp(Home)
// app.use(router)
// app.mount('#app')

const routes = [
    {
        path: '/',
        name: 'notes.index',
        component: Home
    },
]

const router = createRouter(
    {
        history: createWebHistory(),
        routes
    }
)

const app = createApp(Home)
app.use(router)
app.mount('#app')