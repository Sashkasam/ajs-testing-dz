import globals from "globals";
import pluginJs from "@eslint/js";


export default [
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  {rules: {
      "no-unused-vars": "warn",
      "no-useless-escape": "warn"
    }
  },
  {ignores: ["dist/*", "coverage/*"]}
];