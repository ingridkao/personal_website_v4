<script setup>
    const props = defineProps({
        label: {
            type: String,
            default: ''
        }
    })
    const emit = defineEmits({
        toggleChange: {
            type: "change",
            default: () => {}
        }
    })
    const handle = (e) => {
        emit("toggleChange", e.target.checked)
    }
</script>
<template>
    <label class="relative inline-flex items-center mr-5 mt-5 cursor-pointer">
        <input 
            type="checkbox" 
            value="" 
            class="sr-only peer" 
            @input="handle"
        >
        <div class="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-teal-300 dark:peer-focus:ring-teal-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-zinc-100 after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-teal-600"></div>
        <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
            {{ props.label }}
        </span>
    </label>
</template>    