import { createRouter, createWebHashHistory } from "vue-router";
const routes = [
    {
        path: '/',
        component: () => import("@/views/home/home") 
    },
    {
        path: '/me',
        component: () => import("@/views/me/me") 
    }
]
export default createRouter({
    history: createWebHashHistory(),
    routes,
})