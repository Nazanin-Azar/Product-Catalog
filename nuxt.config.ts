import { defineNuxtConfig } from "nuxt/config";


export default defineNuxtConfig({
  app: {
    head: {
      link: [
        {rel: 'icon', type: 'image/svg+xml', href: '/uil--cube.svg'}
      ]
    }
  },
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", '@nuxt/image', 'nuxt-icon'],
   build: {
    transpile: ["vue-toastification"],  
  },
   css: [
    "vue-toastification/dist/index.css"
  ],
})