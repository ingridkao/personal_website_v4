<script setup>
    const appConfig = useAppConfig()
</script>

<template>
    <main>
        <p>layput/about</p>
        <slot />
        <p class="underline">
            <!-- {{appConfig}} -->
        </p>
    </main>
</template>