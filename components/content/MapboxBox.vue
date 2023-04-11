<script>
    import { reactive, onMounted, onUnmounted, nextTick } from 'vue'
    import mapboxgl from 'mapbox-gl'
    import 'mapbox-gl/dist/mapbox-gl.css'

    // mapboxgl.accessToken = '<your access token here>'
    // mapboxgl.accessToken = 'pk.eyJ1IjoiaW5ncmlka2FvIiwiYSI6ImNsZXpzcHptNTAyZHczc29lanN0MGVxM2EifQ._eHJ0-DXCk6Hxz71UwhyXQ'
    mapboxgl.accessToken = 'pk.eyJ1IjoiaW5ncmlka2FvIiwiYSI6ImNsZXpzcXZoYjAyZTQzem80ZmtvdGFsYXcifQ.J__Gl_QgFIhLozjpSOZFRg'

    const BASE_URL = '/personal_website_v4/'

    export default {
        setup() {
            const state = reactive({
                toggle: false,
                mapEl: null,
                target: {},
                targetList: [],
                // double: computed(() => state.count * 2)
            })

            const mapInit = () => {
                state.mapEl = new mapboxgl.Map({
                    antialias: true,
                    container: 'mapboxWrapper', // container ID
                    style: 'mapbox://styles/mapbox/streets-v12', // style URL
                    center: [121.615011, 22.136127], // starting position [lng, lat]
                    zoom: 2.5, // starting zoom
                    maxZoom: 6
                })
                // Fixed: onMounted hook running before DOM is available
                if (state.mapEl.loaded()) {
                    mapLoad()
                }else{
                    state.mapEl.on('load', () => mapLoad())
                }
            }
            const mapLoad = () => {
                state.mapEl.doubleClickZoom.disable()
                state.mapEl.addSource('travel', {
                    type: 'geojson',
                    data: `${BASE_URL}/data/travel.geojson`
                })
                state.mapEl.addLayer({
                    id: 'travel-point',
                    type: 'circle',
                    source: 'travel',
                    paint: {
                        'circle-stroke-width': 2,
                        'circle-stroke-color': '#fff',
                        'circle-radius': 10,
                        'circle-color': '#11b4da'
                    }
                })
                state.mapEl.on('mouseenter', 'clusters', () => {
                    state.mapEl.getCanvas().style.cursor = 'pointer'
                })
                state.mapEl.on('mouseleave', 'clusters', () => {
                    state.mapEl.getCanvas().style.cursor = ''
                })
                state.mapEl.on('click', 'travel-point', (e) => {
                    const features = state.mapEl.queryRenderedFeatures(e.point, { layers: ['travel-point']})
                    const tagetFeature = features[0]
                    state.target = tagetFeature.properties
                    state.targetList = JSON.parse(tagetFeature.properties.lists)
                })
            }
            const toggleSidebar = () => {
                if(state.mapEl === null)return
                state.toggle = !state.toggle
                state.mapEl.easeTo({
                    duration: 1000,
                    padding: {
                        top: 0, 
                        bottom:0, 
                        left: state.toggle? 0: 256, 
                        right: state.toggle? 256: 0
                    }
                })
            }
            onMounted(()=> {
                nextTick(() => {
                    const mapboxExist = window.document.getElementById('mapContainer');
                    if(mapboxExist){
                        mapInit()
                    }else{
                        setTimeout(()=>mapInit(), 500)
                    }
                })
            })
            onUnmounted(()=>{
                if(state.mapEl && state.mapEl.loaded()) state.mapEl.remove()
            })
            return {
                state,
                toggleSidebar
            }
        }
    }
</script>

<template>
    <div id="mapContainer" class="relative overflow-hidden">
        <div id="mapboxWrapper"></div>
        <div id="sidebar" class="sidebar absolute top-0 right-0 z-10 flex justify-center items-center w-64 h-full" :class="{collapsed: !state.toggle}">
            <div class="absolute w-full h-full flex justify-center items-center shadow-lg rounded-md bg-white text-slate-600">
                <div>
                    <div v-if="state.target" :style="{backgroundImage: `url(${state.target.img})`}">
                        <h6>{{ state.target.name }}</h6>
                        <p>{{ state.target.time }}</p>
                    </div>
                    <NuxtLink 
                        v-for="(item, index) in state.targetList" 
                        :key="index" 
                        :to="item.path" 
                        class="flex text-slate-500"
                    >
                        {{item.title}}
                    </NuxtLink>
                </div>
                <button class="absolute -left-12 w-10 h-10 flex justify-center items-center shadow-md rounded-md bg-white hover:text-cyan-500 text-4xl overflow-visible" 
                    :class="{collapsed: !state.toggle}"
                    @click="toggleSidebar"
                >
                    &larr;
                </button>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
#mapboxWrapper{
    width: 100%;
    height: 40rem;
}
#sidebar {
    transition: transform 1s;
    &.collapsed{
        transform: translateX(256px);
    }
    button.collapsed{
        // transform: translateX(256px);
    }
}
</style>