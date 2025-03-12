<template>
    <div
        class="min-h-screen bg-gradient-to-r from-teal-700 to-green-400 flex justify-center items-center font-montserrat"
    >
        <div
            class="bg-white min-h-[90vh] rounded-lg shadow-lg p-6 sm:p-8 w-full max-w-6xl relative"
        >
            <!-- Header -->
            <Header />

            <!-- Main Section -->
            <main class="flex flex-col-reverse lg:flex-row items-center mb-20">
                <transition
                    enter-active-class="transition duration-500 transform ease-out"
                    enter-from-class="opacity-0 translate-x-[-20px]"
                    enter-to-class="opacity-100 translate-x-0"
                    leave-active-class="transition duration-500 transform ease-in"
                    leave-from-class="opacity-100 translate-x-0"
                    leave-to-class="opacity-0 translate-x-[20px]"
                    mode="out-in"
                >
                    <RouterView />
                </transition>
            </main>

            <!-- Footer -->
            <Footer />
        </div>
    </div>
</template>

<script setup>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
</script>
