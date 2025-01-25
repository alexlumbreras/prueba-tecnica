import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import pluginReact from 'eslint-plugin-react';
import pluginPrettier from 'eslint-plugin-prettier';

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    files: ['**/*.{js,ts,jsx,tsx}'],
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: globals.browser,
    },
    plugins: {
      '@typescript-eslint': tseslint,
      react: pluginReact,
      prettier: pluginPrettier,
    },
    rules: {
      ...pluginJs.configs.recommended.rules,
      ...tseslint.configs.recommended.rules,
      ...pluginReact.configs.recommended.rules,
      'react/react-in-jsx-scope': 'off',
      '@typescript-eslint/no-unused-vars': ['warn'],
      '@typescript-eslint/no-explicit-any': 'error',
      'no-console': 'error',
      'prettier/prettier': 'error',
      'prefer-const': 'warn',
      'eol-last': ['warn', 'always'],
      'react-hooks/exhaustive-deps': 'warn',
      'react/no-array-index-key': 'error',
      '@typescript-eslint/strict-boolean-expressions': 'error',
      'no-magic-numbers': ['warn'],
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
];
