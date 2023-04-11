<script setup>
    const navs = await queryContent('murmur').find()
</script>

<template>
    <main v-if="navs" >
        <NavList :navs="navs"/>
    </main>
</template>