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
		'@nuxt/content'
	],
	buildModules: [
		'@nuxtjs/style-resources',
	],
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
			{
			  src: "https://www.googletagmanager.com/gtag/js?id=G-Q897XJT2E0",
			  async: true,
			},
			{ src: "/js/analitics.js" },
			{
				src: "https://www.travelpayouts.com/money_script/money_script.js?marker=411780",
				async: true,
			}
		]
  	}
})
