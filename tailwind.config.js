/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./*.{html,js}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Alata", "sans-serif"],
				josefin: ["Josefin Sans", "sans-serif"],
			},
			colors: {
				darkgray: "hsl(0, 0%, 55%)",
				vdarkgray: "hsl(0, 0%, 41%)",
			},
			fontSize: {
				base: "15px",
			},
			screens: {
				'lmd': {'max' : '768px' },
				'llg': {'max': '1024'}
			}
		},
	},
	plugins: [],
};
