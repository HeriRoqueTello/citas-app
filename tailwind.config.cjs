/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.jsx'],
	theme: {
		container: {
			padding: {
				DEFAULT: '1rem',
				sm: '2rem',
				lg: '4rem',
				xl: '4rem',
				'2xl': '4rem',
			},
		},
	},
	plugins: [],
};
