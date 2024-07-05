module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser'
  },
  extends: [
    'plugin:nuxt/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-recommended',
    'prettier'
  ],
  plugins: ['@typescript-eslint', 'prettier'],
  // add your custom rules here
  rules: {
    'comma-dangle': ['error', 'never'],
    'vue/multi-word-component-names': 'off',
    'vue/no-unused-properties': [
      'warn',
      {
        groups: ['props', 'data', 'computed', 'methods', 'setup'],
        unreferencedOptions: ['unknownMemberAsUnreferenced'],
        deepData: true,
        ignorePublicMembers: true
      }
    ],
    'vue/no-unused-refs': ['warn'],
    'vue/valid-v-slot': [
      'error',
      {
        allowModifiers: true
      }
    ],
    '@typescript-eslint/no-explicit-any': ['warn'],
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        args: 'all',
        argsIgnorePattern: '^_',
        caughtErrors: 'all',
        caughtErrorsIgnorePattern: '^_',
        destructuredArrayIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        ignoreRestSiblings: true
      }
    ]
  },
  overrides: [
    {
      files: [
        'pages/*.vue',
        'pages/**/*.vue',
        'pages/**/**/*.vue',
        'pages/**/**/**/*.vue',
        'layouts/*.vue',
        'components/**/*.vue',
        'components/**/**/*.vue'
      ],
      rules: {
        'vue/no-reserved-component-names': 'off',
        'import/order': 'off',
        'property-no-vendor-prefix': 'off',
        'prettier/prettier': 'warn'
      }
    }
  ]
}
