<script setup>
    const props = defineProps({
        navs: {
            type: Object,
            default: () => {}
        }
    })
</script>

<template>
    <nav class="flex flex-col justify-start">
        <NuxtLink 
            v-for="link in props.navs" 
            :key="link.id"
            :to="link._path"
        >
            {{link.title}}
        </NuxtLink>
    </nav>
</template>