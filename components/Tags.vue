<script setup>
    const props = defineProps({
        tags: {
            type: Array,
            default: () => []
        }
    })
</script>

<template>
    <div>
        <span 
            v-for="(item, index) in props.tags" 
            :key="index" 
            class="
                bg-teal-100 dark:bg-teal-900
                text-xs font-medium mr-2 px-2.5 py-0.5 rounded 
        ">
            {{ item }}
        </span>
    </div>
</template>