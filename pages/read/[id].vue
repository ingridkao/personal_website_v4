<script setup>
    // https://content.nuxtjs.org/api/composables/use-document-driven
    const {
        page,
        toc
    } = await useContent()
    useContentHead(page)
</script>

<template>
    <main v-if="page" >
        <div class="cover">
            <Images :path="page.image.src" :alt="page.image.alt"/>
        </div>
        <header class="mt-10">
            <Info :page="page"/>
            <Toc v-if="toc" :toc="toc"/>
        </header>
        <article>
            <ContentRenderer :key="page.id" :value="page" />
        </article>
        <footer>
            <!-- 留言 -->
        </footer>
    </main>
    <main v-else>
        Error
    </main>
</template>