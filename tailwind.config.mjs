/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],

	theme: {
		extend: {
			keyframes: {
				pulse: {
					'0%, 100%': { opacity: 1 },
					'80%': { opacity: 0.5 },
				},
			},
			animation: {
				pulse: 'pulse 2s infinite',
			},
		},
	},
	plugins: [],
};

