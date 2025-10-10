import MarkdownItMagicLink from 'markdown-it-magic-link'
import AutoImport from 'unplugin-auto-import/vite'
import { defineConfig } from 'vite'

import '@slidev/cli'

export default defineConfig({
  optimizeDeps: {
    include: [
      'chroma-js',
      'vis-network',
      'vis-data',
    ],
  },
  slidev: {
    markdown: {
      markdownItSetup(md) {
        md.use(MarkdownItMagicLink, {
          linksMap: {
            'XzhLabs': { link: 'https://nuxtlabs.com', imageUrl: 'https://nuxtlabs.com/icon.png' },
            'NuxtLabs': { link: 'https://nuxtlabs.com', imageUrl: 'https://nuxtlabs.com/icon.png' },
            'Vitest': 'https://github.com/vitest-dev/vitest',
            'Slidev': 'https://github.com/slidevjs/slidev',
            'VueUse': 'https://github.com/vueuse/vueuse',
            'UnoCSS': 'https://github.com/unocss/unocss',
            'Elk': 'https://github.com/elk-zone/elk',
            'Type Challenges': 'https://github.com/type-challenges/type-challenges',
            'Vue': 'https://github.com/vuejs/core',
            'Nuxt': 'https://github.com/nuxt/nuxt',
            'Vite': 'https://github.com/vitejs/vite',
            'Shiki': 'https://github.com/shikijs/shiki',
            'Twoslash': 'https://github.com/twoslashes/twoslash',
            'ESLint Stylistic': 'https://github.com/eslint-stylistic/eslint-stylistic',
            'Unplugin': 'https://github.com/unplugin',
            'Nuxt DevTools': 'https://github.com/nuxt/devtools',
            'Vite PWA': 'https://github.com/vite-pwa',
            'i18n Ally': 'https://github.com/lokalise/i18n-ally',
            'ESLint': 'https://github.com/eslint/eslint',
            'Astro': 'https://github.com/withastro/astro',
            'TwoSlash': 'https://github.com/twoslashes/twoslash',
            'Anthony Fu Collective': { link: 'https://opencollective.com/antfu', imageUrl: 'https://github.com/antfu-collective.png' },
            'Netlify': { link: 'https://netlify.com', imageUrl: 'https://github.com/netlify.png' },
            'Stackblitz': { link: 'https://stackblitz.com', imageUrl: 'https://github.com/stackblitz.png' },
            'Backlog': { link: 'https://stackblitz.com', imageUrl: 'https://github.com/stackblitz.png' },
            'Vercel': { link: 'https://vercel.com', imageUrl: 'https://github.com/vercel.png' },
            'CloudAlbum': 'https://github.com/unplugin',
            'FormCreater': 'https://github.com/unplugin',
            'Backlogs': 'https://github.com/unplugin',
            'Schedule': 'https://github.com/unplugin',
            'xzh-jssdk': 'https://github.com/unplugin',
            'invoker': 'https://github.com/unplugin',
            'cli-tools': 'https://github.com/unplugin',
          },
        })
      },
    },
  },
  plugins: [
    AutoImport({
      imports: [
        'vue',
        '@vueuse/core',
      ],
    }),
  ],
})
