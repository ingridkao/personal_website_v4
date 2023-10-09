<script setup>
    const props = defineProps({
        articles: {
            type: Array,
            default: () => []
        }
    })
</script>

<template>
    <main class="
        inline-grid gap-2 py-5
        grid-cols-1 sm:grid-cols-3 lg:grid-cols-3
    ">
        <template v-for="link in props.articles" :key="link.id">
            <Cards 
                v-if="link && link._dir"
                :path="link['_path']" 
                :image="link['image']"
            >
                <template #title>
                    {{ link['title'] }}
                </template>
                <template #description>
                    {{ link['description'] }}
                </template>
                <template #footer>
                    <div>
                        {{ link['modified'] }}
                    </div>
                    <Tags v-if="link['tags']" :tags="link['tags']"></Tags>
                </template>
            </Cards>
        </template>
    </main>
</template>