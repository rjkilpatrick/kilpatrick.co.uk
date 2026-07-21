import js from "@eslint/js";
import tseslint from "typescript-eslint";
import astro from "eslint-plugin-astro";

export default tseslint.config(
  {
    ignores: ["dist/", ".astro/", "node_modules/"],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...astro.configs["flat/recommended"],
  {
    rules: {
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
    },
  },
  {
    files: ["**/*.astro"],
    rules: {
      // Astro frontmatter often destructures Astro.props without an explicit
      // interface for simple layouts/components; keep this a warning only.
      "@typescript-eslint/no-unused-vars": "off",
    },
  }
);
