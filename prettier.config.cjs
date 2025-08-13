/** @type {import('prettier').Config} */
const config = {
	plugins: ['prettier-plugin-organize-imports'],
	semi: true,
	singleQuote: true,
	jsxSingleQuote: true,
	tabWidth: 4,
	useTabs: true,
	bracketSpacing: true,
	trailingComma: 'all',
	organizeImportsSkipDestructiveCodeActions: false, // Make sure organize-imports is aggressive
};

module.exports = config;
