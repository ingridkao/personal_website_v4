// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	modules: [
		'@nuxt/content'
	],
	content: {
		documentDriven: true,
		navigation: {
			fields: ['publishedAt']
		}
	},
	css: [
		'~/assets/css/main.css'
	],
	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {}
		}
	},
	app: {
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
			// { property: 'og:title', content: `Ingridkao - ${route.meta.title}` }
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
