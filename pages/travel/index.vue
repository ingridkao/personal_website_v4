<script setup>
    import Timeline from '@/components/list/Timeline.vue'
    const state = reactive({
        toggle: false
    })
    const handleOnChange = (status) => {
        state.toggle = status
    }
</script>

<template>
    <main>
        <!-- <Toggles :label="'地圖顯示'" @toggle-change="handleOnChange"></Toggles> -->
        <MapboxBox v-if="state.toggle"/>
        <Timeline v-else :queryContent="'travel'"/>
    </main>
</template>