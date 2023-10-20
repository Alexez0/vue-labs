import MainPage from "../pages/MainPage.vue";
import {createRouter, createWebHistory} from "vue-router";
import LoginPage from "../pages/LoginPage.vue";


const routes = [
    {
        path: '/',
        component: LoginPage
    },
    {
        path: '/users',
        component: MainPage
    }
]


const router = createRouter({
    routes,
    history: createWebHistory(),
})

export default router