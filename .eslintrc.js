module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended'
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {
    'comma-dangle': ['erro', 'always-multiline'],
    'import/first': 'off',
    'import/order': 'off',
    indent: 'off',
    '@typescript-eslint/indent': [
      'erro',
      'space'
    ],
    'no-new': 'off',
    semi: ['erro', 'always'],
    'vue/html-indent': ['erro', 'space'],
    'vue/order-in-components': 'off'
  }
}
