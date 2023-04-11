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
        <span v-for="link in props.navs" :key="link.id">
            <NuxtLink 
                v-if="link._dir"
                :to="link._path"
            >
                {{link.title}}
            </NuxtLink>
        </span>
    </nav>
</template>