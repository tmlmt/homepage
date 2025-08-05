// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt([
  // This first object applies your custom Vue rules globally to all files.
  {
    rules: {
      "vue/singleline-html-element-content-newline": "off",
      "vue/html-self-closing": "off",
    },
  },
  // This second object applies its settings ONLY to files matching 'scripts/**/*.mjs'.
  {
    files: ["scripts/**/*.mjs"],
    languageOptions: {
      ecmaVersion: "latest",
    },
  },
]);
