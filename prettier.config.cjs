/** @type {import("prettier").Config} */
module.exports = {
  plugins: ['prettier-plugin-astro', 'prettier-plugin-tailwindcss'],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
  trailingComma: 'es5',
  semi: false, // Ejemplo de configuración personalizada
  singleQuote: true, // Usar comillas simples
  tabWidth: 2,
  endOfLine: 'auto',
  // trailingComma: 'none' // Sin comas finales
}
