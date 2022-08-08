module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'max-len': [
      'error',
      {
        code: 110,
      },
    ],
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'ignore',
      },
    ],
    'arrow-parens': ['error', 'as-needed'],
    'no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true,
      },
    ],
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.js', '.tsx'],
      },
    ],
    'react/self-closing-comp': [
      'error',
      {
        component: true,
        html: false,
      },
    ],
    'no-plusplus': [
      'error',
      {
        allowForLoopAfterthoughts: true,
      },
    ],
    'react/destructuring-assignment': [
      'error',
      'always',
      {
        ignoreClassFields: true,
      },
    ],
    'lines-around-comment': [
      'error',
      {
        beforeBlockComment: true,
        afterBlockComment: false,
        beforeLineComment: true,
        afterLineComment: false,
        allowBlockStart: true,
        allowBlockEnd: false,
        allowObjectStart: true,
        allowArrayStart: true,
        allowClassStart: true,
      },
    ],
    'no-trailing-spaces': [
      'error',
      {
        ignoreComments: true,
        skipBlankLines: false,
      },
    ],
    'no-confusing-arrow': [
      'error',
      {
        allowParens: true,
      },
    ],
    'no-multiple-empty-lines': [
      'error',
      {
        max: 1,
      },
    ],
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'parent', 'sibling', 'index'],
      },
    ],
    'import/newline-after-import': [
      'error',
      {
        count: 1,
      },
    ],
    'jsx-a11y/label-has-associated-control': [
      'error',
      {
        required: {
          some: ['nesting', 'id'],
        },
      },
    ],
    'jsx-a11y/label-has-for': [
      'error',
      {
        required: {
          some: ['nesting', 'id'],
        },
      },
    ],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'padded-blocks': ['off'],
    'no-alert': 'off',
    'no-unused-vars': 0,
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        ignoreRestSiblings: true,
        varsIgnorePattern: '^_',
        argsIgnorePattern: '^_',
      },
    ],
    'import/no-extraneous-dependencies': 'off',

    // TODO: We should revisit some of those rules and enable them
    'class-methods-use-this': 'off',
    'react/jsx-props-no-spreading': ['off'],
    'react/prop-types': ['off'],
    'react/jsx-curly-newline': ['off'],
    'react/static-property-placement': ['off'],
    'react/function-component-definition': ['off'],
    'react/jsx-no-useless-fragment': ['off'],
    'function-paren-newline': ['off'],
    'react/jsx-props-no-multi-spaces': ['off'],
    'react/jsx-curly-brace-presence': ['off'],
    'no-use-before-define': ['off'],
    'react/jsx-one-expression-per-line': ['off'],
    'no-undef': ['off'],
    'react/no-deprecated': ['off'],
    'react/prefer-stateless-function': ['off'],
    'react/forbid-prop-types': ['off'],
    'import/no-import-module-exports': ['off'],
    'no-promise-executor-return': ['off'],
    'import/no-cycle': ['off'],
    'react/state-in-constructor': ['off'],
    'default-param-last': ['off'],
    camelcase: ['off'],
    'jsx-a11y/click-events-have-key-events': ['off'],
    'jsx-a11y/no-noninteractive-element-interactions': ['off'],
    'react/no-unstable-nested-components': ['off'],
    'react/no-unused-prop-types': ['off'],
    'jsx-a11y/control-has-associated-label': ['off'],
    'import/prefer-default-export': ['off'],
    'no-mixed-operators': ['off'],
    'jsx-a11y/mouse-events-have-key-events': ['off'],
    'jsx-a11y/no-static-element-interactions': ['off'],
    'react/require-default-props': ['off'],
    'react/react-in-jsx-scope': ['off'],
    'max-classes-per-file': ['off'],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
