<script setup>
const BASE_URL = '/personal_website_v4/'
const props = defineProps({
    path: {
        type: String,
        default: ''
    },
    image: {
        type: Object,
        default: () => {}
    }
})
</script>
<template>
    <div class="
        border rounded-lg shadow 
        max-w-m noisepng bg-zinc-100 border-gray-200
        dark:bg-gray-800 dark:border-gray-700
    ">
        <NuxtLink :to="props.path">
            <div v-if="props.image" class="w-full h-56">
                <!-- <img 
                    :src="`${BASE_URL}${props.image.src}`"
                    class="rounded-t-lg my-0 mx-auto min-h-max"
                /> -->
                <NuxtImg 
                    :src="`${props.image.src}`" 
                    :alt="props.image.alt"
                    class="rounded-t-lg my-0 h-full"
                />
            </div>

            <div class="px-5">
                <h4 class="
                    mb-2 text-lg font-bold
                    text-gray-900 dark:text-white
                ">
                    <slot name="title"></slot>
                </h4>
                <p class="
                    mb-3 font-normal h-44
                    text-gray-700 dark:text-gray-400
                ">
                    <slot name="description"></slot>
                </p>
            </div>
            <footer class="
                w-full p-5 pt-0 
                inline-flex content-center justify-between
            ">
                <slot name="footer"></slot>
            </footer>
        </NuxtLink>
    </div>
</template>