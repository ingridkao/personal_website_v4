<script setup>
    const navs = await queryContent('read').find()
</script>

<template>
    <main v-if="navs" >
        <NavList :navs="navs"/>
    </main>
</template>