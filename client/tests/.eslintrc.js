module.exports = {
  extends: "airbnb",
  env: {
    embertest: true,
    mocha: true,
    es6: false,
    node: true,
    browser: true,
    commonjs: true,
  },
  rules: {
    "func-names": 0,
    "prefer-arrow-callback": 0,
    "no-unused-expressions": 0,
    // TODO: remove this later
    "no-console": 0,
    "import/no-extraneous-dependencies": 0,
  }
};
