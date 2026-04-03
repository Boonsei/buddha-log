<script setup>
const props = defineProps({
    header: {
        type: String,
        required: true
    },
    subhead: {
        type: String,
        required: false
    },
    additionalHead: {
        type: String,
        required: false
    },
    link: {
        type: String,
        required: false
    },
})
</script>

<template>
    <div>
        <div class="flex align-center justify-between">
            <h3>{{ header }}</h3>
            <p>{{ additionalHead }}</p>
        </div>
        <h4 class="color-gray-500">{{ subhead }}</h4>
        <p class="mt-2">{{ text }}</p>
        <NuxtLink v-if="link" :to="link">{{ link }}</NuxtLink>
    </div>
</template>