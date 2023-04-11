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
        class="text-s underline underline-offset-4 px-1" 
        :href="props.href"
    >
        <slot></slot>
    </a>
</template>