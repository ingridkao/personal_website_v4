<script setup>
    const BASE_URL = '/personal_website_v4/'
    const props = defineProps({
        articles: {
            type: Array,
            default: () => []
        }
    })
</script>

<template>
    <ol class="
        timeline relative p-0 border-l 
        border-gray-200 dark:border-gray-700
    ">                
        <template v-for="link in props.articles" :key="link.id">
            <li 
                v-if="link && link._dir"
                :path="link['_path']" 
                :image="link['image']"
                class="mb-8 ml-4"
            >
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    {{ link['modified'] }}
                </time>
                <h3 class="text-lg m-0 font-semibold text-gray-900 dark:text-white">
                    {{ link['title'] }}
                </h3>
                <p class="text-base mb-2 font-normal text-gray-500 dark:text-gray-400">
                    {{ link['description'] }} 
                </p>
                <Tags v-if="link['tags']" :tags="link['tags']"></Tags>
            </li>
        </template>  
    </ol>
</template>