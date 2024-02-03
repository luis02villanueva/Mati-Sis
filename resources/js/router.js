import Dashboard from "./components/Dashboard.vue";
import Categorias from "./components/Categorias/Index.vue";
import Usuarios from "./components/Usuarios/Index.vue";
import VueRouter from "vue-router";
const routes = [
    {
        path: "/",
        component: Dashboard,
    },

    {
        path: "/categorias",
        name: "categoria",
        component: Categorias,
    },
    {
        path: "/usuarios",
        name: "usuarios",
        component: Usuarios,
    },
];
const router = new VueRouter({
    mode: "history",
    routes,
});

export default router;
