import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig, globalIgnores } from "eslint/config";
import reactYouMightNotNeedAnEffect from "eslint-plugin-react-you-might-not-need-an-effect";
import reactRefresh from "eslint-plugin-react-refresh";
import reactHooks from "eslint-plugin-react-hooks";
import react from "eslint-plugin-react";
import threejs from "@react-three/eslint-plugin";

export default defineConfig([
  globalIgnores(["dist"]),
  reactYouMightNotNeedAnEffect.configs.recommended,
  reactRefresh.configs.recommended,
  reactHooks.configs.flat.recommended,
  threejs.configs.recommended,
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      react,
    },
  },
]);
