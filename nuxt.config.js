// https://v3.nuxtjs.org/api/configuration/nuxt.config
const BASE_URL = '/personal_website_v4/'
export default defineNuxtConfig({
	// ssr: false,
	// nitro: {
	//   preset: 'service-worker'
	// },
	modules: [
		'@nuxtjs/color-mode',
		'@nuxtjs/tailwindcss',
		'@nuxt/content',
		'@nuxt/image',
		'@nuxtjs/google-fonts',
		'nuxt-gtag',
		'nuxt-mapbox'
	],
	buildModules: [
		'@nuxtjs/style-resources',
	],
	build: {
        transpile: ["gsap"],
    },
	colorMode: {
		classSuffix: ""
	},
	postcss: {
		plugins: {
			autoprefixer: {}
		}
	},
	css: [
		'~/assets/css/tailwind.css',
		'~/assets/scss/tailwind.scss',
		'~/assets/scss/main.scss'
	],
	styleResources: {
		scss: [
		  	'~/assets/scss/variables.scss',
			'~/assets/scss/mixins.scss'
		]
	},
	content: {
		documentDriven: true,
		navigation: {
			fields: ['publishedAt']
		}
	},
	googleFonts: {
        families: {
			// Roboto: true,
			'Noto+Sans+TC': [200, 500],
			// Raleway: {
			// 	wght: [100, 400],
			//   	ital: [100]
			// },
		}
	},
	gtag: {
		id: 'G-Q897XJT2E0',
		config: {
			page_title: 'Ingridkao\'s site.'
		}
	},
	mapbox: {
		accessToken: 'pk.eyJ1IjoiaW5ncmlka2FvIiwiYSI6ImNsZXpzcXZoYjAyZTQzem80ZmtvdGFsYXcifQ.J__Gl_QgFIhLozjpSOZFRg'
	},
	app: {
		baseURL: BASE_URL,
		cdnUrl: BASE_URL,
		pageTransition: { 
			name: 'page', 
			mode: 'out-in'
		},
		layoutTransition: {
			name: 'slide',
			mode: 'out-in'
		},
		head: {
		  title: 'IngridKao',
		  meta: [
			{ name: 'description', content: 'Ingridkao\'s site.' },
			{ name: 'robots', content: 'index, follow' }
		  ]
		},
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ],
		script: [
			{ src: "/js/analitics.js" },
			{
				src: "https://www.travelpayouts.com/money_script/money_script.js?marker=411780",
				async: true,
			}
		]
  	}
})
