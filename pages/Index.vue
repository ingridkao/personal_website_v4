<script setup>
    const appConfig = useAppConfig()
    const route = useRoute()
</script>

<template>
    <div>
        <h1 class="text-3xl font-bold underline">
            {{route}}
        </h1>
        <AppAlert>
            This is an auto-imported component
        </AppAlert>
        {{appConfig}}
    </div>
</template>