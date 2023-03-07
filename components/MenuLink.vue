<script setup>
    const menuLink = [
        {
            name: 'About',
            href: '/about'
        },
        {
            name: 'Travel',
            href: '/travel'
        },
        {
            name: 'Blog',
            href: '/blog'
        },
    ]
</script>
<template>
    <!-- Item active: "text-gray-900", Item inactive: "text-gray-500" -->
    <NuxtLink 
        v-for="link in menuLink" :key="link.name" 
        :to="link.href"
        class="text-base font-medium text-gray-500 hover:text-gray-600 dark:hover:text-gray-400"
    >
        {{link.name}}
    </NuxtLink>
</template>