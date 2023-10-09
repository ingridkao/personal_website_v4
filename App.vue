<script setup></script>

<template>
    <div class="noisepng 
        bg-zinc-100 dark:bg-zinc-800
        zinc-800 dark:text-zinc-200
    ">
        <AppHeader />
    
        <div class="prose mx-auto p-4">
            <NuxtPage />
        </div>

        <AppFooter />
    </div>
</template>

<style>
.page-enter-active,
.page-leave-active,
.layout-enter-active,
.layout-leave-active {
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