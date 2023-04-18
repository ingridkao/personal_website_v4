<script setup>
    import TagFilter from '@/components/list/TagFilter.vue'

    const props = defineProps({
        queryContent: {
            type: String,
            default: () => ''
        }
    })
    const state = reactive({
        allArticles: await queryContent(props.queryContent).find(),
        filterArticles: [],
        selectTag : [],
        showNavs: computed(()=>{
            if(state.selectTag.length === 0){
                return state.allArticles? state.allArticles: []
            }else{
                return state.filterArticles? state.filterArticles: []
            }
        })
    })

    const updateArticle = (content) => {
        state.filterArticles = content
    }
    const updateFilter = (tags) => {
        state.selectTag = tags
    }
</script>

<template>
    <main>
        <TagFilter 
            :query="props.queryContent" 
            :allArticles="state.allArticles" 
            :selectTag="state.selectTag" 
            @updateArticle="updateArticle" 
            @updateFilter="updateFilter"
        />

        <ol class="
            timeline relative max-w-2xl p-0 border-l 
            border-gray-200 dark:border-gray-700
        ">                
            <template v-for="link in state.showNavs" :key="link.id">
                <li 
                    v-if="link && link._dir"
                    :path="link['_path']" 
                    :image="link['image']"
                    class="mb-2 ml-2"
                >
                    <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                        {{ link['modified'] }}
                    </time>
                    <NuxtLink :to="link['_path']" class="block p-2 rounded hover:bg-gray-200">
                        <h3 class="text-lg m-0 font-semibold text-gray-900 dark:text-white">
                            {{ link['title'] }}
                        </h3>
                        <p class="text-base mb-2 font-normal text-gray-500 dark:text-gray-400">
                            {{ link['description'] }} 
                        </p>
                        <Tags v-if="link['tags']" :tags="link['tags']"></Tags>
                    </NuxtLink>
                </li>
            </template>  
        </ol>
    </main>
</template>