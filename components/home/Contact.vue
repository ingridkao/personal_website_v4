<script setup name="Contact">

</script>

<template>
    <section class="flex justify-around items-center contact">
        <NuxtImg src="/img/home/ingridkao.jpeg" class="block h-auto contact_img"/>
        <div class="contact_text">
            <p>
                『在無法重複的唯一經驗，時時從自己的親身體驗出發並誠實地思考。』
            </p>
            <p class="sub">-- 你想活出怎樣的人生?</p>
            <SocialLink/>
        </div>
    </section>
</template>

<style lang="scss">
.contact{
    position: relative;
    height: 70vh;
    &_img{
        max-width: 100%;
        filter: saturate(0.75);
        -webkit-mask-image: linear-gradient(110deg, black 20%, transparent 75%);
        mask-image: linear-gradient(110deg, black 20%, transparent 75%);
        @media only screen and (max-width: 768px) {
            -webkit-mask-image: linear-gradient(110deg, black 30%, transparent 70%);
            mask-image: linear-gradient(110deg, black 30%, transparent 70%);
        }
    }
    &_text{
        max-width: 20rem;
        @media only screen and (max-width: 768px) {
            position: absolute;
            width: 12rem;
            right: 1rem;
            bottom: 1rem;
            font-size: 0.9rem;
            p{
                margin: 0.5rem 0;
            }
        }
        .sub{
            font-size: 80%;
            text-align: right;
        }
    }
}

</style>

