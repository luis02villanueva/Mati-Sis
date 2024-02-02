require("./bootstrap");

import Vue from "vue";
import App from "./components/App.vue";

import VueRouter from "vue-router";

Vue.use(VueRouter);
import router from "./router";
const app = new Vue({
    el: "#app",
    mode: "history",
    router,
    render: (h) => h(App),
});
