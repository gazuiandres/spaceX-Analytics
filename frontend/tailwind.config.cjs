/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			'openSans': ['Open Sans', 'sans-serif']
		},
		extend: {
			backgroundImage: {
				mainBackground: "url('https://res.cloudinary.com/dqd4krsof/image/upload/v1677885026/spaceX-project/background_l6np4z.webp')"
			}
		},
	},
	plugins: [],
}
