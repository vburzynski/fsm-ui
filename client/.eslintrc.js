module.exports = {
  root: true,
  // extends: 'airbnb-base',
  extends: 'eslint:recommended',
  plugins: [
    'import'
  ],
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module'
  },
  env: {
    browser: true,
    node: true
  },
  rules: {
    // "comma-dangle": ["error", "never"],
    "import/no-extraneous-dependencies": ["error", {
      "devDependencies": true,
      "optionalDependencies": true,
      "peerDependencies": true
    }]
  },
  settings: {
    "import/core-modules": [
      "qunit",
      "ember",
      "rsvp",
      "ember-qunit",
      "ember-data-model-fragments/attributes",
      "htmlbars-inline-precompile"
    ]
  }
};
