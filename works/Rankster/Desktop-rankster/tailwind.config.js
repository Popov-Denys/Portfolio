module.exports = {
	content: ["./public/**/*.{html,js}"],
	plugins: [
		require('@tailwindcss/forms')
	],
	theme: {
		extend: {
			borderRadius: {
				'base': '0.625rem',
			},
			colors: {
				primary: "#FDFEFE",
				secondary: "#FFD400",
				tertiary: "#9A001C",
				fourth: "#5F0F40",
				bg_green: "#93BA25",
				bg_red: "#9A001C",
			},
			fontFamily: {
				roboto: ['"Roboto"', 'sans-serif'],
				roboto_condensed: ['"Roboto Condensed"', 'sans-serif'],
				rubik: ['"Rubik"', 'sans-serif']
			},
			fontSize: {
				'2.5xl': ['1.75rem', {
					lineHeight: '2.15rem',
				}],
			},
			screens: {
				'1.5xl': '1320px',
			},
		}
	},

}