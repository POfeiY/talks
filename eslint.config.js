import antfu from '@antfu/eslint-config'

export default antfu({
  vue: true,
  formatters: {
    css: true,
  },
  ignores: [
    '**/demo/eslint/**',
  ],
})
