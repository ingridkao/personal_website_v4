<template>
    <AppHeader class="sticky top-0 z-50"/>
    
    <div class="
        prose
        mx-auto my-0 px-4
        bg-gray-100
        dark:bg-zinc-800 dark:text-zinc-200
    ">
        <NuxtPage />
    </div>
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