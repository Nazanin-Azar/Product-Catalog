import { defineNuxtConfig } from "nuxt/config";


export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", 'nuxt-icon'],
   build: {
    transpile: ["vue-toastification"],  
  },
   css: [
    "vue-toastification/dist/index.css"
  ],
})

