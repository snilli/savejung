module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: 'tsconfig.json',
        sourceType: 'module',
    },
    plugins: ['@typescript-eslint/eslint-plugin', 'prettier'],
    extends: [
        'plugin:@typescript-eslint/recommended',
        'prettier/@typescript-eslint',
        'plugin:prettier/recommended',
    ],
    root: true,
    env: {
        node: true,
        jest: true,
    },
    rules: {
        'require-await': 0,
        'require-atomic-updates': 0,
        'no-unused-vars': 'off',
        'newline-before-return': 'error',
        '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/semi': [
            'error',
            'never',
        ],
        '@typescript-eslint/quotes': [
            'error',
            'single',
        ],
        '@typescript-eslint/no-unused-vars': [
            'error',
            {
                vars: 'all',
                args: 'none',
                ignoreRestSiblings: true,
            },
        ],
        '@typescript-eslint/explicit-member-accessibility': [
            'error',
            {
                accessibility: 'off',
            },
        ],
        'no-irregular-whitespace': [
            'error',
            {
                skipComments: true,
                skipTemplates: true,
                skipRegExps: true,
            },
        ],
        '@typescript-eslint/no-unsafe-assignment': 0,
        '@typescript-eslint/no-unsafe-member-access': 0,
        '@typescript-eslint/no-unsafe-return': 0,
        '@typescript-eslint/no-unsafe-call': 0,
        'prettier/prettier': 'error',
        '@typescript-eslint/no-use-before-define': 0,
        '@typescript-eslint/unbound-method': 0,
        '@typescript-eslint/prefer-for-of': 1,
        '@typescript-eslint/require-await': 0,
        '@typescript-eslint/member-delimiter-style': [
            'error',
            {
                multiline: {
                    delimiter: 'none',
                },
                singleline: {
                    delimiter: 'comma',
                    requireLast: false,
                },
            },
        ],
    },
}
