// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  nitro: {
    preset: 'static'
  }, 
  modules: ['@nuxt/content', '@nuxtjs/tailwindcss', '@nuxt/image'],
  devtools: { enabled: true },
  css: ['@/assets/main.css'],
  image: {

  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
  },
  compatibilityDate: '2024-04-03',
  content: {
    renderer: {
      anchorLinks: false,
    }
  }
})