<script setup name="ToDoList">
    import { computed } from 'vue'
    import todoList from '@/assets/js/todoList.js'
    const achievingrate = computed(()=>{
        if(todoList.length > 0){
            const count = todoList.filter(item => item.done)
            return `${(count.length / todoList.length) * 100}%`
        }else{
            return 0
        }
    })
</script>
<template>
    <section class="py-10 mx-auto">
        <h4>60歲前一定要做的100件事</h4>
        <div class="snap-x todo-grid grid gap-4 mt-4 p-4">
            <div 
                v-for="(item, index) in todoList" 
                :key="index"
                :class="{
                    'opacity-50 text-done': item.done,
                    'font-extralight': item.done && !item.link,
                    'text-primary': item.link
                }"
                class="
                    snap-center
                    font-semibold
                    border-b border-solid border-slate-300
                "
            >
                <span class="todo-index">
                    {{index + 1}}
                </span>
                {{ item.name }}
                <template v-if="item.link">
                    <NuxtLink :to="item.link" class="inline-block ml-2 text-teal-500">
                        <ClientOnly>
                            <!-- Heroicon name: outline/link -->
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="w-4 h-4">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"></path>
                            </svg>
                        </ClientOnly>
                    </NuxtLink>
                </template>
            </div>
        </div>
        <div class="text-center my-4">
            <p class="mb-0">
                目前達成率 {{ achievingrate }}
            </p>
            <div class="achievingrate mt-4 mx-auto">
                <div :style="{width:achievingrate}"></div>
            </div>
            <p>
                希望40歲前可以完成50%，距離40歲
            </p>
            <b>{{ useDayjs().diff('2027-01-02', 'day') }}天</b>
        </div>
    </section>
</template>

<style lang="scss">
.achievingrate{
    width: 10rem;
    height: 0.25rem;
    border-radius: .5rem;
    background-color: #fff;
    >div{
        width: 100%;
        height: 100%;
        background-color: var(--primary-color);
    }
}
.todo{
	&-grid{
        grid-area: content;
        grid-template-columns: repeat(10, 16rem);
	    overflow-x: scroll;
	}
	&-index{
        display: inline-block;
        width: 2rem;
		&::after{
			content: '.';
		}
	}
}
</style>