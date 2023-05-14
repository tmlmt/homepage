// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
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
  modules: ['@nuxt/image-edge', 'nuxt-simple-robots', 'nuxt-simple-sitemap'],
  postcss: {
    plugins: {
      'postcss-nesting': {}
    }
  },
  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL
    }
  }
})
