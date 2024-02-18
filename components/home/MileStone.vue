<script setup name="MileStone">
import { computed } from 'vue'
import { useDayjs } from '#dayjs' 
import milestones, { yearStart } from '@/assets/js/milestone.js'
const dayjs = useDayjs()

const yearArray = computed(()=>{
    const array = []
    for (let y = yearStart; y <= dayjs().year(); y++) {
        array.push(y)
    }
    return array.reverse()
})
</script>
<template>
    <section class="py-10 mx-auto">
        <h4>Milestone</h4>
        <div class="
            snap-x milestone-grid 
            grid gap-8 
            w-full p-4
        "
        :style="{'grid-template-columns': `repeat(${yearArray.length}, 14rem)`}">
            <div v-for="year in yearArray" :key="year"
                class="snap-center font-semibold"
            >
                <h5>{{ year }}</h5>
                <div v-if="milestones[year]" class="px-2 py-4">
                    <div v-for="(item, index) in milestones[year]" :key="index">
                        <h6>
                            {{ item.name }}
                            <template v-if="item.path">
                                <NuxtLink :to="item.path" class="inline-block ml-2 text-teal-500">
                                    <ClientOnly>
                                        <!-- Heroicon name: outline/link -->
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="w-4 h-4">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"></path>
                                        </svg>
                                    </ClientOnly>
                                </NuxtLink>
                            </template>
                        </h6>
                        <p class="mt-0">
                            <span>{{ item.start }}</span>
                            <template v-if="item.end">
                                -
                                <span v-if="item.end === 'now'">
                                    {{ `${dayjs().format('YYYYMM')}` }}
                                </span>
                                <span v-else> {{ item.end }}</span>
                            </template>
                            <template v-if="item.link">
                                <a v-for="(linkItem, linkIndex) in item.link" :key="linkIndex" 
                                    target="_blank" :href="linkItem.link"
                                    class="block text-sm opacity-50"
                                >
                                    {{ linkItem.name }}
                                </a>
                            </template>
                            <div v-if="item.img" class="w-full milestone-img">
                                <NuxtImg :src="item.img" class="h-full m-0"/>
                            </div>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss">
.milestone{
	&-grid{
        grid-area: content;
        // grid-template-columns: repeat(30, 14rem);
	    overflow-x: scroll;
        overflow-y: hidden;
        height: 32rem;
	}
    &-img{
        transition: opacity .8s;
        opacity: .7;
        &:hover{
            opacity: 1;
        }
    }
}
</style>