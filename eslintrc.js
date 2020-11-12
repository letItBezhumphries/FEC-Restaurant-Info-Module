module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: "airbnb",
  globals: {
    Atomics: 'readonly',
    BSN: false,
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    "react",
  ],
  rules: {
    "react/jsx-filename-extension": [
      1,
      {
        extensions: [".js", "jsx"]
      }
    ],
    "max-len": ["error", 80]
  },
  settings: {
    "import/resolver": {
      webpack: {
        config: "webpack.config.js"
      }
    }
  }
};
