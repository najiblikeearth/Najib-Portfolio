<template>
    <section class="items-center justify-center">
        <Title class="sm:mt-10 mt-24" title="Experiences" />
        <ul
            class="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical mb-0"
        >
            <li v-for="exp in experiences" class="mb-10">
                <div class="timeline-middle">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        class="h-5 w-5"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                            clip-rule="evenodd"
                        />
                    </svg>
                </div>

                <div :class="exp.position">
                    <time class="font-mono italic">
                        {{ exp.timeline }}
                    </time>
                    <div class="text-lg font-black">
                        {{ exp.name }}
                    </div>
                    {{ exp.content }}
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
        content: "RPL",
        position: "timeline-start md:text-end",
    },
    {
        id: 2,
        timeline: "2021-2025",
        name: "Freelancer",
        content: "Web Dev & Design",
        position: "timeline-end md:text-start",
    },
    {
        id: 3,
        timeline: "2024-2025",
        name: "Paradaya Movement",
        content: "Web Dev Bootcamp",
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
</style>
