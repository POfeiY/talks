import antfu from '@antfu/eslint-config'

export default antfu({
  vue: true,
  formatters: {
    css: true,
  },
  rules: {
    'style/max-statements-per-line': 'off',
  },
  ignores: [
    '**/demo/eslint/**',
  ],
})
