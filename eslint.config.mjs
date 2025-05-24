import { defineConfig } from "eslint/config";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import { fixupPluginRules } from "@eslint/compat";
import globals from "globals";
import tsParser from "@typescript-eslint/parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default defineConfig([{
    extends: compat.extends(
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@next/next/recommended",
    ),

    plugins: {
        react,
        "react-hooks": fixupPluginRules(reactHooks),
        "@typescript-eslint": typescriptEslint,
    },

    languageOptions: {
        globals: {
            ...globals.browser,
            ...globals.jest,
            ...globals.node,
        },

        parser: tsParser,
        ecmaVersion: 11,
        sourceType: "module",

        parserOptions: {
            ecmaFeatures: {
                jsx: true,
            },
        },
    },

    settings: {
        react: {
            version: "detect",
        },
    },

    rules: {
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn",
        "react/prop-types": "off",
        "react/react-in-jsx-scope": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "arrow-parens": ["error", "as-needed"],
        "eol-last": ["error", "never"],
        quotes: ["error", "single"],

        "no-unused-vars": ["error", {
            argsIgnorePattern: "^_",
        }],

        "object-curly-spacing": ["error", "always"],
        "object-shorthand": ["error", "properties"],

        "react/jsx-tag-spacing": ["error", {
            afterOpening: "never",
            beforeClosing: "never",
            beforeSelfClosing: "always",
            closingSlash: "never",
        }],

        "react/jsx-curly-spacing": ["error", {
            when: "never",

            children: {
                when: "always",
            },
        }],

        "react/jsx-curly-brace-presence": ["error", {
            props: "always",
            children: "always",
        }],

        "no-multiple-empty-lines": ["error", {
            max: 1,
            maxEOF: 0,
        }],

        "no-console": 2,
        "block-spacing": [2, "always"],
        "comma-dangle": ["error", "never"],
        "default-case": 2,
        indent: ["error", "tab"],
        "keyword-spacing": 2,
        "max-len": [2, 150, 4],
        "newline-after-var": [2, "always"],
        "no-caller": 2,
        "no-case-declarations": 0,
        "no-debugger": 2,
        "no-extra-boolean-cast": 0,
        "no-eval": 2,
        "no-prototype-builtins": 0,
        "no-use-before-define": 2,
        "react/display-name": 0,
        "react/no-children-prop": 0,
        "react/no-danger": 0,
        "react/no-find-dom-node": 0,
        "react/no-render-return-value": 0,
        "react/no-string-refs": 0,
        semi: 2,
        "space-before-function-paren": ["error", "never"],
        "space-before-blocks": 2,
        "space-infix-ops": 2,
        "vars-on-top": 2,
    },
}]);