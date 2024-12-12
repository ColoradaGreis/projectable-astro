import eslintPluginAstro from 'eslint-plugin-astro'
import prettierPlugin from 'eslint-plugin-prettier'
import eslintPluginReact from 'eslint-plugin-react'

export default [
  // add more generic rule sets here, such as:
  // js.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  {
    plugins: {
      prettier: prettierPlugin,
      react: eslintPluginReact,
    },
    rules: {
      'prettier/prettier': ['error'],
      'no-unused-vars': 'warn',
      semi: ['error', 'never'],
      quotes: ['error', 'single'],
      'padded-blocks': ['error', 'never'],
      'no-multiple-empty-lines': ['error', { max: 1 }],
      'no-trailing-spaces': 'error',
      'no-multi-spaces': 'error',
      'react/react-in-jsx-scope': 'off',
      'react/jsx-closing-bracket-location': [1, 'line-aligned'],
    },
  },
]
