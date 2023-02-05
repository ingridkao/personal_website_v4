<script setup>
    // https://content.nuxtjs.org/api/composables/use-document-driven
    const {
        page,
        toc
    } = await useContent()
</script>

<template>
    <main v-if="page && toc" class="prose max-w-2xl m-auto px-4 divide-y divide-dashed">
        <header>
            <h2 v-if="page.title">{{page.title}}</h2>
            <p class="text-right text-xs">Update: {{page.modified}}</p>
            <div class="tocBox">
                <h6>本文重點</h6>
                <ul v-if="toc.links">
                    <li v-for="link in toc.links" :key="link.text">
                        <a
                        :href="`#${link.id}`"
                        >
                        {{ link.text }}
                        </a>
                    </li>
                </ul>
            </div>   
        </header>
        <article class="py-5">
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