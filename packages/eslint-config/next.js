module.exports = {
	extends: ['./index.js', 'next/core-web-vitals'],
	env: {
		browser: true,
		node: true,
	},
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
	},
};
