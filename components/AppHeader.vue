<script setup>
    const recentPosts = [
        { id: 1, name: 'Boost your conversion rate', href: '#' }
    ]
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
    <div class="relative bg-white dark:bg-gray-900">
        <div class="mx-auto max-w-7xl px-6">
            <div class="flex items-center justify-between border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
                <div class="flex justify-start lg:w-0 lg:flex-1">
                    <NuxtLink to="/">
                        <span class="sr-only">IngridKao</span>
                        <div class="h-8 w-auto sm:h-10">
                            <Images :path="'/img/icon.png'" :alt="'IngridKao icon'"></Images>
                        </div>
                    </NuxtLink>
                </div>
                <div class="-my-2 -mr-2 md:hidden">
                    <button type="button" @click="toggleMenu"
                        class="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-expanded="false"
                    >
                        <span class="sr-only">Open menu</span>
                        <!-- Heroicon name: outline/bars-3 -->
                        <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>
                </div>
                <nav class="hidden space-x-10 md:flex">
                    <MenuLink/>
                    <div class="relative">
                        <button type="button"  @click="toggleMore" class="text-gray-500 group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" aria-expanded="false">
                            <span>More</span>
                            <!--  Heroicon name: mini/chevron-down  -->
                            <svg 
                                class="text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500" 
                                :class="state.moreBtn? 'text-gray-600': 'text-gray-400'"
                                xmlns="http://www.w3.org/2000/svg" 
                                viewBox="0 0 20 20" 
                                fill="currentColor" 
                                aria-hidden="true"
                            >
                                <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                            </svg>
                        </button>   
                        <!--
                            'More' flyout menu, show/hide based on flyout menu state.

                            Entering: "transition ease-out duration-200"
                            From: "opacity-0 translate-y-1"
                            To: "opacity-100 translate-y-0"
                            Leaving: "transition ease-in duration-150"
                            From: "opacity-100 translate-y-0"
                            To: "opacity-0 translate-y-1"
                        -->
                        <div 
                            class="absolute md:left-0 md:right-auto lg:right-1/2 lg:left-auto z-10 
                            mt-3 w-screen max-w-sm transform px-2 sm:px-0 transition ease-out duration-200"
                            :class="state.moreBtn? 'opacity-100 translate-y-0': 'opacity-0 translate-y-1'"
                        >
                            <div class="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                                <div class="bg-white w-full px-4 py-4 sm:p-8">
                                    <p class="text-base font-medium text-gray-900">
                                        Ingrid Kao
                                    </p>
                                    <SocialLink />
                                </div>
                                <!-- <div class="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                    <NuxtLink to="/" class="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50">
                                        <svg class="h-6 w-6 flex-shrink-0 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                                        </svg>
                                        <div class="ml-4">
                                            <p class="text-base font-medium text-gray-900">Events</p>
                                            <p class="mt-1 text-sm text-gray-500">See what meet-ups and other events we might be planning near you.</p>
                                        </div>
                                    </NuxtLink>
                                </div> -->
                                <!-- <div class="bg-gray-50 px-5 py-5 sm:px-8 sm:py-8">
                                    <div>
                                        <h3 class="text-base font-medium text-gray-500">Recent Posts</h3>
                                        <ul role="list" class="mt-4 space-y-4">
                                            <li v-for="post in recentPosts" :key="post.id" class="truncate text-base">
                                                <a :href="post.href" class="font-medium text-gray-900 hover:text-gray-700">{{ post.name }}</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="mt-5 text-sm">
                                        <NuxtLink to="/" class="font-medium text-indigo-600 hover:text-indigo-500">
                                            View all posts
                                            <span aria-hidden="true"> &rarr;</span>
                                        </NuxtLink>
                                    </div>
                                </div> -->
                            </div>
                        </div>
                    </div>
                    <ColorModeBtn />
                </nav>
            </div>
        </div>

        <!--
            Mobile menu, show/hide based on mobile menu state.
            Entering: "duration-200 ease-out"
            From: "opacity-0 scale-95"
            To: "opacity-100 scale-100"
            Leaving: "duration-100 ease-in"
            From: "opacity-100 scale-100"
            To: "opacity-0 scale-95"
        -->
        <div class="absolute inset-x-0 top-0 z-20 origin-top-right transform transition md:hidden duration-200 ease-out"
            :class="state.menuBtn? 'opacity-0': 'opacity-100'"
        >
            <div class="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                <div class="px-5 pt-5 pb-6">
                    <div class="flex items-center justify-between">
                        <div>
                            <div class="h-8 w-auto">
                                <Images :path="'/img/icon.png'" :alt="'IngridKao icon'"></Images>
                            </div>
                        </div>
                        <div class="-mr-2">
                            <button type="button" @click="toggleMenu" class="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                <span class="sr-only">Close menu</span>
                                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div class="mt-10">
                        <nav class="grid gap-y-8">
                            <MenuLink/>
                        </nav>
                        <SocialLink :styles="'justify-end mt-10'"/>
                    </div>   
                </div>
            </div>
        </div>
    </div>
</template>