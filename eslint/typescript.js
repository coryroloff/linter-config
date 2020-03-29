'use strict'

// @typescript-eslint/parser@2.25.0
// @typescript-eslint/eslint-plugin@2.25.0

module.exports = {
	parser: '@typescript-eslint/parser',
	plugins: [
		'@typescript-eslint',
	],
	extends: [
		'base.js',
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/recommended-requiring-type-checking'
	],
	rules: {
		'@typescript-eslint/array-type': [ 'error', { default: 'array' } ],
		'@typescript-eslint/ban-ts-comment': 'error',
		'@typescript-eslint/class-literal-property-style': 'error',
		'@typescript-eslint/consistent-type-definitions': [ 'error', 'interface' ],
		'@typescript-eslint/explicit-function-return-type': 'off',
		'@typescript-eslint/explicit-member-accessibility': 'off',
		'@typescript-eslint/explicit-module-boundary-types': 'error',
		'@typescript-eslint/member-delimiter-style': [ 'error', 'none' ],
		'@typescript-eslint/member-ordering': 'error',
		'@typescript-eslint/naming-convention': 'error',
		'@typescript-eslint/no-base-to-string': 'error',
		'@typescript-eslint/no-dynamic-delete': 'error',
		'@typescript-eslint/no-empty-interface': 'off',
		'@typescript-eslint/no-extra-non-null-assertion': 'error',
		'@typescript-eslint/no-extraneous-class': 'error',
		'@typescript-eslint/no-floating-promises': 'error',
		'@typescript-eslint/no-implied-eval': 'error',
		'@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
		'@typescript-eslint/no-require-imports': 'error',
		'@typescript-eslint/no-throw-literal': 'error',
		'@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
		'@typescript-eslint/no-unnecessary-condition': 'error',
		'@typescript-eslint/no-unnecessary-qualifier': 'error',
		'@typescript-eslint/no-unnecessary-type-arguments': 'error',
		'@typescript-eslint/no-unsafe-call': 'error',
		'@typescript-eslint/no-unsafe-member-access': 'error',
		'@typescript-eslint/no-unsafe-return': 'error'
		'@typescript-eslint/prefer-as-const': 'error',
		'@typescript-eslint/prefer-for-of': 'error',
		'@typescript-eslint/prefer-nullish-coalescing': 'error',
		'@typescript-eslint/prefer-optional-chain': 'error',
		'@typescript-eslint/prefer-readonly': 'error',
		'@typescript-eslint/promise-function-async': 'error',
		'@typescript-eslint/require-array-sort-compare': 'error',
		'@typescript-eslint/restrict-plus-operands': 'error',
		'@typescript-eslint/restrict-template-expressions': 'error',
		'@typescript-eslint/strict-boolean-expressions': [
			'error',
			{
				allowNullable: true,
				allowSafe: true,
				ignoreRhs: true
			}
		],
		'@typescript-eslint/switch-exhaustiveness-check': 'error',
		'@typescript-eslint/unified-signatures': 'error',
		'brace-style': 'off',
		'@typescript-eslint/brace-style': 'error',
		'comma-spacing': 'off',
		'@typescript-eslint/comma-spacing': 'error',
		'default-param-last': 'off',
		'@typescript-eslint/default-param-last': 'error',
		'func-call-spacing': 'off',
		'@typescript-eslint/func-call-spacing': 'error',
		'indent': 'off',
		'@typescript-eslint/indent': [ 'error', 'tab', { SwitchCase: 1 } ],
		'no-dupe-class-members': 'off',
		'@typescript-eslint/no-dupe-class-members': 'error',
		'@typescript-eslint/no-empty-function': 'off',
		'no-extra-parens': 'off',
		'@typescript-eslint/no-extra-parens': 'error',
		'no-extra-semi': 'off',
		'@typescript-eslint/no-extra-semi': 'error',
		'no-unused-expressions': 'off',
		'@typescript-eslint/no-unused-expressions': [
			'error',
			{
				allowShortCircuit: true,
				allowTernary: true
			}
		],
		'no-unused-vars': 'off',
		'@typescript-eslint/no-unused-vars': [ 'error', { args: 'none' } ],
		'no-use-before-define': 'error',
		'@typescript-eslint/no-use-before-define': 'error',
		'no-useless-constructor': 'off',
		'@typescript-eslint/no-useless-constructor': 'error',
		'quotes': 'off',
		'@typescript-eslint/quotes': [ 'error', 'single' ],
		'require-await': 'off',
		'@typescript-eslint/require-await': 'off',
		'@typescript-eslint/return-await': [ 'error', 'never' ],
		'semi': 'off',
		'@typescript-eslint/semi': [ 'error', 'never' ],
		'space-before-function-paren': 'off',
		'@typescript-eslint/space-before-function-paren': 'error'
	},
	overrides: [
		{
			files: [ '*.ts', '*.tsx' ],
			rules: {
				'@typescript-eslint/explicit-function-return-type': [ 'error', { allowExpressions: true } ],
				'@typescript-eslint/explicit-member-accessibility': 'error'
			}
		}
	]
}
