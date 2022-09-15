const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
	content: ["./public/**/*.{html,js}"],
	theme: {
		screens: {
			'xs': '500px',
			...defaultTheme.screens,
		},
		extend: {
			colors: {
				primary: "#F0EEEB",
				secondary: "#808080"
			},
			fontFamily: {
				'Inter': ['"Inter"', 'sans-serif']
			},
		},
	},
	plugins: []
}