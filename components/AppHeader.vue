<script setup>
    const state = reactive({
        menuBtn: false,
        moreBtn: false
    })
    const toggleMenu = () => {
        state.menuBtn = !state.menuBtn
    }
    const toggleMore = () => {
        state.moreBtn = !state.moreBtn
    }
</script>
<template>
    <header class="relative bg-white dark:bg-zinc-900">
        <div class="mx-auto max-w-7xl px-6">
            <div class="py-6 flex items-center justify-between md:space-x-10">
                <div class="lg:w-0">
                    <NuxtLink to="/">
                        <span class="sr-only">IngridKao</span>
                        <div class="h-8 w-auto sm:h-10">
                            <Images :path="'/img/icon.png'" :alt="'IngridKao icon'"></Images>
                        </div>
                    </NuxtLink>
                </div>
                <div class="-my-2 -mr-2 md:hidden">
                    <button type="button" @click="toggleMenu" aria-expanded="false" class="inline-flex items-center justify-center rounded-md p-2 
                        text-gray-500 hover:text-gray-600 
                        dark:hover:text-gray-400
                        focus:outline-none focus:ring-inset
                    " >
                        <span class="sr-only">Open menu</span>
                        <!-- Heroicon name: outline/bars-3 -->
                        <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>
                </div>
                <nav class="hidden space-x-10 md:flex justify-self-end inline-flex items-center justify-between">
                    <MenuLink/>
                    <ColorModeBtn />
                    <!-- <SocialLink /> -->
                </nav>
            </div>
        </div>

        <div class="absolute inset-x-0 top-0 z-20 origin-top-right transform transition md:hidden duration-200 ease-out"
            :class="state.menuBtn? 'opacity-0': 'opacity-100'"
        >
            <div class="divide-y-2 divide-gray-50 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5
                bg-white dark:bg-zinc-900
            ">
                <div class="px-5 pt-5 pb-6">
                    <div class="flex items-center justify-between">
                        <div>
                            <div class="h-8 w-auto">
                                <Images :path="'/img/icon.png'" :alt="'IngridKao icon'"></Images>
                            </div>
                        </div>
                        <div class="-mr-2">
                            <button type="button" @click="toggleMenu" class="inline-flex items-center justify-center rounded-md bg-white dark:bg-zinc-900 p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-inset focus:ring-indigo-500">
                                <span class="sr-only">Close menu</span>
                                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div class="mt-10">
                        <nav class="grid gap-y-8 mb-10">
                            <MenuLink/>
                        </nav>
                        <div class="inline-flex w-full justify-end">
                            <SocialLink/>
                            <ColorModeBtn class="ml-5"/>
                        </div>
                    </div>   
                </div>
            </div>
        </div>
    </header>
</template>