<script setup>
    const props = defineProps({
        page: {
            type: Object,
            default: () => {}
        }
    })
</script>

<template>
    <h2 v-if="props.page.title">{{props.page.title}}</h2>
    <p class="text-right text-xs">Update: {{props.page.modified}}</p>
    <div v-if="props.page.tags" class="text-right text-xs">
        <span v-for="tag in props.page.tags" :key="tag" class="rounded bg-gray-500 text-gray-100 opacity-6 px-2 py-0 ml-1">{{ tag }}</span>
    </div>  
</template>