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
		extend: {
			colors: {
				primary: defaultTheme.colors.green
			}
		}
	},
	plugins: [
		require('@tailwindcss/typography')
	]
}
