module.exports = {
  root: true,
  extends: 'airbnb-base',
  plugins: [
    'import'
  ],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module'
  },
  env: {
    browser: true,
    node: true
  },
  rules: {
    "import/no-extraneous-dependencies": ["error", {
      "devDependencies": true,
      "optionalDependencies": true,
      "peerDependencies": true
    }]
  },
  settings: {
    "import/core-modules": [ "ember" ]
  }
};
