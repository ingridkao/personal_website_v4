<script setup>
    const props = defineProps({
        query: {
            type: String,
            default: () => ''
        },
        allArticles: {
            type: Array,
            default: () => []
        },
        selectTag: {
            type: Array,
            default: () => []
        }
    })
    const filterTags = computed(()=>{
        if(!Array.isArray(props.allArticles))return []
        const tags = []
        props.allArticles.map(item => {
            if(!Array.isArray(item.tags))return
            tags.push(...item.tags)
        })
        return [...new Set(tags)]
    })
    const emit = defineEmits(['updateArticle', 'updateFilter'])
    const clearfilter = (tags) => {
        emit('updateFilter', [])
    }
    const selectTags = async (tag) => {
        let tags = [...props.selectTag]
        const index = props.selectTag.findIndex(item => item === tag)
        if(index<0){
            tags.push(tag)
        }else{
            tags = props.selectTag.filter(item => item != tag)
        }
        const res = await queryContent(props.query).where({ 'tags': { $contains: tags } }).find()
        emit('updateFilter', tags)
        emit('updateArticle', await res)
    }
    const activeTagClass = (item) => {
        if(props.selectTag.length === 0) return
        return props.selectTag.includes(item)? 'bg-teal-100 dark:bg-teal-900': ''
    }
</script>

<template>
    <header v-if="filterTags.length > 0" class="mt-4">
        <button 
            v-for="item in filterTags" 
            :key="item"
            class="rounded-full px-2 m-1 border-2 border-teal-500
                hover:bg-teal-200 dark:hover:bg-teal-800
                focus:outline-none
            "
            :class="activeTagClass(item)"
            @click="selectTags(item)"
        >
            {{ item }}
        </button>
        <button 
            class="rounded-full px-2 m-1 border-2 text-gray
                bg-teal-500 dark:bg-teal-900
                hover:bg-teal-400 dark:hover:bg-teal-800
                focus:outline-none
            "
            @click="clearfilter"
        >Clear</button>
    </header>
</template>