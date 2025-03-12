<template>
    <section
        class="flex flex-col items-center justify-center w-full max-w-4xl mx-auto"
    >
        <Title class="sm:mt-10 mt-24" title="Experiences" />
        <ul
            class="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical mb-0 w-full"
        >
            <li v-for="exp in experiences" class="mb-10">
                <div class="timeline-middle">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        class="h-5 w-5 text-primary"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                            clip-rule="evenodd"
                        />
                    </svg>
                </div>

                <div :class="exp.position" class="mb-4">
                    <time class="font-mono italic text-primary font-semibold">
                        {{ exp.timeline }}
                    </time>
                    <div class="text-lg font-black mb-2">
                        {{ exp.name }}
                    </div>
                    <div class="text-base-content">
                        <p class="mb-2">
                            <strong>{{ exp.role }}</strong>
                        </p>
                        <p class="mb-2">{{ exp.content }}</p>
                        <ul
                            v-if="exp.achievements"
                            class="list-disc pl-5 space-y-1 mt-2"
                            :class="{
                                'md:pl-0 md:list-inside md:text-right':
                                    exp.position.includes('timeline-start'),
                            }"
                        >
                            <li
                                v-for="achievement in exp.achievements"
                                :key="achievement"
                                class="text-sm"
                            >
                                {{ achievement }}
                            </li>
                        </ul>

                        <!-- Skills Section -->
                        <div
                            class="mt-3"
                            :class="{
                                'md:text-right':
                                    exp.position.includes('timeline-start'),
                            }"
                        >
                            <!-- Frontend Skills -->
                            <div
                                v-if="
                                    exp.frontendSkills &&
                                    exp.frontendSkills.length > 0
                                "
                                class="mb-2"
                            >
                                <span
                                    class="text-xs font-semibold text-primary"
                                >
                                    Frontend:
                                </span>
                                <div
                                    class="flex flex-wrap gap-2 mt-1"
                                    :class="{
                                        'md:justify-end':
                                            exp.position.includes(
                                                'timeline-start'
                                            ),
                                    }"
                                >
                                    <span
                                        v-for="skill in exp.frontendSkills"
                                        :key="skill"
                                        class="badge badge-primary badge-outline text-xs px-2 py-1"
                                    >
                                        {{ skill }}
                                    </span>
                                </div>
                            </div>

                            <!-- Backend Skills -->
                            <div
                                v-if="
                                    exp.backendSkills &&
                                    exp.backendSkills.length > 0
                                "
                                class="mb-2"
                            >
                                <span
                                    class="text-xs font-semibold text-primary"
                                >
                                    Backend:
                                </span>
                                <div
                                    class="flex flex-wrap gap-2 mt-1"
                                    :class="{
                                        'md:justify-end':
                                            exp.position.includes(
                                                'timeline-start'
                                            ),
                                    }"
                                >
                                    <span
                                        v-for="skill in exp.backendSkills"
                                        :key="skill"
                                        class="badge badge-secondary badge-outline text-xs px-2 py-1"
                                    >
                                        {{ skill }}
                                    </span>
                                </div>
                            </div>

                            <!-- Tools & Others -->
                            <div
                                v-if="
                                    exp.toolsSkills &&
                                    exp.toolsSkills.length > 0
                                "
                                class="mb-2"
                            >
                                <span
                                    class="text-xs font-semibold text-primary"
                                >
                                    Tools:
                                </span>
                                <div
                                    class="flex flex-wrap gap-2 mt-1"
                                    :class="{
                                        'md:justify-end':
                                            exp.position.includes(
                                                'timeline-start'
                                            ),
                                    }"
                                >
                                    <span
                                        v-for="skill in exp.toolsSkills"
                                        :key="skill"
                                        class="badge badge-accent badge-outline text-xs px-2 py-1"
                                    >
                                        {{ skill }}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr class="bg-primary h-0.5 opacity-100" />
            </li>
        </ul>
    </section>
</template>

<script setup>
import Title from "./Title.vue";
const experiences = [
    {
        id: 1,
        timeline: "2017-2020",
        name: "SMKN 2 Sukabumi",
        role: "Siswa Jurusan RPL",
        content:
            "Belajar dasar-dasar pemrograman dan pengembangan aplikasi di jurusan Rekayasa Perangkat Lunak. Fokus pada HTML, CSS, dan JavaScript dasar untuk pengembangan web.",
        achievements: [
            "Berpartisipasi dalam proyek kelompok membuat website sekolah sederhana",
            "Mengikuti pelatihan dasar pemrograman web",
        ],
        frontendSkills: ["HTML", "CSS", "JavaScript"],
        backendSkills: ["PHP", "MySQL", "CodeIgniter"],
        toolsSkills: [],
        position: "timeline-start md:text-end",
    },
    {
        id: 2,
        timeline: "2021-2022",
        name: "Freelance Project",
        role: "Web Developer",
        content:
            "Mengerjakan beberapa proyek kecil untuk teman dan keluarga. Membuat website sederhana dan membantu memperbaiki masalah pada website yang sudah ada.",
        achievements: [
            "Membuat landing page untuk usaha kecil lokal",
            "Memperbaiki tampilan responsif pada website toko online",
        ],
        frontendSkills: ["HTML", "CSS", "JavaScript", "Bootstrap"],
        backendSkills: ["PHP", "MySQL", "CodeIgniter", "Laravel"],
        toolsSkills: [],
        position: "timeline-end md:text-start",
    },
    {
        id: 3,
        timeline: "2023-2024",
        name: "Paradaya Movement",
        role: "Peserta Web Development Bootcamp",
        content:
            "Mengikuti bootcamp pengembangan web selama 3 bulan untuk memperdalam pengetahuan tentang teknologi front-end modern. Belajar Vue.js dan pengembangan aplikasi web interaktif.",
        achievements: [
            "Menyelesaikan proyek akhir berupa aplikasi to-do list dengan Vue.js",
            "Berkolaborasi dalam tim untuk membuat website portofolio",
        ],
        frontendSkills: ["Vue.js", "Tailwind CSS"],
        backendSkills: ["Laravel"],
        toolsSkills: ["Git", "API Integration"],
        position: "timeline-start md:text-end",
    },
];
</script>

<style>
/* Gaya timeline tanpa @apply */
.timeline::before {
    background-color: hsl(var(--p));
    width: 0.25rem;
}

.timeline li:after {
    display: none;
}

.timeline li:before {
    display: none;
}

/* Tambahan untuk responsivitas */
@media (max-width: 768px) {
    .timeline-start,
    .timeline-end {
        width: 80%;
        margin-left: auto;
        margin-right: auto;
        text-align: left;
    }
}
</style>
