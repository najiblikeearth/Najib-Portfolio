<template>
    <transition
        enter-active-class="transition-opacity duration-500"
        enter-from-class="opacity-0 translate-y-10"
        enter-to-class="opacity-100 translate-y-0"
    >
        <div class="lg:flex lg:items-center lg:justify-between">
            <!-- Left Content -->
            <div
                class="lg:w-1/2 text-center lg:text-left mt-4 lg:mt-0"
                key="home-left"
            >
                <p class="text-sm sm:text-base">Hi I am</p>
                <h1 class="text-sm sm:text-lg font-bold text-teal-700">
                    M. Khusyasy Najib Dzaluli
                </h1>
                <h2
                    class="text-3xl sm:text-6xl font-bold mt-2 text-teal-700 font-titillium"
                >
                    Web Developer
                </h2>
                <p class="mt-4 text-sm sm:text-base">
                    A Fullstack Web Developer is also a Graphic Designer
                </p>
                <div class="my-3">
                    <a href="https://www.linkedin.com/in/najibdz/" target="0">
                        <v-icon
                            name="fa-linkedin"
                            scale="2"
                            fill="#0f766e"
                        ></v-icon>
                    </a>
                    <a href="https://instagram.com/m.k.najib.d" target="0">
                        <v-icon
                            name="fa-instagram-square"
                            scale="2"
                            fill="#0f766e"
                        ></v-icon>
                    </a>
                    <a href="https://wa.me/6285759613143" target="0">
                        <v-icon
                            name="fa-whatsapp-square"
                            scale="2"
                            fill="#0f766e"
                        ></v-icon>
                    </a>
                </div>
                <div>
                    <a
                        href="https://mail.google.com/mail/u/0/?view=cm&tf=1&fs=1&to=najib.likeearth@gmail.com"
                        class="btn btn-outline border-teal-700 text-teal-700 hover:bg-teal-700 hover:text-white mt-3"
                    >
                        Hire Me
                    </a>
                </div>
            </div>

            <!-- Right Content -->
            <div
                class="lg:w-1/2 flex justify-center lg:mx-36 lg:justify-end mt-6 lg:mt-0"
                key="home-right"
            >
                <img
                    :src="profile"
                    alt="Profile"
                    class="rounded-full shadow-lg w-60 sm:w-72 lg:w-96"
                />
            </div>
        </div>
    </transition>
</template>

<script setup>
import profile from "@/assets/img/njb.png";
</script>

<style>
/* Optional custom styles for additional transitions */
</style>
