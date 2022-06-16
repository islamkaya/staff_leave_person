import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        name: "Login",
        component: () => import('../ui/views/LoginForm.vue')

    },
    {
        path: "/dashboard",
        name: "dashboard",
        component: () => import('../ui/views/MyDashboard.vue')
    }
    ,{
        path: "/leaverequests",
        name: "leaveRequests",
        component: () => import('../ui/components/leaveRequests')
    }
];

const router = createRouter({
    routes,

    history: createWebHistory()
})

export default router;