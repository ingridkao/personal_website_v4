<script setup>
    const navs = await queryContent('investment').find()
</script>

<template>
    <main>
        <nav v-if="navs" class="flex flex-col justify-start">
            <NuxtLink 
                v-for="link in navs" 
                :key="link._path"
                :to="link._path"
            >
                {{link.title}}
            </NuxtLink>
        </nav>
    </main>
</template>