import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { createResolver } from "@nuxt/kit";
const { resolve } = createResolver(import.meta.url);

const currentDir = dirname(fileURLToPath(import.meta.url));

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  hooks: {
    "prerender:routes"({ routes }) {
      routes.clear();
    },
  },
  router: {
    options: {
      hashMode: true,
    },
  },
  app: {
    head: {
      bodyAttrs: {
        style: "min-height: 100vh;",
      },
    },
  },
  ssr: false,
  vue: {
    propsDestructure: true,
  },
  alias: { "~base": resolve("./") },
  modules: [
    "maz-ui/nuxt",
    "@vueuse/nuxt",
    "@nuxtjs/i18n",
    "nuxt-typed-router",
    "@element-plus/nuxt",
    "@nuxtjs/tailwindcss",
    "@hebilicious/vue-query-nuxt",
    "@nuxt/eslint",
  ],
  css: [
    "element-plus/theme-chalk/dark/css-vars.css",
  ],
  vueQuery: {
    queryClientOptions: {
      defaultOptions: { queries: { staleTime: 5000 } },
    },
  },
  tailwindcss: {
    configPath: join(currentDir, "./tailwind.config.ts"),
  },
  components: [],
  imports: {
    scan: false,
  },
  typescript: {
    typeCheck: true,
  },
});
