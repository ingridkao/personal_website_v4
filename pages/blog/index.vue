<script setup>
    const {path} = useRoute()
    const navs = await queryContent(path).find()
</script>

<template>
    <nav>
        <ul>            
            <li v-for="(link, index) in navs" :key="index">
                <NuxtLink :to="link._path">
                    {{link.title}}
                </NuxtLink>
            </li>
        </ul>
    </nav>
</template>