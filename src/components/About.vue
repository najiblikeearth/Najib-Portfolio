<template>
    <section class="my-3 items-center justify-center pb-20">
        <Title class="sm:mt-10 mt-24" title="About Me" />
        <p>
            Seorang Fullstack Web Developer yang juga menggeluti dunia Graphic
            Design, saat ini masih menjalani pekerjaan sebagai Freelance,
            terkadang mengambil job Web Developer ataupun Graphic Designer
        </p>
        <article class="my-5">
            <div class="grid md:grid-cols-3 sm:grid-cols-1 gap-2">
                <div
                    class="card bg-base-100 shadow-2xl sm:my-3"
                    v-for="item in skills"
                    :key="item.id"
                >
                    <div class="flex items-center justify-center mt-5">
                        <v-icon :name="item.icon" scale="5"></v-icon>
                    </div>

                    <div class="card-body">
                        <h2 class="card-title">{{ item.title }}</h2>
                        <p>
                            {{ item.listSkill }}
                        </p>
                    </div>
                </div>
            </div>
        </article>
    </section>
</template>

<script setup>
import { ref } from "vue";
import Title from "./Title.vue";

const skills = ref([
    {
        id: 1,
        icon: "fa-server",
        title: "Backend Developer",
        listSkill: "SQL, RestAPI, Laravel, CodeIgniter, NodeJS",
    },
    {
        id: 2,
        icon: "fa-desktop",
        title: "Frontend Developer",
        listSkill: "VueJS, HTML/CSS, ReactJs, Tailwind, Bootstrap",
    },
    {
        id: 3,
        icon: "fa-paint-brush",
        title: "Graphic Designer",
        listSkill: "Adobe Photoshop, Corel Draw, Affinity Designer",
    },
]);
</script>
