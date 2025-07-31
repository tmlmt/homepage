// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
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

  css: [
    'primeicons/primeicons.css',
    'primeflex/primeflex.css',
    'primeflex/themes/primeone-light.css',
    '~/assets/main.css'
  ],

  devtools: { enabled: true },

  modules: ['nuxt-umami', '@nuxt/image', '@nuxt/eslint', '@nuxtjs/robots', '@nuxtjs/sitemap', 'nuxt-og-image'],

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

  umami: {
    host: 'https://stats.lamanufactu.re',
    id: '91e5f788-0a06-48d9-aaae-c7a06c2e13e2',
    ignoreLocalhost: true,
    useDirective: true
  },

  compatibilityDate: '2024-08-27'
})
