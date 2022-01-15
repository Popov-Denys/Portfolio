const colors = require('tailwindcss/colors')
module.exports = {
	content: ["./public/**/*.{html,js}"],
	theme: {
		extend: {
			colors: {
				primary: "#4c76ff",
				secondary: "#062033",
				tertiary: "#282528",
				neutral: colors.white,
			},
			maxWidth: {
				'973': '973px',
			},
			minHeight: {
				'1/2': '50%',
			},
			fontFamily: {
				'lato': ['"Lato"', 'sans-serif'],
				'open-sans': ['"Open Sans"', 'sans-serif']
			},
			backgroundImage: {
				'first-block': "url('../img/100vh.png')",
				'city': "url('../img/city.png')",
			}
		},
	},
	plugins: []
}