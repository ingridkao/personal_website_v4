<script setup>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);


onNuxtReady(async () => {
    const sections = gsap.utils.toArray("section");
    const goToSection = (i) => {
        gsap.to(window, {
            scrollTo: { y: i * innerHeight, autoKill: false, ease: "Power3.easeInOut" },
            duration: 0.85
        })
    }
    // ScrollTrigger.defaults({
    //     markers: true
    // })
    sections.forEach((eachPanel, i) => {
        // 往下
        ScrollTrigger.create({
            trigger: eachPanel,
            onEnter: () => goToSection(i)
        });
    });
});
</script>

<template>
    <main>
        <section v-for="item in 5" :key="item">
            <div class="bg" :style="{backgroundImage: `url(https://picsum.photos/600/400?random=${item})`}">
                <h1>This</h1>
            </div>
        </section>
        <NuxtImg src="/img/icon.png" />
    </main>

</template>

