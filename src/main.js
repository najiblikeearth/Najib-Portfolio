import "./assets/main.css";

import { OhVueIcon, addIcons } from "oh-vue-icons";
import * as FaIcons from "oh-vue-icons/icons/fa";
import router from "./router";
import { createPinia } from "pinia";

const Fa = Object.values({ ...FaIcons });

import { createApp } from "vue";
import App from "./App.vue";
import { useThemeStore } from "./stores/ThemeStore";

const app = createApp(App);
const pinia = createPinia();

addIcons(...Fa);
app.component("v-icon", OhVueIcon);
app.use(router);
app.use(pinia);

app.mount("#app");

// Apply saved theme or default to light
const themeStore = useThemeStore();
const savedTheme = localStorage.getItem("theme") || "light";
themeStore.setTheme(savedTheme);

// Add class to body for additional theme styling
if (savedTheme === "dark") {
    document.body.classList.add("dark");
} else {
    document.body.classList.remove("dark");
}
