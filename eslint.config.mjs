// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt({
  rules: {
    "vue/singleline-html-element-content-newline": "off",
    "vue/html-self-closing": "off",
  },
});
