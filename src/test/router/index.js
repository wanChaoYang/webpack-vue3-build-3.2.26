import { createRouter, createWebHashHistory } from "vue-router";
const routes = [
    {
        path: '/',
        component: () => import("@/test/views/home/home") 
    },
    {
        path: '/me',
        component: () => import("@/test/views/me/me") 
    }
]
export default createRouter({
    history: createWebHashHistory(),
    routes,
})