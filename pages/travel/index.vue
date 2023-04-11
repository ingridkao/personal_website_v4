<script setup>
    const navs = await queryContent('travel').find()
    const state = reactive({
        toggle: false
    })
    const handleOnChange = (status) => {
        state.toggle = status
    }
</script>

<template>
    <main>
        <Toggles :label="'地圖顯示'" @toggle-change="handleOnChange"></Toggles>
        <MapboxBox v-if="state.toggle"/>
        <NavList v-else-if="navs" :navs="navs"/>
    </main>
</template>