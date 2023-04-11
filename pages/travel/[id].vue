<script setup>
    // https://content.nuxtjs.org/api/composables/use-document-driven
    const {
        page,
        toc
    } = await useContent()
    useContentHead(page)
</script>

<template>
    <main>
        <header class="main_title">
            <Info v-if="page" :page="page"/>
            <Toc v-if="toc" :toc="toc"/>
        </header>
        <article>
            <ContentDoc />
        </article>
        <footer>
            <!-- 留言 -->
        </footer>
    </main>
</template>