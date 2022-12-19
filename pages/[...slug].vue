<script setup>
    const appConfig = useAppConfig()
    const route = useRoute()
</script>

<template>
    <main>
        <h1 class="text-3xl font-bold underline">
            {{route.params}}
        </h1>
        <hr>
        <ContentDoc />
        <hr>
        <AppAlert>
            This is an auto-imported component
        </AppAlert>
    </main>
</template>