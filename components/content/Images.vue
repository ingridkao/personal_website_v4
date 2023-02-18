<script setup>
    const publicURL = process.env.npm_lifecycle_event === 'generate'? '/personal_website_v4': ''
    const props = defineProps({
        path: {
            type: String,
            default: ''
        },
        alt: {
            type: String,
            default: ''
        }
    })
</script>
<template>
    <img 
        :src="`${publicURL}${props.path}`"
        :alt="props.alt"
        class="max-h-96 h-full mx-auto"
    />
</template>