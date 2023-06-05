const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
	content: ["./public/**/*.{html,js}"],
	plugins: [
		require('@tailwindcss/forms')
	],
	theme: {
		extend: {
			colors: {
				primary: "#6B7280",
				secondary: "#374151",
				tertiary: "#111827"
			},
			fontFamily: {
				sans: ['Helvetica Neue', 'sans-serif']
			},
		},
	},

}