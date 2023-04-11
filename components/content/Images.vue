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
        class="h-full mx-auto 
            max-h-80 md:max-h-96 
            my-2 md:my-1
        "
    />
</template>