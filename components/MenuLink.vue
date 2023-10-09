<script setup>
    const menuLink = [
        {
            name: 'Travel',
            href: '/travel'
        },
        {
            name: 'Read',
            href: '/read'
        },
        {
            name: 'Murmur',
            href: '/murmur'
        }
    ]
</script>
<template>
    <NuxtLink 
        v-for="link in menuLink" :key="link.name" 
        :to="link.href"
        class="text-base font-medium 
            text-gray-500 hover:text-gray-600 
            dark:text-gray-400 dark:hover:text-gray-300
        "
    >
        {{link.name}}
    </NuxtLink>
</template>