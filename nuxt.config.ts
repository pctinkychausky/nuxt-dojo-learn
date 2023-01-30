// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss"],
  app: {
    head: {
      title: "Nuxt Dojo",
      meta: [{ name: "description", content: "Everything about Nuxt 3" }],
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/icon?family=Material+Icons",
        },
      ],
    },
  },
  runtimeConfig: { currencyKey: process.env.CURRENCY_API_KEY },
  // public: { currencyKey: process.env.CURRENCY_API_KEY },
});
