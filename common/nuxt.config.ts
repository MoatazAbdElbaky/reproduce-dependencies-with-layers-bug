import { createResolver } from "@nuxt/kit";
const { resolve } = createResolver(import.meta.url);

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },
  extends: [["test-nuxt-layer", { install: true }]],
  alias: { "~sahab-common": resolve("./") },
});
