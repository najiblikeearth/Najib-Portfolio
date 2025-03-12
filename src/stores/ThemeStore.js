import { ref } from "vue";
import { useStorage } from "@vueuse/core";
import { defineStore } from "pinia";

export const useThemeStore = defineStore("theme", () => {
    const theme = ref(useStorage("theme", "light"));

    function setTheme(newTheme) {
        theme.value = newTheme;
        document.documentElement.setAttribute("data-theme", newTheme);

        // Update body class for additional styling
        if (newTheme === "dark") {
            document.body.classList.add("dark");
        } else {
            document.body.classList.remove("dark");
        }
    }

    return { theme, setTheme };
});
