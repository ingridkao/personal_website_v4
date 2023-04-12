<script setup>
    const navs = await queryContent('read').find()
</script>

<template>
    <CardList v-if="navs" :articles="navs"/>
</template>