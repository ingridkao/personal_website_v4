<script setup>
    import { ref } from 'vue'
    const socialLink = [
        {
            href: 'https://github.com/ingridkao/',
            title: 'My github',
            viewBox: '0 0 16 16',
            svgPath: 'M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z'
        },
        {
            href: 'https://www.linkedin.com/in/ingrid-kao-024056145/',
            title: 'My linkedin',
            viewBox: '0 0 34 34',
            svgPath: 'M34,2.5v29A2.5,2.5,0,0,1,31.5,34H2.5A2.5,2.5,0,0,1,0,31.5V2.5A2.5,2.5,0,0,1,2.5,0h29A2.5,2.5,0,0,1,34,2.5ZM10,13H5V29h5Zm.45-5.5A2.88,2.88,0,0,0,7.59,4.6H7.5a2.9,2.9,0,0,0,0,5.8h0a2.88,2.88,0,0,0,2.95-2.81ZM29,19.28c0-4.81-3.06-6.68-6.1-6.68a5.7,5.7,0,0,0-5.06,2.58H17.7V13H13V29h5V20.49a3.32,3.32,0,0,1,3-3.58h.19c1.59,0,2.77,1,2.77,3.52V29h5Z'
        }
    ]
    const menuLink = [
        {
            name: 'About',
            href: '/about'
        },
        {
            name: 'Travel',
            href: '/travel'
        },
        // {
        //     name: 'Travel',
        //     href: '/blog'
        // },
    ]
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
    <div class="relative bg-white">
        <div class="mx-auto max-w-7xl px-6">
            <div class="flex items-center justify-between border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
                <div class="flex justify-start lg:w-0 lg:flex-1">
                    <NuxtLink to="/">
                        <span class="sr-only">IngridKao</span>
                        <img class="h-8 w-auto sm:h-10" :src="'/img/icon.png'" alt="IngridKao icon">
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
                    <!-- Item active: "text-gray-900", Item inactive: "text-gray-500" -->
                    <NuxtLink 
                        v-for="link in menuLink" :key="link.href" 
                        :to="link.href"
                        class="text-base font-medium text-gray-500 hover:text-gray-900"
                    >
                        {{link.name}}
                    </NuxtLink>

                    <div class="relative">
                        <button type="button"  @click="toggleMore" class="text-gray-500 group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" aria-expanded="false">
                            <span>More</span>
                            <!--  Heroicon name: mini/chevron-down  -->
                            <svg 
                                class="text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500" 
                                :class="moreBtn? 'text-gray-600': 'text-gray-400'"
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
                        <div class="absolute md:left-0 md:right-auto lg:right-1/2 lg:left-auto z-10 
                            mt-3 w-screen max-w-sm transform px-2 sm:px-0 transition ease-out duration-200"
                            :class="state.moreBtn? 'opacity-100 translate-y-0': 'opacity-0 translate-y-1'"
                        >
                            <div class="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                                <div class="bg-white w-full px-4 py-4 sm:p-8">
                                    <p class="text-base font-medium text-gray-900">
                                        Ingrid Kao
                                    </p>
                                    <div class="inline-flex">
                                        <a 
                                            v-for="(item, index) in socialLink" 
                                            :key="index" 
                                            :href="item.href"
                                            :title="item.title"
                                            target="_blank" 
                                            rel="noreferrer noopenner"
                                            class="rounded-lg p-3 cursor-pointer"
                                        >
                                            <svg 
                                                class="h-6 w-6 flex-shrink-0 fill-indigo-600"
                                                :viewBox="item.viewBox" 
                                                data-view-component="true" 
                                                aria-hidden="true" 
                                            >
                                                <path :d="item.svgPath"/>
                                            </svg>
                                        </a>
                                    </div>
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
                            <img class="h-8 w-auto" :src="'/img/icon.png'" alt="IngridKao icon">
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
                            <NuxtLink 
                                v-for="link in menuLink" :key="link.href" 
                                :to="link.href"
                                class="text-base font-medium text-gray-900 hover:text-gray-700"
                            >
                                {{link.name}}
                            </NuxtLink>
                        </nav>
                        <div class="inline-flex w-full justify-end mt-10">
                            <a 
                                v-for="(item, index) in socialLink" 
                                :key="index" 
                                :href="item.href"
                                :title="item.title"
                                target="_blank" 
                                rel="noreferrer noopenner"
                                class="rounded-lg p-3 cursor-pointer"
                            >
                                <svg 
                                    class="h-6 w-6 flex-shrink-0 fill-indigo-600"
                                    :viewBox="item.viewBox" 
                                    data-view-component="true" 
                                    aria-hidden="true" 
                                >
                                    <path :d="item.svgPath"/>
                                </svg>
                            </a>
                        </div>
                    </div>   
                </div>
            </div>
        </div>
    </div>
    <!-- Heroicon name: outline/chart-bar -->
    <!-- <svg class="h-6 w-6 flex-shrink-0 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
    <path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
    </svg> -->
    <!-- Heroicon name: outline/cursor-arrow-rays -->
    <!-- <svg class="h-6 w-6 flex-shrink-0 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
    <path stroke-linecap="round" stroke-linejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59" />
    </svg> -->
</template>