module.exports = {
  extends: "airbnb",
  env: {
    browser: true,
    commonjs: true,
    es6: false,
    node: true,
    mocha: true
  },
  rules: {
    "func-names": 0,
    "prefer-arrow-callback": 0,
    "no-unused-expressions": 0,
    // TODO: remove this later
    "no-console": 0,
    "import/no-extraneous-dependencies": ["error", {
      devDependencies: true,
      optionalDependencies: false,
      peerDependencies: false
    }],
  }
};
