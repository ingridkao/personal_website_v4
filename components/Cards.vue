<script setup>
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
const BASE_URL = '/personal_website_v4/'

</script>
<template>
    <div class="
        border rounded-lg shadow 
        max-w-m bg-white border-gray-200
        dark:bg-gray-800 dark:border-gray-700
    ">
        <NuxtLink :to="props.path">
            <img 
                v-if="props.image" 
                :path="props.image.src" 
                :alt="props.image.alt"
                :title="props.alt"
                :src="`${BASE_URL}${props.image.src}`"
                class="rounded-t-lg my-0"
            />
            <img v-else class="rounded-t-lg my-0" src="/docs/images/blog/image-1.jpg" alt="" />

            <div class="p-5">
                <h5 class="
                    mb-2 text-xl font-bold 
                    text-gray-900 dark:text-white
                ">
                    <slot name="title"></slot>
                </h5>
                <p class="
                    mb-3 font-normal 
                    text-gray-700 dark:text-gray-400
                ">
                    <slot name="description"></slot>
                </p>
            </div>
            <footer class="w-full p-5 pt-0 inline-flex content-center justify-between">
                <slot name="footer"></slot>
            </footer>
        </NuxtLink>
    </div>
</template>