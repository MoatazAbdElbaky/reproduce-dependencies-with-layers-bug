import withNuxt from "./.playground/.nuxt/eslint.config.mjs";

export default withNuxt({
  rules: {
    "vue/html-self-closing": "off",
    "vue/attribute-hyphenation": "off",
    "vue/v-on-event-hyphenation": "off",
    "@typescript-eslint/unified-signatures": "off",
  },
});
