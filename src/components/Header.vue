<template>
    <header class="flex items-center justify-between mb-6 text-base-content">
        <div class="navbar-start flex items-center">
            <div class="dropdown">
                <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M4 6h16M4 12h8m-8 6h16"
                        />
                    </svg>
                </div>
                <ul
                    tabindex="0"
                    class="menu menu-sm dropdown-content mt-3 w-52 bg-base-100 rounded-box shadow-lg absolute z-10"
                >
                    <li v-for="navlg in linkNav" :key="navlg.id">
                        <RouterLink
                            :to="{ name: navlg.urlName }"
                            class="hover:bg-primary hover:text-white rounded px-2 py-1"
                        >
                            {{ navlg.name }}
                        </RouterLink>
                    </li>
                </ul>
            </div>

            <RouterLink to="/" class="btn btn-ghost text-xl ml-2">
                JustNajib
            </RouterLink>
        </div>

        <div class="navbar-center hidden lg:flex">
            <ul class="menu menu-horizontal px-1">
                <li v-for="navlg in linkNav" :key="navlg.id">
                    <RouterLink
                        :to="{ name: navlg.urlName }"
                        class="hover:bg-primary hover:text-white rounded px-2 py-1"
                    >
                        {{ navlg.name }}
                    </RouterLink>
                </li>
            </ul>
        </div>

        <div class="navbar-end text-right flex items-center gap-2">
            <!-- Theme Toggle Button -->
            <button
                @click="toggleTheme"
                class="btn btn-circle btn-ghost"
                aria-label="Toggle theme"
            >
                <v-icon
                    v-if="themeStore.theme === 'light'"
                    name="fa-moon"
                    class="text-xl"
                />
                <v-icon v-else name="fa-sun" class="text-xl text-yellow-400" />
            </button>

            <a
                :href="'/CV_M_Khusyasy_Najib_D.pdf'"
                download
                class="btn btn-md bg-primary text-white hover:bg-secondary"
            >
                Download CV
            </a>
        </div>
    </header>
</template>

<script setup>
import { useThemeStore } from "../stores/ThemeStore";

const themeStore = useThemeStore();

const linkNav = [
    { id: 1, name: "About", urlName: "About" },
    { id: 2, name: "Portfolio", urlName: "Portfolio" },
    { id: 3, name: "Experience", urlName: "Experience" },
];

function toggleTheme() {
    const newTheme = themeStore.theme === "light" ? "dark" : "light";
    themeStore.setTheme(newTheme);
}
</script>
