import Dashboard from "./components/Dashboard.vue";

import VueRouter from "vue-router";
const routes = [
    {
        path: "/",
        component: Dashboard,
    },
];
const router = new VueRouter({
    mode: "history",
    routes,
});

export default router;
