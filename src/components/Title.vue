<template>
    <div class="w-full text-center mb-8">
        <h1
            class="text-2xl sm:text-3xl font-bold text-primary mt-2 mb-3 inline-block"
        >
            {{ title }}
        </h1>
    </div>
</template>

<script setup>
defineProps({
    title: {
        type: String,
        required: true,
    },
});
</script>
