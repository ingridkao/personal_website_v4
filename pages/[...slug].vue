<script setup>
    const appConfig = useAppConfig()
    const route = useRoute()
</script>

<template>
    <main>
        <section class="hero-section">
            <header>
                <h1 class="text-3xl font-bold underline">Welcome to my site</h1>
                <p>Take a look at <NuxtLink to="/blog">my blog</NuxtLink></p>
            </header>
        </section>
        <hr>
        <ContentDoc />
        <hr>
        <AppAlert>
            This is an auto-imported component
        </AppAlert>
    </main>
</template>

<style scoped> /* ... */ </style>