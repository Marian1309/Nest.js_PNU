/** @type {import('prettier').Config} */

const prettierConfig = {
  printWidth: 90,
  trailingComma: 'none',
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  jsxSingleQuote: false,
  arrowParens: 'always',
  useTabs: false,
  quoteProps: 'as-needed',
  importOrder: [
    '^(react/(.*)$)|^(react$)',
    '^(next/(.*)$)|^(next$)',

    '<THIRD_PARTY_MODULES>',

    '^@/lib',

    '^../',
    '^./'
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  plugins: ['@trivago/prettier-plugin-sort-imports']
};

module.exports = prettierConfig;
