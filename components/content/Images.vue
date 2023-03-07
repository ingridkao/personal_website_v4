<script setup>
    const BASE_URL = '/personal_website_v4/'
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
        :src="`${BASE_URL}${props.path}`"
        :alt="props.alt"
        :title="props.alt"
        class="max-h-96 h-full my-0 mx-auto"
    />
</template>