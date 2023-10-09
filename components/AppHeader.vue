<script setup>
    const state = reactive({
        menuBtn: false
    })
    const toggleMenu = () => {
        state.menuBtn = !state.menuBtn
    }
</script>
<template>
    <header class="relative sticky top-0 z-50 bg-gray-100 dark:bg-zinc-800">
        <div class="mx-auto max-w-7xl px-4">
            <div class="flex items-center justify-between py-4 md:space-x-10 ">
                <div>
                    <NuxtLink to="/" class="inline-flex items-center">
                        <div class="h-8 w-auto sm:h-10 mr-2">
                            <Images :path="'/img/icon.png'" :alt="'IngridKao icon'"></Images>
                        </div>
                        <span class="text-base font-medium text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300">
                            IngridKao
                        </span>
                    </NuxtLink>
                </div>
                <div class="md:hidden">
                    <button type="button" @click="toggleMenu" aria-expanded="false" class="inline-flex items-center justify-center rounded-md p-1 
                        text-gray-500 dark:text-gray-400 bg-zinc-100 dark:bg-zinc-800 
                        hover:bg-gray-100 hover:text-gray-600 focus:outline-none focus:ring-inset focus:ring-indigo-500
                    " >
                        <span class="sr-only">Open menu</span>
                        <ClientOnly>
                            <!-- Heroicon name: outline/bars-3 -->
                            <svg class="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        </ClientOnly>
                    </button>
                </div>
                <nav class="hidden space-x-10 md:flex justify-self-end inline-flex items-center justify-between">
                    <MenuLink/>
                    <ColorModeBtn />
                </nav>
            </div>
        </div>

        <!-- <div class="absolute inset-x-0 top-0 z-20 origin-top-right transform transition md:hidden duration-200 ease-out"
            :class="state.menuBtn? 'opacity-100': 'opacity-0'"
        >
            <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 px-4 py-5 h-screen
                noisepng bg-zinc-100 dark:bg-zinc-800 divide-zinc-50
            ">
                <div class="flex items-center justify-between mb-6">
                    <NuxtLink to="/" class="inline-flex items-center w-full">
                        <div class="h-8 w-auto sm:h-10 mr-2">
                            <Images :path="'/img/icon.png'" :alt="'IngridKao icon'"></Images>
                        </div>
                        <span class="text-base font-medium text-gray-500 dark:text-gray-400">
                            IngridKao
                        </span>
                    </NuxtLink>
                    <div class="-mr-2">
                        <button type="button" @click="toggleMenu" aria-expanded="false" 
                            class="inline-flex items-center justify-center rounded-md p-1
                                text-gray-500 dark:text-gray-400 bg-zinc-100 dark:bg-zinc-800 
                                hover:bg-gray-100 hover:text-gray-600 
                                focus:outline-none focus:ring-inset focus:ring-indigo-500"
                        >
                            <span class="sr-only">Close menu</span>
                            <svg class="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div class="w-full flex flex-col justify-between px-4">
                    <nav class="grid gap-y-8">
                        <MenuLink/>
                    </nav>
                    <div class="inline-flex justify-between my-10">
                        <ColorModeBtn/>
                        <SocialLink/>
                    </div>
                    <div class="mt-10">
                        <iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/3F0iUrI1t98mFskrtwHI4q?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                    </div>
                </div>
            </div>
        </div> -->
    </header>
</template>