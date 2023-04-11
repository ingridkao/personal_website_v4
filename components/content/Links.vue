<script setup>
    const props = defineProps({
        href: {
            type: String,
            default: ''
        }
    })
</script>
<template>
    <a 
        target="_blank" 
        rel="noreferrer noopenner" 
        class="text-s" 
        :href="props.href"
    >
        <slot></slot>
    </a>
</template>