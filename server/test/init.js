/* eslint no-param-reassign:0, no-underscore-dangle:0 */
const mocha = require('mocha');
const mongoose = require('mongoose');
const config = require('config');

const originalRun = mocha.run;
mocha.run = function (fn) {
  const runner = originalRun(fn);

  runner.on('suite end', function (suite) {
    suite.tests = null;
    suite._beforeAll = null;
  });
};

function clearDB() {
  const keys = Object.keys(mongoose.connection.collections);
  keys.forEach(function (key) {
    mongoose.connection.collections[key].remove(function () {});
  });
}

before(function () {
  this.connectToDB = function () {
    if (mongoose.connection.readyState === 0) {
      mongoose.connect(config.db.test, function (err) {
        if (err) {
          throw err;
        }
        clearDB();
      });
    }
  };

  this.connectToDB();
  this.mongoose = mongoose;
  this.db = mongoose.connection;
});

beforeEach(function () {
  this.connectToDB();
  clearDB();
});
