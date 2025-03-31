import eslintPluginPrettier from "eslint-plugin-prettier";
import eslintConfigPrettier from "eslint-config-prettier";
import eslintPluginTS from "@typescript-eslint/eslint-plugin";
import eslintParserTS from "@typescript-eslint/parser";
import eslintPluginAngular from "@angular-eslint/eslint-plugin";
import eslintParserAngular from "@angular-eslint/template-parser";

export default [
  {
    ignores: ["node_modules", "dist"],
  },
  {
    files: ["apps/backend/**/*.ts"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parser: eslintParserTS,
    },
    plugins: {
      "@typescript-eslint": eslintPluginTS,
      prettier: eslintPluginPrettier,
    },
    rules: {
      ...eslintPluginTS.configs.recommended.rules,
      "prettier/prettier": "error",
      "no-console": "warn",
      "@typescript-eslint/no-unused-vars": ["error", { "argsIgnorePattern": "^_" }],
      "no-var": "error",
      "prefer-const": "error",
      "eqeqeq": ["error", "always"],
    },
  },
  {
    files: ["apps/frontend/src/**/*.ts"],
    languageOptions: {
      parser: eslintParserTS,
      ecmaVersion: "latest",
      sourceType: "module",
    },
    plugins: {
      "@typescript-eslint": eslintPluginTS,
      "@angular-eslint": eslintPluginAngular,
    },
    rules: {
      ...eslintPluginTS.configs.recommended.rules,
      ...eslintPluginAngular.configs.recommended.rules,
      "prettier/prettier": "error",
    },
  },
  eslintConfigPrettier,
];
