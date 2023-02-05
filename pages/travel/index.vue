<script setup>
    const navs = await queryContent('travel').find()
</script>

<template>
    <main>
        <div class="map">
            <!-- 想做地圖 -->
        </div>
        <nav v-if="navs" class="flex flex-col justify-start lg:w-0 lg:flex-1">
            <NuxtLink 
                v-for="link in navs" 
                :key="link.id"
                :to="link._path"
            >
                {{link.title}}
            </NuxtLink>
        </nav>
    </main>
</template>