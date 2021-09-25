require("./bootstrap");

import "vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css";

import App from "./App.vue";
import VueRouter from "vue-router";
import VueAxios from "vue-axios";
import axios from "axios";
import { routes } from "./routes";
import PerfectScrollbar from "vue2-perfect-scrollbar";

window.Vue = require("vue");
window.$ = window.jQuery = require("jquery");

Vue.use(VueRouter);
Vue.use(VueAxios, axios);
Vue.use(PerfectScrollbar);

const router = new VueRouter({
    mode: "history",
    routes: routes
});

const app = new Vue({
    el: "#app",
    router: router,
    render: h => h(App)
});
