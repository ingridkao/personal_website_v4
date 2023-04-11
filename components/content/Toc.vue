<script setup>
    const props = defineProps({
        toc: {
            type: Object,
            default: () => {}
        }
    })
</script>

<template>
    <div class="tocBox">
        <h6>本文重點</h6>
        <ul v-if="props.toc.links">
            <li v-for="link in props.toc.links" :key="link.text">
                <a :href="`#${link.id}`">
                    {{ link.text }}
                </a>
            </li>
        </ul>
    </div>   
</template>