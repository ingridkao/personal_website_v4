<template>
    <AppHeader />

    <NuxtPage />
</template>

<style>
    .page-enter-active,
    .page-leave-active,
    .layout-enter-active,
    .layout-leave-active  {
        transition: all 0.4s;
    }
    .page-enter-from,
    .page-leave-to {
        opacity: 0;
        filter: blur(1rem);
    }
    .layout-enter-from,
    .layout-leave-to {
        filter: grayscale(1);
    }
</style>