<script setup>
    const navs = await queryContent('read').sort({ id: -1}).find()
</script>

<template>
    <CardList v-if="navs" :articles="navs"/>
</template>