// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
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
		baseURL: '/personal_website_v4/',
		cdnUrl: process.env.npm_lifecycle_event === 'generate'? '/personal_website_v4/': '',
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
			{ name: 'description', content: 'Ingridkao\'s site.' }
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
