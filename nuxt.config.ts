// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: ['nuxt-umami'],

  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'manifest', href: '/site.webmanifest' },
        { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#024FCA' }
      ],
      meta: [
        { name: 'apple-mobile-web-app-title', content: 'tmlmt' },
        { name: 'application-name', content: 'tmlmt' },
        { name: 'msapplication-TileColor', content: '#024FCA' },
        { name: 'theme-color', content: '#024FCA' }
      ]
    }
  },

  build: {
    transpile: ['primevue']
  },

  css: [
    'primevue/resources/themes/lara-light-blue/theme.css',
    'primevue/resources/primevue.css',
    'primeicons/primeicons.css',
    'primeflex/primeflex.css',
    '~/assets/main.css'
  ],

  devtools: { enabled: true },

  modules: ['@nuxt/image', '@nuxt/eslint', '@nuxtjs/robots', '@nuxtjs/sitemap', 'nuxt-og-image'],

  postcss: {
    plugins: {
      'postcss-nesting': {}
    }
  },

  robots: {
    disallow: ['/cards'],
    blockNonSeoBots: true
  },

  site: {
    url: process.env.NUXT_PUBLIC_SITE_URL,
    env: process.env.NUXT_APP_ENV,
    name: 'tmlmt',
    indexable: true
  },

  typescript: {
    tsConfig: {
      compilerOptions: {
        baseUrl: './'
      }
    }
  },

  compatibilityDate: '2024-08-27'
})
