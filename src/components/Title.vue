<template>
    <h1 class="text-xl sm:text-2xl font-semibold text-teal-700 mt-2 mb-3">
        {{ title }}
    </h1>
</template>

<script setup>
defineProps({
    title: {
        type: String,
        required: true,
    },
});
</script>
