<script setup>
    const route = useRoute()

    useHead({
        meta: [{ property: 'og:title', content: `IngridKao | Blog | ${route.meta.title}` }]
    })

    definePageMeta({
        validate: async (route) => {
            const nuxtApp = useNuxtApp()
            // Check if the id is made up of digits
            // 確認參數為數字
            return /^\d+$/.test(route.params.id)
        }
    })
</script>

<template>
    <div>
        <h1 class="text-3xl">
            pages/blog/[id].vue
        </h1>
        <!-- {{route.meta}}
        {{route.params.id}} -->
        <NuxtLayout name="Article">
            <ContentDoc />
        </NuxtLayout>
    </div>
</template>