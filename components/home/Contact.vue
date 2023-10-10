<script setup name="Contact">

</script>

<template>
    <section class="flex justify-around items-center contact">
        <NuxtImg src="/img/home/ingridkao.jpeg" class="block h-auto contact_img"/>
        <div>
            <p>
                『在無法重複的唯一經驗，時時從自己的親身體驗出發並誠實地思考。』-- 你想活出怎樣的人生?
            </p>
            <SocialLink/>
        </div>
    </section>
</template>

<style lang="scss">
.contact{
    height: 70vh;
    &_img{
        max-width: 100%;
        -webkit-mask-image: linear-gradient(110deg, black 30%, transparent 70%);
        mask-image: linear-gradient(110deg, black 30%, transparent 70%);
    }
}

</style>

