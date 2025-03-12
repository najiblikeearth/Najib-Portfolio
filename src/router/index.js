import { createWebHistory, createRouter } from "vue-router";

import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import ExperienceView from "@/views/ExperienceView.vue";
import PortfolioView from "@/views/PortfolioView.vue";

const routes = [
    { path: "/", component: HomeView, name: "Home" },
    { path: "/about", component: AboutView, name: "About" },
    { path: "/experience.work", component: ExperienceView, name: "Experience" },
    { path: "/portfolio", component: PortfolioView, name: "Portfolio" },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
