import reactRefresh from 'eslint-plugin-react-refresh'
import globals from 'globals'
import tsParser from '@typescript-eslint/parser'
import eslint from '@eslint/js'
import { defineConfig } from 'eslint/config';
import typescriptEslint from 'typescript-eslint';
import reactPluginHooks from 'eslint-plugin-react-hooks'

export default defineConfig(
  {
    ignores: ['dist/*', '.eslintrc.config.mjs'],
  },
  {
    files: ['src/**/*.{ts,tsx}'],
  },
  eslint.configs.recommended,
  typescriptEslint.configs.recommended,
  {
    plugins: {
      'react-refresh': reactRefresh,
      'react-hooks': reactPluginHooks,
    },

    languageOptions: {
      globals: {
        ...globals.browser,
      },
      parser: tsParser,
    },

    rules: {
      ...reactPluginHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        {
          allowConstantExport: true,
        },
      ],
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": "error"
    },
  }
)
