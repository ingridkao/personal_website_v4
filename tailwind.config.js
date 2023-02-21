/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	content: [
		"./components/**/*.{js,vue,ts}",
		"./layouts/**/*.vue",
		"./pages/**/*.vue",
		"./composables/**/*.{js,ts}",
		"./plugins/**/*.{js,ts}",
		"./nuxt.config.{js,ts}",
		"./app.vue",
		"content/**/*.md"
	],
	theme: {
		// extend: {
		// 	colors: {
		// 		primary: defaultTheme.colors.green
		// 	}
		// }
	},
	darkMode: 'class',
	variants: {
		backgroundColor: [
		  "dark",
		  "dark-hover",
		  "dark-group-hover",
		  "dark-even",
		  "dark-odd"
		],
		borderColor: ["dark", "dark-focus", "dark-focus-within"],
		textColor: ["dark", "dark-hover", "dark-active"]
	},
	plugins: [
		require('@tailwindcss/typography')
	]
}
