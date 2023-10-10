<script setup name="Parallax">
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

onNuxtReady(async () => {
    // ScrollTrigger.defaults({
    //     markers: true
    // })
    const sections = gsap.utils.toArray(".parallax");
    sections.forEach((eachPanel, i) => {
        ScrollTrigger.create({
            trigger: eachPanel,
            onEnter: () => {
                gsap.to(window, {
                    scrollTo: { y: i * innerHeight, autoKill: false, ease: "Power3.easeInOut" },
                    duration: 0.85
                })
            }
        })
    })
})
</script>

<template>
    <section>
        <div class="parallax parallax_img">
            <NuxtImg src="/img/home/mainImage.png"/>
        </div>
        <div class="parallax parallax_container">
            <div class="parallax_bg" :style="{backgroundImage: `url(https://picsum.photos/600/400?random=${2})`}">
                <h1 class="handwriting">Hello I'm</h1>
            </div>
        </div>
        <div class="parallax parallax_container">
            <div class="parallax_bg" :style="{backgroundImage: `url(https://picsum.photos/600/400?random=${2})`}">
                <h1 class="handwriting">Ingrid Kao</h1>
            </div>
        </div>
    </section>
</template>

<style lang="scss">
.parallax{
    h1{
        color: #fff;
    }
    &_img{
        height: calc(100vh - 8rem);
    }
    &_container{
        width: 100%;
        height: 100vh;
    }
    &_bg {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background-size: cover;
        background-position: center;
        background-attachment: fixed;
        background-repeat: no-repeat;
        text-align: center;
    }
}

</style>

