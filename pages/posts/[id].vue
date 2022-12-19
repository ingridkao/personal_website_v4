<script setup>
    const route = useRoute()
</script>

<template>
    <div>
        <h1 class="text-3xl">
            {{route.meta}}
            {{route.params.id}}
        </h1>
    </div>
</template>