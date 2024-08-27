// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: ['nuxt-umami'],

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

  modules: ['@nuxt/image-edge', '@nuxtjs/robots', '@nuxtjs/sitemap', 'nuxt-og-image', '@kevinmarrec/nuxt-pwa'],

  postcss: {
    plugins: {
      'postcss-nesting': {}
    }
  },

  pwa: {
    icon: {
      source: './public/logoSquare.png',
      maskablePadding: 0,
      maskableSource: './public/logoMaskable.png'
    },
    meta: {
      mobileAppIOS: true,
      appleStatusBarStyle: 'black-translucent',
      name: 'Thomas Lamant',
      theme_color: '#666666',
      description: false,
      ogTitle: false,
      ogDescription: false,
      ogImage: false,
      ogUrl: false
    },
    manifest: {
      short_name: 'tmlmt',
      name: 'Thomas Lamant',
      description:
        "Thomas Lamant's homepage",
      theme_color: '#666666'
    }
  },

  robots: {
    disallow: ['/cards'],
    blockNonSeoBots: true
  },

  site: {
    url: 'https://www.tmlmt.com',
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
