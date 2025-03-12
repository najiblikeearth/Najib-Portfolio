<template>
    <section class="my-3 items-center justify-center">
        <Title class="sm:mt-10 mt-24" title="Portfolio" />
        <div class="grid md:grid-cols-3 sm:grid-cols-span-1 gap-2">
            <div
                class="card bg-base-100 shadow-2xl sm:my-3"
                v-for="porto in projects"
            >
                <figure>
                    <img
                        class="mt-5 rounded"
                        :src="porto.img"
                        :alt="porto.name"
                        width="325"
                    />
                </figure>
                <div class="card-body">
                    <h2 class="card-title">{{ porto.name }}</h2>
                    <p>{{ porto.content }}</p>
                    <div class="card-actions justify-end">
                        <a
                            :href="porto.linkDeploy"
                            class="btn bg-base-300 hover:bg-teal-700 hover:text-white mt-4 sm:mt-0"
                        >
                            Deploy
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import Title from "./Title.vue";
import porto1 from "@/assets/img/port-lib.png";
import porto2 from "@/assets/img/port-task.jpg";
import porto3 from "@/assets/img/port-elec.png";

const projects = [
    {
        id: 1,
        img: porto1,
        name: "E-Libblion",
        content:
            "Aplikasi perpustakaan digital dengan fitur peminjaman, pengembalian, dan pencarian buku. Dibangun dengan CodeIgniter.",
        linkDeploy: "https://libblion-fe.vercel.app/",
    },
    {
        id: 2,
        img: porto2,
        name: "Task Management",
        content:
            "Aplikasi pengelolaan tugas dengan fitur prioritas dan pengingat deadline. Dibangun dengan CodeIgniter.",
        linkDeploy: "https://fullstack-task-management.vercel.app/",
    },
    {
        id: 3,
        img: porto3,
        name: "Electronix",
        content:
            "E-commerce produk elektronik dengan fitur perbandingan dan ulasan. Dibangun dengan VueJS dan Laravel.",
        linkDeploy: "https://final-ecommerce-u64w.vercel.app/",
    },
];
</script>
