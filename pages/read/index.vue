<script setup>
    const navs = await queryContent('read').find()
</script>

<template>
    <main 
        v-if="navs" 
        class="
            inline-grid gap-2 py-5
            grid-cols-1 sm:grid-cols-2 
        "
    >
        <template v-for="link in navs" :key="link.id">
            <Cards 
                v-if="link._dir"
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
                    <div v-if="link['tags']">
                        <span 
                            v-for="(item, index) in link['tags']" 
                            :key="index" 
                            class="
                                bg-teal-100 dark:bg-teal-900
                                text-xs font-medium mr-2 px-2.5 py-0.5 rounded 
                        ">
                            {{ item }}
                        </span>
                    </div>
                </template>
            </Cards>
        </template>
    </main>
</template>