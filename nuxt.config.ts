// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      apiBase: "/trpc",
    },
  },
  modules: [
    "nuxt-windicss",
    // "trpc-nuxt",
    "@vueuse/nuxt",
  ],
  buildModules: ["@pinia/nuxt"],
  windicss: {
    analyze: true,
  },
  trpc: {
    baseURL: "", // Set empty string (default) to make requests by relative address
    endpoint: "/trpc", // defaults to /trpc
  },
  typescript: {
    strict: true, // required to make input/output types work
  },
});
