<script setup>
    const navs = await queryContent('travel').find()
</script>

<template>
    <main>
        <div class="map">
            <!-- 想做地圖 -->
        </div>
        <NavList v-if="navs" :navs="navs"/>
    </main>
</template>